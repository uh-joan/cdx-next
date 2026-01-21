import { AppInfoResponseModel } from '../model/app-info-response.model';
import { OtiIntegrationInterfaceConfig } from '../oti.model';
import { HttpService } from './http.service';
import { JwtExtractorService } from './jwt-extractor.service';
import { OtiIntegrationInterfaceService } from './oti-integration-interface.service';

export class OtiIntegrationZendeskService implements OtiIntegrationInterfaceService {
  private zendeskDomain = 'https://clarivate8549.zendesk.com';
  private zendeskAppName?: string;
  private zendeskLibraryUrl?: string;
  private zendeskKey?: string;
  private zendeskRedirectToHelpCenter!: boolean;
  private zendeskShowOriginalArticleLink!: boolean;
  private zendeskWidgetHorizontalPosition?: 'left' | 'right';
  private zendeskEnvironment?: string;

  private readonly http: HttpService;
  private readonly jwtExtractorService: JwtExtractorService;

  private zendeskAppSettings?: { cookies: boolean; token: string | undefined };
  private zendeskAlreadyAuthenticated = false;
  private zendeskAuthCallback?: (jwt: string) => void;
  private zendeskHelpCenterUrl?: string;
  private zendeskWebWidgetJWT?: string;

  constructor() {
    this.http = new HttpService();
    this.jwtExtractorService = new JwtExtractorService();
  }

  configure({ options }: OtiIntegrationInterfaceConfig) {
    this.zendeskKey = options.zendesk_key;
    this.zendeskAppName = options.zendesk_appName;
    this.zendeskLibraryUrl =
      options.zendesk_url || 'https://static.zdassets.com/ekr/snippet.js';
    this.zendeskRedirectToHelpCenter =
      options.zendesk_redirect_to_help_center === true;
    this.zendeskShowOriginalArticleLink =
      options.zendesk_hide_article_link !== true;
    this.zendeskWidgetHorizontalPosition = options.zendesk_position;
    this.zendeskEnvironment = options.zendesk_environment;
  }

  private consumeAuthCallback(jwt: string) {
    if (this.zendeskAuthCallback) {
      this.zendeskAuthCallback(jwt);
      this.zendeskAuthCallback = undefined;
    }
  }

  private async getAuthenticatedAccessUrl(
    appJwtToken?: string,
  ): Promise<string | undefined> {
    const jwtResponse = await this.http.get<{ jwt: string }>(
      `/zendesk-access/jwt/hc?appName=${this.zendeskAppName}&env=${
        this.zendeskEnvironment || ''
      }`,
      appJwtToken,
    );

    return `${this.zendeskDomain}/access/jwt?jwt=${
      jwtResponse.jwt
    }&return_to=${encodeURIComponent(this.zendeskHelpCenterUrl || '')}`;
  }

  private async getAppInfo(
    appJwtToken?: string,
  ): Promise<AppInfoResponseModel> {
    return await this.http.get<AppInfoResponseModel>(
      `/zendesk-access/app-info?appName=${this.zendeskAppName}&env=${
        this.zendeskEnvironment || ''
      }`,
      appJwtToken,
    );
  }

  private async getHelpCenterUrl(
    appJwtToken?: string,
  ): Promise<string | undefined> {
    let url: string | undefined;

    if (this.zendeskHelpCenterUrl) {
      url = this.zendeskHelpCenterUrl;
    } else {
      url = (await this.getAppInfo(appJwtToken)).helpCenterUrl;
    }

    return (this.zendeskHelpCenterUrl = url);
  }

  private async getWebWidgetJWT(
    appJwtToken?: string,
  ): Promise<string | undefined> {
    let jwt: string | undefined;

    if (this.zendeskWebWidgetJWT) {
      jwt = this.zendeskWebWidgetJWT;
    } else {
      const jwtResponse = await this.http.get<{ jwt: string }>(
        `/zendesk-access/jwt/widget?appName=${this.zendeskAppName}&env=${
          this.zendeskEnvironment || ''
        }`,
        appJwtToken,
      );

      jwt = jwtResponse.jwt;
    }

    return (this.zendeskWebWidgetJWT = jwt);
  }

