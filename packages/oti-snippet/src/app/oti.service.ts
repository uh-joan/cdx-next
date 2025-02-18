import {
  OTISnowplowContextData,
  OTISnowplowContextSchema,
  OTISnowplowPageViewEvent,
  OTISnowplowStructEvent,
} from './model/oti-integration-snowplow.model';
import {
  OTICookiesChangeEvent,
  OTIOptions,
  OTIPendoDetails,
  OTIPendoDetailsCallback,
  OTIPendoPayload,
  OTIPendoPayloadCallback,
  OTIUserDetails,
} from './oti.model';
import { LogService } from './services/log.service';
import { OtiIntegrationOneTrustService } from './services/oti-integration-one-trust.service';
import { OtiIntegrationPendoService } from './services/oti-integration-pendo.service';
import { OtiIntegrationSnowplow } from './services/oti-integration-snowplow';
import { OtiIntegrationZendeskService } from './services/oti-integration-zendesk.service';
import { PubSubService } from './services/pub-sub.service';

export class OtiService {
  private readonly logService = new LogService();
  private readonly oneTrustIntegration: OtiIntegrationOneTrustService;
  private readonly pendoIntegration: OtiIntegrationPendoService;
  private readonly snowplowIntegration: OtiIntegrationSnowplow;
  private readonly zendeskIntegration: OtiIntegrationZendeskService;

  private options?: OTIOptions;

  readonly userChange$: PubSubService<OTIUserDetails | null> =
    new PubSubService<OTIUserDetails | null>();

  constructor(options?: OTIOptions) {
    this.options = options;

    if (options) {
      console.warn(
        'OTIOptions send on constructor is deprecated, please use initialize method instead',
      );
    }

    this.oneTrustIntegration = new OtiIntegrationOneTrustService(
      this.logService,
    );
    this.pendoIntegration = new OtiIntegrationPendoService(
      this.oneTrustIntegration.cookiePreferenceChange$,
      this.logService,
    );
    this.snowplowIntegration = new OtiIntegrationSnowplow(
      this.oneTrustIntegration.cookiePreferenceChange$,
      this.userChange$,
      this.logService,
    );
    this.zendeskIntegration = new OtiIntegrationZendeskService();
  }

  private _isOnProduction(
    isOnProduction: boolean | null | undefined,
    productionDomain: string | null | undefined,
  ): boolean {
    let prod = false;

    if (isOnProduction != null) {
      prod = isOnProduction;
    } else if (productionDomain) {
      prod = document.location.href.indexOf(productionDomain) >= 0;
    }

    return prod;
  }

  private _removeCookie(
    cookieName: string,
    path: string,
    domain: string | undefined,
  ): void {
    let cookieValue = cookieName + '=';
    cookieValue += '; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    cookieValue += '; path=' + (path || '/');

    if (domain) {
      cookieValue += '; domain=' + domain;
    }

    document.cookie = cookieValue;
  }

  initialize(options?: OTIOptions) {
    this.options = options || this.options;

    if (!this.options) {
      throw new Error('OTIOptions is required');
    }
    const prod = this._isOnProduction(
      this.options.prod_env,
      this.options.prod_domain,
    );

    this.pendoIntegration.configure({
      options: this.options,
      isOnProduction: prod,
    });
    if (this.pendoIntegration.enabled()) {
      this.pendoIntegration.init();
    }

    this.oneTrustIntegration.configure({
      options: this.options,
      isOnProduction: prod,
    });
    if (this.oneTrustIntegration.enabled()) {
      this.oneTrustIntegration.init();
    }

    this.zendeskIntegration.configure({
      options: this.options,
      isOnProduction: prod,
    });
    if (this.zendeskIntegration.enabled()) {
      this.zendeskIntegration.init();
    }

    this.snowplowIntegration.configure({
      options: this.options,
      isOnProduction: prod,
    });
    if (this.snowplowIntegration.enabled()) {
      this.snowplowIntegration.init();
    }
  }

  public onCookieChanges(
    handler: (event$: OTICookiesChangeEvent) => void,
  ): string {
    return this.oneTrustIntegration.cookiePreferenceChange$.subscribe(
      (nextActiveGroups) => {
        handler(nextActiveGroups);
      },
    );
  }

  public openCookiePreferences(): void {
    this.oneTrustIntegration.openCookiePreferences();
  }

  public goToZendeskHelpCenter(helpCenterUrl?: string): Promise<void> {
    return this.zendeskIntegration.goToZendeskHelpCenter(helpCenterUrl);
  }

  public printDebug(): void {
    this.oneTrustIntegration.printDebug();
  }

  public removeCookies(path: string, domain?: string): void {
    this._removeCookie('OptanonConsent', path, domain);
    this._removeCookie('OptanonAlertBoxClosed', path, domain);
  }

  resetAnalyticsContext(context: OTISnowplowContextSchema): void {
    return this.snowplowIntegration.resetContext(context);
  }

  public setDebug(debug: boolean): void {
    this.logService.setDebug(debug);
  }

  public trackEvent(evt: OTISnowplowStructEvent): void {
    this.snowplowIntegration.trackSnowplowStructEvent(evt);
  }

  public trackNamedEvent(name: string, props?: { [k: string]: string }): void {
    this.pendoIntegration.track({ name, props });
  }

  public trackPageView(evt?: OTISnowplowPageViewEvent): void {
    this.snowplowIntegration.trackSnowplowPageView(evt);
  }

  updateAnalyticsContextData(contextData: OTISnowplowContextData): void {
    return this.snowplowIntegration.updateContextData(contextData);
  }

  public updateVisitorPayload(
    pendoVisitorPayload?: OTIPendoPayloadCallback | OTIPendoPayload,
    pendoDetails?: OTIPendoDetailsCallback | OTIPendoDetails,
  ): Promise<void> {
    return this.pendoIntegration.updateVisitorPayload(
      pendoVisitorPayload,
      pendoDetails,
    );
  }

  public updateUserId(userId?: string): Promise<void> {
    return new Promise((resolve) => {
      this.userChange$.publish(userId ? { userId } : null);
      resolve();
    });
  }
}
