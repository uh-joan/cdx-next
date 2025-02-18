import { CookiesCategory } from '../model/cookies-category.model';
import {
  OTISnowplowContextData,
  OTISnowplowContextSchema,
  OTISnowplowLib,
  OTISnowplowPageViewEvent,
  OTISnowplowStructEvent,
  OTISnowplowTrackerOptions,
} from '../model/oti-integration-snowplow.model';
import {
  OTICookiesChangeEvent,
  OtiIntegrationInterfaceConfig,
  OTIOptions,
  OTIUserDetails,
} from '../oti.model';
import { LogService } from './log.service';
import { OtiIntegrationInterfaceService } from './oti-integration-interface.service';
import { PubSubService } from './pub-sub.service';

export class OtiIntegrationSnowplow implements OtiIntegrationInterfaceService {
  private static SnowplowCookieCategory = CookiesCategory.FUNCTIONAL;
  private static SnowplowDefaultDevCollectorUrl =
    'snowplow-collector.staging.userintel.dev.sp.aws.clarivate.net';
  private static SnowplowDefaultProdCollectorUrl =
    'snowplow-collector.userintel.prod.sp.aws.clarivate.net';
  private static SnowplowDefaultIgluSchema =
    'iglu:ne.clarivate.com/usage/jsonschema/2-0-0';
  private static SnowplowLibraryUrl =
    '//d3rm6si6l6yzgk.cloudfront.net/webui/sp';
  private static SnowplowLibraryVersion = '2.16.3';

  private appId!: string;
  private snowplowCollectorUrl!: string;
  private snowplowEventMethod!: string;
  private snowplowLibUrl: string;
  private snowplowLibVersion: string;
  private snowplowSessionId?: string;
  private snowplowTackerId = 'cf';
  private isOneTrustEnabled!: boolean;

  private isTrackerInitialized = false;
  private isTrackingEnabled = false;
  private initTimeout: {
    nextActiveGroups: string[];
    timeout: number;
    promise: Promise<void>;
    reject: (err: unknown) => void;
  } | null = null;
  private untrackedPageViewEvents: OTISnowplowPageViewEvent[] = [];
  private untrackedStructEvents: OTISnowplowStructEvent[] = [];
  private snowplowEnabled = false;
  private snowplowContext?: OTISnowplowContextSchema;
  private snowplowUserId?: string;

  constructor(
    private cookiePreferenceChange$: PubSubService<OTICookiesChangeEvent>,
    private userChange$: PubSubService<OTIUserDetails | null>,
    private logService: LogService,
  ) {
    this.snowplowLibUrl = OtiIntegrationSnowplow.SnowplowLibraryUrl;
    this.snowplowLibVersion = OtiIntegrationSnowplow.SnowplowLibraryVersion;
    this.userChange$.subscribe((user) => {
      this.setUserId(user?.userId);
    });
  }

  private _addSnowplowGlobalContextsToTracker(
    context: OTISnowplowContextSchema,
  ): void {
    window.snowplow('clearGlobalContexts', [this.snowplowTackerId]);
    window.snowplow(
      'addGlobalContexts',
      [JSON.parse(JSON.stringify(context))],
      [this.snowplowTackerId],
    );
  }

  private _clearUntrackedEvents(): void {
    this.untrackedPageViewEvents = [];
    this.untrackedStructEvents = [];
  }

  private _determineSnowplowCollectorUrl(
    options: OTIOptions,
    isOnProduction: boolean,
  ): string {
    return (
      options.snowplow_url ||
      (isOnProduction
        ? OtiIntegrationSnowplow.SnowplowDefaultProdCollectorUrl
        : OtiIntegrationSnowplow.SnowplowDefaultDevCollectorUrl)
    );
  }

  private _digestUntrackedEvents(): void {
    if (this.isTrackingEnabled) {
      this.untrackedPageViewEvents.forEach((evt) =>
        this._trackSnowplowPageViewEvent(evt),
      );
      this.untrackedStructEvents.forEach((evt) =>
        this._trackSnowplowStructEvent(evt),
      );
      this._clearUntrackedEvents();
    }
  }

  private _disableTrackingPlugins(): void {
    // Disable tracking plugins
  }

  private _enableTrackingPlugins(): void {
    // Enable tracking plugins
  }

  private _getSnowplowLibraryUrl(): string {
    const spPath = this.snowplowLibUrl.replace(/\/$/, '');
    const spFile = `sp-${this.snowplowLibVersion}.js`;
    return `${spPath}/${spFile}`;
  }