  private executeOnZendeskLibrary(
    name: string,
    method: string,
    params?: (() => void) | { [k: string]: unknown },
  ): any {
    const lib = (window as any).zE;

    if (typeof lib === 'function') {
      return lib(name, method, params);
    } else {
      console.warn(`Zendesk not loaded for executing ${name}.${method}`);
    }
  }

  private getAsynchronousHTMLElement<T>(
    container: HTMLElement,
    selector: string,
  ): Promise<T> {
    const _findElement = (
      stack: number,
      callback: (el: Element | null) => void,
    ) => {
      const zendeskWidgetIFrame = container.querySelector(selector);

      if (zendeskWidgetIFrame) {
        callback(zendeskWidgetIFrame);
      } else if (stack > 100) {
        callback(null);
      } else {
        setTimeout(() => _findElement(stack + 1, callback), 100);
      }
    };

    return new Promise<T>((resolve, reject) => {
      _findElement(0, (zendeskWidgetIFrame) => {
        if (zendeskWidgetIFrame) {
          resolve(zendeskWidgetIFrame as T);
        } else {
          reject(new Error(`Unable to find ${selector}`));
        }
      });
    });
  }

  private getAuthenticatedHelpCenterUrl(accessUrl: string, url: string) {
    return `${accessUrl.replace(
      /[?&]return_to=[^?&]*/,
      '',
    )}&return_to=${encodeURIComponent(url)}`;
  }

  private replaceByAuthUrls(
    accessUrl: string,
    urlPattern: string,
    zendeskHelpCenterContentEl: Element,
  ) {
    if (!this.zendeskAlreadyAuthenticated) {
      const aLinks = zendeskHelpCenterContentEl.querySelectorAll(
        'a:not([data-testid])',
      );

      aLinks.forEach((aEl) => {
        const url = aEl.getAttribute('href');

        if (url && url?.startsWith(urlPattern)) {
          aEl.addEventListener('click', (event: Event) => {
            if (!this.zendeskAlreadyAuthenticated) {
              event.preventDefault();

              this.zendeskAlreadyAuthenticated = true;

              const authUrl = this.getAuthenticatedHelpCenterUrl(
                accessUrl,
                url,
              );
              window.open(authUrl, '_blank');
            }
          });
        }
      });
    }
  }

  private async replaceHelpCenterAuthLinks(
    accessUrl: string,
    urlPattern: string,
  ) {
    const zendeskWidgetIFrame =
      await this.getAsynchronousHTMLElement<HTMLIFrameElement>(
        document.body,
        '#webWidget',
      );
    const zendeskWidgetContainer =
      zendeskWidgetIFrame.contentWindow?.document.body;

    if (
      zendeskWidgetContainer &&
      !zendeskWidgetContainer.getAttribute('oti-snippet')
    ) {
      zendeskWidgetContainer.setAttribute('oti-snippet', 'yes');

      this.searchZendeskLinks(accessUrl, urlPattern, zendeskWidgetContainer);
      zendeskWidgetContainer.addEventListener('click', () =>
        this.searchZendeskLinks(accessUrl, urlPattern, zendeskWidgetContainer),
      );
    }
  }

