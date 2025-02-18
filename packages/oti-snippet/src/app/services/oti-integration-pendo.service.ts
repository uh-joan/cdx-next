import { CookiesCategory } from '../model/cookies-category.model';
import {
  OTICookiesChangeEvent,
  OTICookiesSession,
  OTIHttpHeaders,
  OtiIntegrationInterfaceConfig,
  OTIPendoDetails,
  OTIPendoDetailsCallback,
  OTIPendoLib,
  OTIPendoPayload,
  OTIPendoPayloadCallback,
  OTIPendoTrackEvent,
  OTIPendoVisitorIdGeneratorCallback,
} from '../oti.model';
import { LogService } from './log.service';
import { OtiIntegrationInterfaceService } from './oti-integration-interface.service';
import { PubSubService } from './pub-sub.service';

export class OtiIntegrationPendoService
  implements OtiIntegrationInterfaceService
{
  private pendoCNameContent?: string;
  private pendoCNameData?: string;
  private pendoKey?: string;
  private pendoDetails?: OTIPendoDetailsCallback | OTIPendoDetails;
  private pendoOptimizeRequest?: boolean;
  private pendoDnpUrl?: string;
  private pendoDnpMethod?: string;
  private pendoVisitorUrl?: string;
  private pendoVisitorPayload?: OTIPendoPayloadCallback | OTIPendoPayload;
  private pendoVisitorMethod?: string;
  private pendoMetadataUrl?: string;
  private pendoMetadataMethod?: string;
  private pendoTimeLapse = 1000;
  private pendoUrl?: string;
  private pendoVisitorIdGenerator?: OTIPendoVisitorIdGeneratorCallback;
  private requestHeaders?: OTIHttpHeaders;
  private requestWithCredentials = false;

  private initTimeout: {
    nextActiveGroups: string[];
    timeout: number;
    promise: Promise<void>;
    reject: (err: unknown) => void;
  } | null = null;
  private isTrackingEnabled = false;
  private requestTimeout: number | null = null;
  private sessionWriteTimeout: number | null = null;
  private untrackedEvents: OTIPendoTrackEvent[] = [];

  constructor(
    private cookiePreferenceChange$: PubSubService<OTICookiesChangeEvent>,
    private logService: LogService,
  ) {}

  private _applyTemplatesToUrl(url: string): string {
    return url.replace(/\$\{visitorId}/g, this._getVisitorId());
  }

  private _callDNP(dnpValue: boolean): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.logService.log('Call DNP request. val=', dnpValue);

      if (!this.pendoDnpUrl || !this.pendoDnpMethod) {
        throw new Error('Missing pendo parameters');
      }

      this._executeDelayedRequest(
        this._applyTemplatesToUrl(this.pendoDnpUrl),
        this.pendoDnpMethod,
        JSON.stringify(dnpValue),
      )
        .then(async () => {
          this.logService.log('Call DNP success');
          resolve(dnpValue);
        })
        .catch((error) => {
          console.error('There was an error!', error);
          reject();
        });
    });
  }

  private _createVisitorId(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.pendoVisitorUrl || !this.pendoVisitorMethod) {
        throw new Error('Missing pendo parameters');
      }
      const payload = this._getVisitorPayload();
      this.logService.log('CreateVisitorId request.', payload);

      this._executeDelayedRequest(
        this._applyTemplatesToUrl(this.pendoVisitorUrl),
        this.pendoVisitorMethod,
        payload ? JSON.stringify(payload) : null,
      )
        .then(async (response) => {
          if (response.status === 200) {
            this.logService.log('CreateVisitorId success');
            resolve();
          } else {
            console.error('CreateVisitorId failed!');
            reject();
          }
        })
        .catch((error) => {
          console.error('There was an error!', error);
          reject();
        });
    });
  }

  private _digestUntrackedEvents(): void {
    if (this.isTrackingEnabled) {
      this.untrackedEvents.forEach((evt) => this._trackPendoEvent(evt));
      this.untrackedEvents = [];
    }
  }

  private async _disablePendo(): Promise<void> {
    this.logService.log('Disable pendo');

    const pendoLib = await this._getPendoLibraryAsync();

    if (pendoLib.isReady()) {
      pendoLib.stopGuides();
      pendoLib.stopSendingEvents();
    }

    this.isTrackingEnabled = false;
  }

  private async _enablePendo(): Promise<void> {
    const pendoLib = await this._getPendoLibraryAsync();

    if (pendoLib.isReady()) {
      this.logService.log('Enable pendo');
      pendoLib.startGuides();
      pendoLib.startSendingEvents();
    } else {
      this.logService.log('Initialize pendo');
      pendoLib.initialize({
        ...this._getPendoDetails(),
        contentHost: this.pendoCNameContent,
        dataHost: this.pendoCNameData,
      });
    }

    this.isTrackingEnabled = true;
    this._digestUntrackedEvents();
  }

  private _executeRequest(
    url: string,
    method: string,
    body: BodyInit | null = null,
  ): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (this.requestHeaders) {
      for (const hname in this.requestHeaders) {
        if (this.requestHeaders[hname]) {
          headers.append(hname, this.requestHeaders[hname]);
        }
      }
    }

    const credentials: RequestCredentials | undefined = this
      .requestWithCredentials
      ? 'include'
      : undefined;

    const request = new Request(url, {
      method,
      headers,
      credentials,
      body,
    });

    return fetch(request);
  }

  private _executeDelayedRequest(
    url: string,
    method: string,
    body: BodyInit | null = null,
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      // this timeout is added because Pendo allows only one API call
      // per second per visitor
      const remainingTime = this.requestTimeout
        ? this.pendoTimeLapse - (new Date().getTime() - this.requestTimeout)
        : 0;

      if (remainingTime > 0) {
        window.setTimeout(() => {
          this._executeDelayedRequest(url, method, body)
            .then(resolve)
            .catch(reject);
        }, remainingTime);
      } else {
        this.requestTimeout = new Date().getTime();

        this._executeRequest(url, method, body).then(resolve).catch(reject);
      }
    });
  }

  private _generateAnonymousVisitorId(): string {
    let visitorId: string;

    if (typeof this.pendoVisitorIdGenerator === 'function') {
      visitorId = this.pendoVisitorIdGenerator();
    } else {
      const pendoLib = this._getPendoLibrary();
      visitorId = pendoLib ? pendoLib.get_visitor_id() : '';
    }

    return visitorId;
  }

  private _getAnonymousVisitorId(): string {
    let visitorId: string | undefined = this._readVisitorIdFromLocalStorage();

    if (!visitorId) {
      visitorId = this._generateAnonymousVisitorId();
      this._writeVisitorIdFromLocalStorage(visitorId);
    }

    return visitorId;
  }

  private _getPendoDetails(): OTIPendoDetails {
    let pendoDetails: OTIPendoDetails;

    if (!this.pendoDetails) {
      throw new Error('Missing pendo parameters');
    } else if (typeof this.pendoDetails === 'function') {
      pendoDetails = this.pendoDetails();
    } else {
      pendoDetails = this.pendoDetails;
    }

    return {
      ...pendoDetails,
      visitor: {
        ...pendoDetails.visitor,
        id: pendoDetails.visitor?.id || this._getAnonymousVisitorId(),
      },
    };
  }

  private _getPendoLibrary(): OTIPendoLib | undefined {
    return (window as any).pendo;
  }

  private _getPendoLibraryAsync(): Promise<OTIPendoLib> {
    return new Promise((resolve, reject) => {
      let pendoStack = 0;

      const pendoTimeout = window.setInterval(() => {
        const pendoLib = this._getPendoLibrary();

        if (pendoLib && typeof pendoLib.isReady === 'function') {
          clearInterval(pendoTimeout);
          resolve(pendoLib);
        } else if (pendoStack > 100) {
          clearInterval(pendoTimeout);
          reject(new Error('Unable to load pendo library'));
        } else {
          pendoStack++;
        }
      }, 50);
    });
  }

  private _getVisitorId(): string {
    const pendoDetails = this._getPendoDetails();

    if (!pendoDetails.visitor?.id) {
      throw new Error('Unable to determine visitor id');
    }

    return pendoDetails.visitor.id;
  }

  private _getVisitorIdLocalStorageKey(): string {
    return `_oti_visitorId.${this.pendoKey}`;
  }

  private _getVisitorPayload(): OTIPendoPayload | null {
    let payload: OTIPendoPayloadCallback | OTIPendoPayload | undefined =
      this.pendoVisitorPayload;

    if (typeof this.pendoVisitorPayload === 'function') {
      payload = this.pendoVisitorPayload(this._getVisitorId());
    }

    if (!payload) {
      payload = [
        {
          visitorId: this._getVisitorId(),
        },
      ];
    }

    return payload;
  }

  private _loadScript(pendoUrl: string, pendoKey: string): void {
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute(
      'class',
      `optanon-category-${CookiesCategory.FUNCTIONAL}`,
    );

    const parsedPendoUrl = pendoUrl.replace(/\$\{pendoKey}/g, pendoKey);

    script.text = `
                  (function() {
                    (function(p, e, n, d, o) { 
                      let v, w, x, y, z; 
                      o = p[d] = p[d] || {}; 
                      o._q = [];
                      v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track']; 
                      for (w = 0, x = v.length; w < x; ++w)(function(m) {
                        o[m] = o[m] || function() {o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0))); }; 
                      })(v[w]);
                      y = e.createElement(n); 
                      y.async = !0; 
                      y.src = '${parsedPendoUrl}';
                      z = e.getElementsByTagName(n)[0]; 
                      z.parentNode.insertBefore(y, z); 
                    })(window, document, 'script', 'pendo');
                  })();
              `;

    const headerEl = document.getElementsByTagName('head')[0];
    if (headerEl) {
      headerEl.appendChild(script);
    }
  }

  private _notifyInitialCookieSettingsDelayed(
    nextActiveGroups: string[],
  ): Promise<void> {
    if (this.initTimeout) {
      clearTimeout(this.initTimeout.timeout);

      let promise: Promise<void>;
      return (promise = new Promise((resolve, reject) => {
        this.initTimeout = {
          promise,
          nextActiveGroups,
          timeout: window.setTimeout(() => {
            if (this.initTimeout) {
              this._notifyInitialCookieSettings(
                this.initTimeout.nextActiveGroups,
              )
                .then(resolve)
                .catch(reject);
              this.initTimeout = null;
            } else {
              reject(new Error('Notify timeout break unexpectedly'));
            }
          }, 1000),
          reject,
        };
      }));
    } else {
      let promise: Promise<void>;
      return (promise = new Promise((resolve, reject) => {
        this.initTimeout = {
          promise,
          nextActiveGroups,
          timeout: window.setTimeout(() => {
            if (this.initTimeout) {
              this._notifyInitialCookieSettings(
                this.initTimeout.nextActiveGroups,
              )
                .then(resolve)
                .catch(reject);
              this.initTimeout = null;
            } else {
              reject(new Error('Notify timeout break unexpectedly'));
            }
          }, 1000),
          reject,
        };
      }));
    }
  }

  private async _notifyInitialCookieSettings(
    nextActiveGroups: string[],
  ): Promise<void> {
    const dnpValue =
      nextActiveGroups.indexOf(CookiesCategory.FUNCTIONAL) === -1;
    const targetingCookieValue =
      nextActiveGroups.indexOf(CookiesCategory.TARGETING) === -1 ? 'NO' : 'YES';

    this.logService.log(
      'CookiesPreference Init dnp=' +
        dnpValue +
        ', targetingCookieValue=' +
        targetingCookieValue,
    );

    if (
      this.pendoOptimizeRequest &&
      this._sessionMatchPendoCategories(dnpValue, targetingCookieValue)
    ) {
      this.logService.log(
        'CookiesPreference up to date. Verified from session',
      );
      this._setPendoAppEnabled(dnpValue);
    } else {
      /* _createVisitorId() is invoked for the first time to make sure that the visitor exists in Pendo to
            further invoke _callDNP() or _updateCustomMetadataField(). If the visitor is not existing
            then these 2 API calls will fail with a 404 visitor not found */
      await this._createVisitorId();

      const dnpPromise = this._callDNP(dnpValue);
      const metaPromise = this._updateCustomMetadataField(targetingCookieValue);

      dnpPromise.then(() => this._setPendoAppEnabled(dnpValue));

      if (this.pendoOptimizeRequest) {
        await this._sessionWritePendoCategories(dnpPromise, metaPromise);
      }
    }
  }

  private async _notifyUpdateCookieSettings(
    nextActiveGroups: string[],
    prevActiveGroups: string[],
  ): Promise<void> {
    const pevDNPValue =
      prevActiveGroups.indexOf(CookiesCategory.FUNCTIONAL) === -1;
    const nxtDNPValue =
      nextActiveGroups.indexOf(CookiesCategory.FUNCTIONAL) === -1;
    const FunctionalCategoryChanged = pevDNPValue != nxtDNPValue;

    const prvTargetingCookieValue =
      prevActiveGroups.indexOf(CookiesCategory.TARGETING) === -1 ? 'NO' : 'YES';
    const nxtTargetingCookieValue =
      nextActiveGroups.indexOf(CookiesCategory.TARGETING) === -1 ? 'NO' : 'YES';
    const TargetingCategoryChanged =
      prvTargetingCookieValue != nxtTargetingCookieValue;

    this.logService.log(
      'CookiesPreference Update' +
        ' dnp=' +
        nxtDNPValue +
        ', targetingCookieValue=' +
        nxtTargetingCookieValue +
        (FunctionalCategoryChanged ? ', functional' : '') +
        (TargetingCategoryChanged ? ', targeting' : ''),
    );

    if (FunctionalCategoryChanged || TargetingCategoryChanged) {
      let dnpPromise: Promise<boolean>;
      if (FunctionalCategoryChanged) {
        dnpPromise = this._callDNP(nxtDNPValue);
        dnpPromise.then(() => this._setPendoAppEnabled(nxtDNPValue));
      } else {
        dnpPromise = Promise.resolve(nxtDNPValue);
      }

      let metaPromise: Promise<string>;
      if (TargetingCategoryChanged) {
        metaPromise = this._updateCustomMetadataField(nxtTargetingCookieValue);
      } else {
        metaPromise = Promise.resolve(nxtTargetingCookieValue);
      }

      if (this.pendoOptimizeRequest) {
        await this._sessionWritePendoCategories(dnpPromise, metaPromise);
      }
    }
  }

  private _readVisitorIdFromLocalStorage(): string | undefined {
    const visitorSortedData = localStorage.getItem(
      this._getVisitorIdLocalStorageKey(),
    );
    const visitorSortedObject: { value: string } | undefined = visitorSortedData
      ? JSON.parse(visitorSortedData)
      : undefined;

    return visitorSortedObject?.value;
  }

  private _updateCustomMetadataField(
    targetingCookieValue: string,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      this.logService.log('UpdateMetadata val=', targetingCookieValue);

      if (!this.pendoMetadataUrl || !this.pendoMetadataMethod) {
        throw new Error('Missing pendo parameters');
      }

      this._executeDelayedRequest(
        this._applyTemplatesToUrl(this.pendoMetadataUrl),
        this.pendoMetadataMethod,
        JSON.stringify(targetingCookieValue),
      )
        .then(async () => {
          this.logService.log('UpdateMetadata success');
          resolve(targetingCookieValue);
        })
        .catch((error) => {
          console.error('There was an error!', error);
          reject();
        });
    });
  }

  private _setPendoAppEnabled(dnpValue: boolean): void {
    if (!dnpValue) {
      this._enablePendo();
    } else {
      this._disablePendo();
    }
  }

  private _sessionMatchPendoCategories(
    dnp: boolean,
    targetingCookieValue: string,
  ): boolean {
    const categories = this._sessionReadPendoCategories();

    return (
      categories != null &&
      (categories?.functionalCookies === 'true') == dnp &&
      categories.targetingCookies == targetingCookieValue
    );
  }

  private _sessionReadPendoCategories(): OTICookiesSession | null {
    let result: OTICookiesSession | null = null;

    if (typeof window.sessionStorage !== 'undefined') {
      const visitorId = this._getVisitorId();
      const categoriesString = window.sessionStorage.getItem(
        'pendo_categories_' + visitorId,
      );
      result = categoriesString ? JSON.parse(categoriesString) : null;

      if (
        result != null &&
        (result.functionalCookies == null || result.targetingCookies == null)
      ) {
        result = null;
      }
    }

    return result;
  }

  private _sessionWritePendoCategories(
    dnpPromise: Promise<boolean>,
    metaPromise: Promise<string>,
  ): Promise<void> {
    return new Promise((resolve) => {
      if (this.sessionWriteTimeout != null) {
        console.error('Previous session writing has not finished correctly');
        clearInterval(this.sessionWriteTimeout);
        this.sessionWriteTimeout = null;
      }

      let error = false;

      let dnp: boolean | null = null;
      dnpPromise.then((result) => (dnp = result)).catch(() => (error = true));

      let targetingCookieValue: string | null = null;
      metaPromise
        .then((result) => (targetingCookieValue = result))
        .catch(() => (error = true));

      this.sessionWriteTimeout = window.setInterval(() => {
        if (this.sessionWriteTimeout != null) {
          if (dnp != null && targetingCookieValue != null) {
            this._sessionDoFinalWritePendoCategories(dnp, targetingCookieValue);
            resolve();
            clearInterval(this.sessionWriteTimeout);
            this.sessionWriteTimeout = null;
          } else if (error) {
            clearInterval(this.sessionWriteTimeout);
            this.sessionWriteTimeout = null;
          }
        }
      }, 1000);
    });
  }

  private _sessionDoFinalWritePendoCategories(
    dnp: boolean,
    targetingCookieValue: string,
  ): void {
    const visitorId = this._getVisitorId();
    const key = 'pendo_categories_' + visitorId;
    const categories: OTICookiesSession = {
      functionalCookies: String(dnp).toString(),
      targetingCookies: targetingCookieValue,
    };

    window.sessionStorage.setItem(key, JSON.stringify(categories));

    this.logService.log(`Write session flag key=${key}`, categories);
  }

  public _storePendoEvent(evt: OTIPendoTrackEvent): void {
    this.untrackedEvents.push(evt);
  }

  public _trackPendoEvent(evt: OTIPendoTrackEvent): void {
    this.logService.log('Pendo. Track event', evt.name, evt.props);
    this._getPendoLibrary()?.track(evt.name, evt.props);
  }

  private _writeVisitorIdFromLocalStorage(visitorId: string): void {
    const visitorSorteData = { value: visitorId };
    localStorage.setItem(
      this._getVisitorIdLocalStorageKey(),
      JSON.stringify(visitorSorteData),
    );
  }

  enabled(): boolean {
    return !!this.pendoUrl && !!this.pendoKey;
  }

  configure({ options }: OtiIntegrationInterfaceConfig) {
    this.pendoCNameContent = options.pendo_cname_content;
    this.pendoCNameData = options.pendo_cname_data;
    this.pendoKey = options.pendo_key;
    this.pendoDetails = options.pendo_details;
    this.pendoOptimizeRequest = options.pendo_optimize_requests === true;
    this.pendoDnpUrl = options.pendo_dnp_url || '/pendo/dnp';
    this.pendoDnpMethod = options.pendo_dnp_method || 'PUT';
    this.pendoVisitorUrl = options.pendo_visitor_url || '/pendo/visitor';
    this.pendoVisitorMethod = options.pendo_visitor_method || 'POST';
    this.pendoVisitorPayload = options.pendo_visitor_payload;
    this.pendoMetadataUrl = options.pendo_metadata_url || '/pendo/metadata';
    this.pendoMetadataMethod = options.pendo_metadata_method || 'PUT';
    this.pendoUrl =
      options.pendo_url ||
      'https://cdn.pendo.io/agent/static/${pendoKey}/pendo.js';
    this.pendoVisitorIdGenerator = options.pendo_visitor_id_generator;
    this.requestHeaders = options.request_headers;
    this.requestWithCredentials = options.request_with_credentials === true;
  }

  init(): void {
    if (!this.pendoUrl || !this.pendoKey) {
      throw new Error('Missing pendo parameters');
    }

    this.logService.log('Initialize pendo integration');

    this._loadScript(this.pendoUrl, this.pendoKey);

    this.cookiePreferenceChange$.subscribe(({ initial, next, prev }) =>
      this.notifyCookieSettings(initial, next, prev),
    );
  }

  public async notifyCookieSettings(
    optanonInitiallyLoad: boolean,
    nextActiveGroups: string[] | null,
    prevActiveGroups?: string[] | null,
  ): Promise<void> {
    if (optanonInitiallyLoad) {
      if (!nextActiveGroups) {
        this.logService.log('Missing CookiesPreference');
      } else {
        await this._notifyInitialCookieSettingsDelayed(nextActiveGroups);
      }
    } else {
      if (!nextActiveGroups || !prevActiveGroups) {
        this.logService.log('Missing CookiesPreference');
      } else {
        await this._notifyUpdateCookieSettings(
          nextActiveGroups,
          prevActiveGroups,
        );
      }
    }
  }

  public track(evt: OTIPendoTrackEvent): void {
    if (this.isTrackingEnabled) {
      this._trackPendoEvent(evt);
    } else {
      this._storePendoEvent(evt);
    }
  }

  public async updateVisitorPayload(
    pendoVisitorPayload?: OTIPendoPayloadCallback | OTIPendoPayload,
    pendoDetails?: OTIPendoDetailsCallback | OTIPendoDetails,
  ): Promise<void> {
    if (pendoVisitorPayload) {
      this.pendoVisitorPayload = pendoVisitorPayload;
    }
    if (pendoDetails) {
      this.pendoDetails = pendoDetails;
    }

    const cookieSettings = this.cookiePreferenceChange$.getLastValue();

    this.logService.log(
      `updateVisitorPayload. Cookies defined=${!!cookieSettings?.next}`,
    );

    if (cookieSettings) {
      await this._notifyInitialCookieSettings(cookieSettings.next);
    }
  }
}