  private _initializeTracker(): void {
    const config: OTISnowplowTrackerOptions = {
      anonymousTracking: !this.snowplowUserId,
      appId: this.appId,
      contexts: {
        webPage: true,
        session: false,
        performanceTiming: true,
        gaCookies: true,
      },
      cookieSameSite: 'Lax',
      discoverRootDomain: true,
      encodeBase64: false,
      eventMethod: this.snowplowEventMethod,
      platform: 'web',
      withCredentials: false,
    };

    window.snowplow(
      'newTracker',
      this.snowplowTackerId,
      this.snowplowCollectorUrl,
      config,
    );

    this.isTrackerInitialized = true;

    this.logService.log(
      `Snowplow tracker #${this.snowplowTackerId} initialized`,
      config,
    );

    if (this.snowplowUserId) {
      window.snowplow('setUserId', this.snowplowUserId);
    }

    if (this.snowplowContext) {
      this._addSnowplowGlobalContextsToTracker(this.snowplowContext);
    }
  }

  private _loadSnowplow(): void {
    if (!window.snowplow) {
      window.GlobalSnowplowNamespace = window.GlobalSnowplowNamespace || [];
      window.GlobalSnowplowNamespace.push('snowplow');

      window.snowplow = ((...args: unknown[]) => {
        (window.snowplow.q = window.snowplow.q || []).push(args);
      }) as OTISnowplowLib;
      window.snowplow.q = window.snowplow.q || [];
      const scriptEl = document.createElement('script');
      const firstScriptEl = document.getElementsByTagName('script')[0];
      if (firstScriptEl) {
        scriptEl.async = true;
        scriptEl.src = this._getSnowplowLibraryUrl();
        firstScriptEl.parentNode?.insertBefore(scriptEl, firstScriptEl);

        this.logService.log(`Load snowplow library ${scriptEl.src}`);
      }
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
              this._notifyCookieSettings(this.initTimeout.nextActiveGroups)
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
              this._notifyCookieSettings(this.initTimeout.nextActiveGroups)
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

  private async _notifyCookieSettings(
    nextActiveGroups: string[],
  ): Promise<void> {
    this.isTrackingEnabled =
      nextActiveGroups.indexOf(OtiIntegrationSnowplow.SnowplowCookieCategory) >=
      0;

    this.logService.log(
      'Snowplow. CookiesPreference Set as targetingCookieValue=' +
        this.isTrackingEnabled,
    );

    if (this.isTrackingEnabled) {
      if (this.isTrackerInitialized) {
        this._enableTrackingPlugins();
      } else {
        this._initializeTracker();
      }
      this._digestUntrackedEvents();
    } else if (this.isTrackerInitialized) {
      this._disableTrackingPlugins();
    }
  }

  private async _notifyUpdateCookieSettings(
    nextActiveGroups: string[],
    prevActiveGroups: string[],
  ): Promise<void> {
    const prvTargetingCookieValue =
      prevActiveGroups.indexOf(
        OtiIntegrationSnowplow.SnowplowCookieCategory,
      ) === -1
        ? 'NO'
        : 'YES';
    const nxtTargetingCookieValue =
      nextActiveGroups.indexOf(
        OtiIntegrationSnowplow.SnowplowCookieCategory,
      ) === -1
        ? 'NO'
        : 'YES';
    const TargetingCategoryChanged =
      prvTargetingCookieValue != nxtTargetingCookieValue;

    this.logService.log(
      'Snowplow. CookiesPreference Update' +
        ' targetingCookieValue=' +
        nxtTargetingCookieValue +
        (TargetingCategoryChanged ? ', targeting' : ''),
    );

    if (TargetingCategoryChanged) {
      await this._notifyCookieSettings(nextActiveGroups);
    }
  }

  private _storeSnowplowStructEvent(evt: OTISnowplowStructEvent) {
    this.logService.log('storeStructEvent', evt);
    this.untrackedStructEvents.push({
      timestamp: new Date().getTime(),
      ...evt,
    });
  }

  private _storeSnowplowPageViewEvent(evt?: OTISnowplowPageViewEvent) {
    this.logService.log('storePageViewEvent', evt);
    this.untrackedPageViewEvents.push({
      timestamp: new Date().getTime(),
      ...evt,
    });
  }

  private _trackSnowplowStructEvent(evt: OTISnowplowStructEvent) {
    this.logService.log('trackStructEvent', evt);
    window.snowplow(
      'trackStructEvent',
      evt.category,
      evt.action,
      evt.label,
      evt.property,
      evt.value,
      undefined,
      evt.timestamp,
    );
  }

  private _trackSnowplowPageViewEvent(evt?: OTISnowplowPageViewEvent) {
    this.logService.log('trackPageView', evt);
    window.snowplow(
      'trackPageView',
      evt?.pageUrl || window.location.pathname,
      evt?.pageTitle,
      evt?.referrer,
      undefined,
      evt?.timestamp,
    );
  }

  configure({ options, isOnProduction }: OtiIntegrationInterfaceConfig) {
    this.isOneTrustEnabled = !!options.ot_key;
    this.appId = options.app_id;
    this.snowplowCollectorUrl = this._determineSnowplowCollectorUrl(
      options,
      isOnProduction,
    );
    this.snowplowLibUrl = OtiIntegrationSnowplow.SnowplowLibraryUrl;
    this.snowplowLibVersion = OtiIntegrationSnowplow.SnowplowLibraryVersion;
    this.snowplowEnabled =
      options.snowplow_enabled === true ||
      (options.snowplow_enabled === undefined &&
        options.snowplow_session_id !== undefined);
    this.snowplowSessionId = options.snowplow_session_id;
    this.snowplowUserId = options.user_id;
    this.snowplowEventMethod = options.snowplow_event_method || 'post';
    this.snowplowContext = {
      schema: OtiIntegrationSnowplow.SnowplowDefaultIgluSchema,
      data: options.snowplow_context_data || {
        appsessionId: this.snowplowSessionId,
        product: this.appId,
      },
    };
  }

  init(): void {
    this._loadSnowplow();

    if (this.isOneTrustEnabled) {
      this.cookiePreferenceChange$.subscribe(({ initial, next, prev }) =>
        this.notifyCookieSettings(initial, next, prev),
      );
    } else {
      this.isTrackingEnabled = true;
      this._initializeTracker();
    }
  }

  enabled(): boolean {
    return this.snowplowEnabled;
  }

  public async notifyCookieSettings(
    optanonInitiallyLoad: boolean,
    nextActiveGroups: string[] | null,
    prevActiveGroups?: string[] | null,
  ): Promise<void> {
    if (optanonInitiallyLoad) {
      if (!nextActiveGroups) {
        this.logService.log('Snowplow. Missing CookiesPreference');
      } else {
        await this._notifyInitialCookieSettingsDelayed(nextActiveGroups);
      }
    } else {
      if (!nextActiveGroups || !prevActiveGroups) {
        this.logService.log('Snowplow. Missing CookiesPreference');
      } else {
        await this._notifyUpdateCookieSettings(
          nextActiveGroups,
          prevActiveGroups,
        );
      }
    }
  }

  resetContext(context: OTISnowplowContextSchema): void {
    this.snowplowContext = context;
    this._addSnowplowGlobalContextsToTracker(context);
  }

  updateContextData(contextData: OTISnowplowContextData): void {
    if (this.snowplowContext) {
      this.snowplowContext.data = {
        ...this.snowplowContext.data,
        ...contextData,
      };
      this._addSnowplowGlobalContextsToTracker(this.snowplowContext);
    } else {
      console.warn('a valid context is needed for update');
    }
  }

  setUserId(userId?: string): void {
    if (this.snowplowUserId !== userId) {
      this.snowplowUserId = userId;
      this._clearUntrackedEvents();
      this.logService.log('Snowplow. SetUserId', this.snowplowUserId);
      if (this.snowplowUserId) {
        window.snowplow('setUserId', this.snowplowUserId);
        window.snowplow('disableAnonymousTracking');
      } else {
        window.snowplow('enableAnonymousTracking');
      }
    }
  }

  trackSnowplowStructEvent(evt: OTISnowplowStructEvent) {
    if (this.isTrackingEnabled) {
      this._trackSnowplowStructEvent(evt);
    } else {
      this._storeSnowplowStructEvent(evt);
    }
  }

  trackSnowplowPageView(evt?: OTISnowplowPageViewEvent) {
    if (this.isTrackingEnabled) {
      this._trackSnowplowPageViewEvent(evt);
    } else {
      this._storeSnowplowPageViewEvent(evt);
    }
  }
}