  private handleFurtherReRender(
    targetNode: HTMLElement,
    callback: () => void,
  ): void {
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          callback();
        }
      }
    });

    observer.observe(targetNode, { childList: true, subtree: true });
  }

  private async prepareHelpCenter(appJwtToken?: string) {
    const tokens = await this.getWebWidgetJWT(appJwtToken);
    this.zendeskHelpCenterUrl = await this.getHelpCenterUrl(appJwtToken);

    if (tokens) {
      this.consumeAuthCallback(tokens);

      if (this.zendeskHelpCenterUrl) {
        const accessUrl = await this.getAuthenticatedAccessUrl(appJwtToken);
        if (accessUrl) {
          await this.replaceHelpCenterAuthLinks(
            accessUrl,
            this.zendeskHelpCenterUrl,
          );
        }
      }
    }
  }

  private async redirectToHelpCenter(
    appJwtToken: string | undefined,
    helpCenterUrl?: string,
  ) {
    const accessUrl = await this.getAuthenticatedAccessUrl(appJwtToken);
    const targetUrl = helpCenterUrl || this.zendeskHelpCenterUrl;

    if (accessUrl && targetUrl) {
      window.open(this.getAuthenticatedHelpCenterUrl(accessUrl, targetUrl));
    }
  }

  private async searchZendeskLinks(
    accessUrl: string,
    urlPattern: string,
    zendeskWidgetContainerEl: HTMLElement,
  ) {
    const zendeskHelpCenterContent =
      await this.getAsynchronousHTMLElement<HTMLElement>(
        zendeskWidgetContainerEl,
        'main',
      );

    if (!zendeskHelpCenterContent.getAttribute('oti-snippet')) {
      zendeskHelpCenterContent.setAttribute('oti-snippet', 'yes');

      this.replaceByAuthUrls(accessUrl, urlPattern, zendeskHelpCenterContent);
      this.handleFurtherReRender(zendeskHelpCenterContent, () =>
        this.replaceByAuthUrls(accessUrl, urlPattern, zendeskHelpCenterContent),
      );
    }
  }

  private setUpPosition() {
    if (this.zendeskWidgetHorizontalPosition) {
      this.executeOnZendeskLibrary('webWidget', 'updateSettings', {
        webWidget: {
          position: { horizontal: this.zendeskWidgetHorizontalPosition },
        },
      });
    }
  }

  private whenFunctionLibraryIsReady() {
    this.executeOnZendeskLibrary('webWidget', 'hide');

    this.executeOnZendeskLibrary('webWidget:on', 'open', async () => {
      this.setUpPosition();

      const appJwtToken = await this.extractApplicationToken();

      if (this.zendeskRedirectToHelpCenter) {
        this.executeOnZendeskLibrary('webWidget', 'close');
        await this.redirectToHelpCenter(appJwtToken);
      } else {
        await this.prepareHelpCenter(appJwtToken);
      }
    });

    this.executeOnZendeskLibrary('webWidget:on', 'close', () =>
      this.executeOnZendeskLibrary('webWidget', 'helpCenter:reauthenticate'),
    );
  }

  enabled(): boolean {
    return this.zendeskKey !== undefined;
  }

  private async getPlatformTokenStorageAttributes(): Promise<{
    cookies: boolean;
    tokenName?: string;
    tokenAttr: string | undefined;
  }> {
    const response = await this.http.get<{
      cookies: boolean;
      storageTokenName?: string;
      storageTokenAttr?: string;
    }>(
      `/zendesk-access/app-storage?appName=${this.zendeskAppName}&env=${
        this.zendeskEnvironment || ''
      }`,
    );

    return {
      cookies: response.cookies,
      tokenName: response.storageTokenName,
      tokenAttr: response.storageTokenAttr,
    };
  }

  private async extractApplicationToken(): Promise<string | undefined> {
    try {
      if (!this.zendeskAppSettings) {
        const { cookies, tokenName, tokenAttr } =
          await this.getPlatformTokenStorageAttributes();

        if (!cookies && !tokenName) {
          throw new Error('Missing zendesk platform token identifier');
        }

        this.zendeskAppSettings = {
          cookies,
          token: tokenName
            ? this.jwtExtractorService.extract(tokenName, tokenAttr)
            : undefined,
        };
      }
    } catch (e) {
      console.error(e);
    }

    return this.zendeskAppSettings?.token;
  }

  async goToZendeskHelpCenter(helpCenterUrl?: string): Promise<void> {
    const jwtToken = await this.extractApplicationToken();

    return this.redirectToHelpCenter(jwtToken, helpCenterUrl);
  }

  init(): void {
    if (!this.zendeskKey) {
      throw new Error('Missing zendesk key');
    }

    if (!this.zendeskAppName) {
      throw new Error('Missing zendesk appName');
    }

    (window as any).zESettings = {
      webWidget: {
        helpCenter: {
          originalArticleButton: this.zendeskShowOriginalArticleLink,
        },
        authenticate: {
          jwtFn: (callback: (jwt: string) => void) => {
            this.zendeskAuthCallback = callback;
          },
        },
      },
    };

    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('id', 'ze-snippet');
    script.setAttribute(
      'src',
      `${this.zendeskLibraryUrl}?key=${this.zendeskKey}`,
    );

    const headerEl = document.getElementsByTagName('head')[0];
    if (headerEl) {
      script.addEventListener('load', () => this.whenFunctionLibraryIsReady());
      headerEl.appendChild(script);
    }
  }
}
