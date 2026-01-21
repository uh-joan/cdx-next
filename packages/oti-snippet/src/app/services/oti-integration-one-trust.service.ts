import {
  OTICookiesChangeEvent,
  OTICookiesPreferences,
  OTICookiesValue,
  OtiIntegrationInterfaceConfig,
  OTIOptions,
  OTIOTDataLayer,
  OTLibrary,
} from '../oti.model';
import { LogService } from './log.service';
import { OtiIntegrationInterfaceService } from './oti-integration-interface.service';
import { PubSubService } from './pub-sub.service';

export class OtiIntegrationOneTrustService implements OtiIntegrationInterfaceService {
  private otKey?: string;
  private isOnProduction!: boolean;
  private otLanguage?: string;
  private otLocalStorage = false;

  readonly cookiePreferenceChange$: PubSubService<OTICookiesChangeEvent>;

  constructor(private logService: LogService) {
    this.cookiePreferenceChange$ = new PubSubService<OTICookiesChangeEvent>();
  }

  private _isOptanonInitiallyLoad(): boolean {
    return !this._getOTDataLayer().some(
      (item) => item.event === 'trackOptanonEvent',
    );
  }

  private _getOTApplicableKey(): string {
    let key = this.otKey || '';

    if (!this.isOnProduction) {
      key += '-test';
    }

    return key;
  }

  private _getCookiesActiveGroups(): OTICookiesPreferences {
    let prev = null;
    let next = null;

    const dataLayer = this._getOTDataLayer();

    /* dataLayer is the one which gets updated with the latest categories whenever
        we make any changes to the cookie categories from OneTrust preference center */
    const groupsUpdated = dataLayer.filter(
      (item) => item.event === 'OneTrustLoaded',
    );
    if (groupsUpdated.length > 1) {
      prev =
        groupsUpdated[groupsUpdated.length - 2]['OnetrustActiveGroups'].split(
          ',',
        );
      next =
        groupsUpdated[groupsUpdated.length - 1]['OnetrustActiveGroups'].split(
          ',',
        );
    } else if (groupsUpdated.length === 1) {
      next =
        groupsUpdated[groupsUpdated.length - 1]['OnetrustActiveGroups'].split(
          ',',
        );
    }

    return { prev, next };
  }

  private _getCurrentActiveCookiesGroup(): OTICookiesValue | null {
    return this._getCookiesActiveGroups().next;
  }

  private _getPreviousActiveCookiesGroup(): OTICookiesValue | null {
    return this._getCookiesActiveGroups().prev;
  }

  private _getOTDataLayer(): OTIOTDataLayer {
    const dataLayer: OTIOTDataLayer | undefined = (window as any).dataLayer;

    if (!dataLayer) {
      throw new Error('OneTrust library is not loaded');
    }

    return dataLayer;
  }

  private _getOTLibrary(): OTLibrary | undefined {
    return (window as unknown as any).OneTrust;
  }

  configure({ options, isOnProduction }: OtiIntegrationInterfaceConfig) {
    this.isOnProduction = isOnProduction;
    this.otKey = options.ot_key;
    this.otLanguage = options.ot_language;
    this.otLocalStorage = options.ot_localStorage === true;
  }

  enabled(): boolean {
    return !!this.otKey;
  }

  init(): void {
    // make sure to create OptanonWrapper before load One Trust scripts
    (window as any).OptanonWrapper = () => {
      this.onCookiePreferencesChanges();
    };

    this.logService.log('OneTrust initialized');

    const cookieBannerId = this._getOTApplicableKey();
    this.logService.log('OT Key=', cookieBannerId);
    const script1 = document.createElement('script');
    script1.setAttribute('type', 'text/javascript');
    script1.setAttribute(
      'src',
      `https://cdn.cookielaw.org/consent/${cookieBannerId}/OtAutoBlock.js`,
    );

    const script2 = document.createElement('script');
    script2.setAttribute('type', 'text/javascript');
    script2.setAttribute(
      'src',
      'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
    );
    if (this.otLocalStorage) {
      script2.setAttribute('amp', 'true');
    }
    if (this.otLanguage) {
      script2.setAttribute('data-language', this.otLanguage);
    }
    script2.setAttribute('charset', 'UTF-8');
    script2.setAttribute('data-domain-script', cookieBannerId);

    const header = document.getElementsByTagName('head')[0];
    if (header) {
      header.appendChild(script1);
      header.appendChild(script2);
    }
  }

  public onCookiePreferencesChanges(): void {
    if (this._isOptanonInitiallyLoad()) {
      const nextActiveGroups = this._getCurrentActiveCookiesGroup();

      if (!nextActiveGroups) {
        this.logService.log('Missing CookiesPreference');
      } else {
        this.cookiePreferenceChange$.publish({
          initial: true,
          next: nextActiveGroups,
        });
      }
    } else {
      const nextActiveGroups = this._getCurrentActiveCookiesGroup();
      const prevActiveGroups = this._getPreviousActiveCookiesGroup();

      if (!nextActiveGroups || !prevActiveGroups) {
        this.logService.log('Missing CookiesPreference');
      } else {
        this.cookiePreferenceChange$.publish({
          initial: false,
          next: nextActiveGroups,
          prev: prevActiveGroups,
        });
      }
    }
  }

  public openCookiePreferences(): void {
    const otLibrary: OTLibrary | undefined = this._getOTLibrary();
    if (otLibrary) {
      otLibrary.ToggleInfoDisplay();
    }
  }

  printDebug(): void {
    const otStorage = localStorage.getItem(this._getOTApplicableKey());
    if (!otStorage) {
      console.warn('Unable to get user preferences');
    } else {
      const otStorageObj = JSON.parse(otStorage);

      const otPreferences: { [k: string]: string } = {};
      otStorageObj.OptanonConsent.split('&').reduce(
        (obj: { [k: string]: string }, data: string) => {
          const dataArray = data.split('=');
          if (dataArray.length >= 2) {
            obj[dataArray[0]] = dataArray[1];
          }
          return obj;
        },
        otPreferences,
      );

      const otGroups: { [k: string]: boolean } = {};
      decodeURIComponent(otPreferences['groups'])
        .split(',')
        .reduce((obj: { [k: string]: boolean }, data) => {
          const dataArray = data.split(':');
          if (dataArray.length >= 2) {
            obj[dataArray[0]] = dataArray[1] === '1';
          }
          return obj;
        }, otGroups);

      console.table(otGroups);
    }
  }
}
