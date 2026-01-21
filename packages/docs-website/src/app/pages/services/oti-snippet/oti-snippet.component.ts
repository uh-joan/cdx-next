import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

import { ExternalLinkComponent } from '../../../components/external-link/external-link.component';
import { HighlightComponent } from '../../../components/highlight/highlight.component';
import { PageComponent } from '../../../core/page/page.component';

@Component({
  selector: 'cdx-oti-snippet',
  templateUrl: './oti-snippet.component.html',
  imports: [
    PageComponent,
    MatDivider,
    HighlightComponent,
    MatTableModule,
    ExternalLinkComponent,
  ],
})
export class OtiSnippetComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  scriptRegistry = `<script src="https://sp-library.prod.sp.aws.clarivate.net/oti/{VERSION}/index.umd.js"></script>`;
  scriptRegistryWithVersion = `<script src="https://sp-library.prod.sp.aws.clarivate.net/oti/1.1.61/index.umd.js"></script>`;
  scriptRegistryWithLatestVersion = `<script src="https://sp-library.prod.sp.aws.clarivate.net/oti/1.1.61/index.umd.js"></script>`;

  usageAsModule = `import { Component, OnInit } from '@angular/core';
import { OtiService } from '@sp/oti-snippet';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        const otiService = new OtiService();
    
        otiService.initialize({
          ot_key: 'xxxx-xxxxx-xxxxxx',
          prod_domain: 'www.mysite.com',
          pendo_key: 'xxxx-xxxxx-xxxxxx',
          pendo_details: {
            visitor: { id: 'xxxx-xxxxx-xxxxxx' },
          },
        });
    }
}`;

  usageAsAVariable = `<script>
if (typeof Oti !== 'undefined' && typeof Oti.OtiService !== 'undefined') {
    const otiService = new Oti.OtiService();

    otiService.initialize({
        ot_key : 'xxxx-xxxxx-xxxxxx',
        prod_domain : 'www.mysite.com',
        pendo_key : 'xxxx-xxxxx-xxxxxx',
        pendo_details: {
         visitor: { id: 'xxxx-xxxxx-xxxxxx' }          
        }
    });
}
</script>`;

  displayedColumnsOptions: string[] = [
    'option',
    'required',
    'type',
    'default',
    'description',
  ];
  dataSourceOptions = [
    {
      option: 'app_id',
      required: true,
      type: 'string',
      default: '',
      description:
        'Application id. This id is used to identify the application in the analytics context.',
    },
    {
      option: 'user_id',
      required: false,
      type: 'string',
      default: '',
      description:
        'User id. This id is used to identify the user in the analytics context. It can be undefined for anonymous tracking.',
    },
    {
      option: 'ot_key',
      required: true,
      type: 'string',
      default: '',
      description:
        'OneTrust key, corresponding to the application Cookies scan.',
    },
    {
      option: 'ot_localStorage',
      required: false,
      type: 'boolean',
      default: 'false',
      description:
        'Flag indicating if use Local Storage instead of Cookies for storing user cookie setting.',
    },
    {
      option: 'ot_language',
      required: false,
      type: 'string',
      default: '',
      description:
        'Enable the capability to fix the language of the Cookie Banner interface. If undefined, it uses the language of the browser. For English, it should take the value "en".',
    },
    {
      option: 'prod_domain',
      required: false,
      type: 'string',
      default: '',
      description:
        'Host name used for production. This is used by the API to verify if it is in the production environment. Only used in case of prod_env is not defined.',
    },
    {
      option: 'prod_env',
      required: false,
      type: 'boolean',
      default: '',
      description: 'Flag indicating if it is on production.',
    },
    {
      option: 'pendo_key',
      required: false,
      type: 'string',
      default: '',
      description:
        'Pendo key. This key should be unique per application. It is used to obtain Pendo Guides and to link user usage to an application.',
    },
    {
      option: 'pendo_details',
      required: false,
      type: 'object, () => object',
      default: '',
      description:
        'Pendo details, which are sent to Pendo. This param could be an object with the Pendo details or a function returning the details. In case of a function, it is called just before initializing Pendo.',
    },
    {
      option: 'pendo_optimize_requests',
      required: false,
      type: 'boolean',
      default: 'false',
      description:
        'Flag indicating whether initial Pendo requests (visitor, DNP, metadata) should only be executed once per session. Useful for non-SPA applications where reloading the page would otherwise trigger these requests repeatedly.',
    },
    {
      option: 'pendo_dnp_url',
      required: false,
      type: 'string',
      default: '/pendo/dnp',
      description: 'URL used to update DNP settings.',
    },
    {
      option: 'pendo_dnp_method',
      required: false,
      type: 'string',
      default: 'PUT',
      description: 'HTTP method used when updating DNP settings.',
    },
    {
      option: 'pendo_visitor_url',
      required: false,
      type: 'string',
      default: '/pendo/visitor',
      description: 'URL used when updating visitor information.',
    },
    {
      option: 'pendo_visitor_payload',
      required: false,
      type: 'object[], (visitorId) => object[]',
      default: '',
      description:
        'Pendo visitor information, sent to Pendo. This param could be an object with the visitor info or a function returning the info. If a function, it is called just before executing the visitor request. Notice that the object must be an array.',
    },
    {
      option: 'pendo_visitor_method',
      required: false,
      type: 'string',
      default: 'POST',
      description: 'HTTP method used when updating visitor information.',
    },
    {
      option: 'pendo_metadata_url',
      required: false,
      type: 'string',
      default: '/pendo/metadata',
      description: 'URL used when updating metadata.',
    },
    {
      option: 'pendo_metadata_method',
      required: false,
      type: 'string',
      default: 'PUT',
      description: 'HTTP method used when updating metadata.',
    },
    {
      option: 'pendo_url',
      required: false,
      type: 'string',
      default: 'https://cdn.pendo.io/agent/static/${pendoKey}/pendo.js',
      description: 'URL for downloading Pendo API library.',
    },
    {
      option: 'pendo_visitor_id_generator',
      required: false,
      type: '() => string',
      default: '',
      description:
        'Function for customizing the generation of anonymous users.',
    },
    {
      option: 'pendo_cname_content',
      required: false,
      type: 'string',
      default: '',
      description:
        'An alternate URL to load guide content from. This will replace the standard Google storage URL for your subscription. Usually used for CNAME setups.',
    },
    {
      option: 'pendo_cname_data',
      required: false,
      type: 'string',
      default: '',
      description:
        'An alternate URL to use when transmitting event data. Usually used for CNAME setups.',
    },
    {
      option: 'request_headers',
      required: false,
      type: 'object',
      default: '',
      description:
        'HTTP headers sent on every request. It can be used for authentication parameters, for example.',
    },
    {
      option: 'request_with_credentials',
      required: false,
      type: 'boolean',
      default: 'false',
      description:
        'When true, credentials are sent on HTTP requests even when requested from a different domain.',
    },
    {
      option: 'snowplow_enabled',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Flag indicating if Snowplow is enabled.',
    },
    {
      option: 'snowplow_context_data',
      required: false,
      type: 'object',
      default: '{ appsessionId: <snowplow_session_id>, product: }',
      description: 'Snowplow context data. This data is sent to Snowplow.',
    },
    {
      option: 'snowplow_event_method',
      required: false,
      type: 'string',
      default: 'post',
      description:
        'HTTP method used when sending events to Snowplow. It can take the values "post" and "get".',
    },
    {
      option: 'snowplow_session_id',
      required: false,
      type: 'string',
      default: '',
      description:
        'Session ID used to identify the user session. If defined, Snowplow is enabled for tracking; otherwise, tracking is disabled.',
    },
    {
      option: 'snowplow_url',
      required: false,
      type: 'string',
      default: '',
      description:
        'URL used when sending events to Snowplow. Default values are "snowplow-collector.userintel.prod.sp.aws.clarivate.net" for production and "snowplow-collector.staging.userintel.dev.sp.aws.clarivate.net" for non-production.',
    },
    {
      option: 'zendesk_appName',
      required: false,
      type: 'string',
      default: '',
      description:
        'Application name for getting Zendesk configuration from Zendesk Access platform service.',
    },
    {
      option: 'zendesk_environment',
      required: false,
      type: 'string',
      default: '',
      description:
        'Forces the use of a specific environment when integrating with Zendesk (snapshot, stable, etc.). If undefined, it deduces the environment from the URL.',
    },
    {
      option: 'zendesk_key',
      required: false,
      type: 'string',
      default: '',
      description:
        'Zendesk key. This key should be unique per application. It is used to enable integration with Zendesk.',
    },
    {
      option: 'zendesk_url',
      required: false,
      type: 'string',
      default: 'https://static.zdassets.com/ekr/snippet.js',
      description: 'URL for downloading Zendesk API library.',
    },
    {
      option: 'zendesk_hide_article_link',
      required: false,
      type: 'boolean',
      default: 'false',
      description:
        'Hides the link in the Zendesk web widget to navigate to the original article on the Zendesk platform.',
    },
    {
      option: 'zendesk_position',
      required: false,
      type: "'left', 'right'",
      default: 'right',
      description: 'Possible values are "left" (default is "right").',
    },
    {
      option: 'zendesk_redirect_to_help_center',
      required: false,
      type: 'boolean',
      default: 'false',
      description:
        'When true, instead of opening the web widget, the Zendesk Help Center page is opened in a separate tab.',
    },
  ];

  displayedColumnsMethods: string[] = [
    'method',
    'params',
    'returnType',
    'description',
  ];

  dataSourceMethods = [
    {
      method: 'onCookieChanges',
      params: 'function',
      return: 'void',
      description:
        'Adds a listener for each cookie configuration change. The function sent as a parameter receives the object { next: string[], prev?: string[] } with the cookies changes. The listener is triggered once during initial setup and every time the user changes their cookie preferences.',
    },
    {
      method: 'openCookiePreferences',
      params: 'void',
      return: 'void',
      description: 'Opens OneTrust Cookies management panel.',
    },
    {
      method: 'printDebug',
      params: 'void',
      return: 'void',
      description: 'Shows current OneTrust cookies in the console.',
    },
    {
      method: 'resetAnalyticsContext',
      params: 'void',
      return: 'void',
      description: 'Resets the analytics context.',
    },
    {
      method: 'setDebug',
      params: 'boolean',
      return: 'void',
      description: 'Allows enabling debug mode.',
    },
    {
      method: 'trackEvent',
      params: 'string',
      return: 'void',
      description: 'Tracks an event in Snowplow.',
    },
    {
      method: 'trackNamedEvent',
      params: 'name: string, props: object',
      return: 'void',
      description: 'Tracks a named event via Pendo.',
    },
    {
      method: 'trackPageView',
      params: 'string',
      return: 'void',
      description: 'Tracks a page view event in Snowplow.',
    },
    {
      method: 'updateAnalyticsContextData',
      params: 'object',
      return: 'void',
      description:
        'Updates the analytics context data. See the "snowplow_context_data" attribute.',
    },
  ];

  oneTrustIntegration = `new OtiService({
  ot_key: 'xxxx-xxxxx-xxxxxx',
  prod_domain: 'www.mysite.com'
});
`;

  oneTrustIntegrationEnv = `import { environment } from 'src/environments/environment';

new OtiService({
  ot_key: 'xxxx-xxxxx-xxxxxx',
  prod_env: environment.production
});
`;

  cookieChanges = `import { environment } from 'src/environments/environment';

const otiService = new OtiService({
  ot_key: 'xxxx-xxxxx-xxxxxx',
  prod_env: environment.production
});

otiService.onCookieChanges(({ initial, next, prev }) => {
  console.log('Cookies has changed')
  console.log('Is initial load', initial)
  console.log('New Cookie Settings', next)
  console.log('Previous Cookie Settings', prev)
});
`;

  pendoIntegration = `new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    prod_domain: 'www.mysite.com',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    pendo_details: {
        visitor: {
            id        : "uuuu-uuuuu-uuuu",
            firstName : "John",
            lastName  : "Smith",
            email     : "john@smith@mysite.com"
        },
        account: {
            id          : "aaaa-aaaaaaa-aaaa",
            accountName : "my account"
        }
    },
    pendo_visitor_payload: [{
        visitorId : "uuuu-uuuuu-uuuu",
        values    : {            
            firstName : "John",
            lastName  : "Smith"
        }
    }]
});
`;

  visitorCreation = `curl 'https://app.pendo.io/api/v1/metadata/visitor/agent/value?create=true'
-H 'x-pendo-integration-key: pppppp-ppppp-ppppp-pppppp'
-H 'content-type: application/json'
--data-raw '[{"visitorId":"xxxx-xxxxx-xxxx","values":{"firstname":"John","lastname":"Smith"}}]'
`;

  dnpUpdate = `curl 'https://app.pendo.io/api/v1/metadata/visitor/pendo/value/uuuu-uuuuu-uuuu/donotprocess'
-X 'PUT'
-H 'x-pendo-integration-key: pppppp-ppppp-ppppp-pppppp'
--data-raw 'false'
`;

  metadataUpdate = `curl 'https://app.pendo.io/api/v1/metadata/visitor/custom/value/uuuu-uuuuu-uuuu/APPID_targetingcookies'
-X 'PUT'
-H 'x-pendo-integration-key: pppppp-ppppp-ppppp-pppppp'
--data-raw '"YES"'
`;
  workAroud1 = `new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',    
    pendo_key : 'yyyy-yyyyyy-yyyy',
    ...
    pendo_visitor_url: '/ui/pendoapi/agent/value?create=true',
    pendo_dnp_url: '/ui/pendoapi/pendo/value/uuuu-uuuuu-uuuu/donotprocess',
    pendo_metadata_url: '/ui/pendoapi/custom/value/uuuu-uuuuu-uuuu/APP_targetingcookies',
});
`;

  reverseProxy = `location ~ ^/ui/pendoapi/(.*) {
    set $pendo_url https://app.pendo.io;
    proxy_pass $pendo_url/api/v1/metadata/visitor/$1$is_args$args;

    proxy_ssl_server_name on;
    proxy_set_header x-pendo-integration-key pppppp-ppppp-ppppp-pppppp;
}
`;

  angular = `{
    "context": ["/ui/pendoapi/"],
    "target": "https://app.pendo.io",
    "secure": false,
    "pathRewrite": {"^/ui/pendoapi/": "/api/v1/metadata/visitor/"},
    "logLevel": "debug",
    "changeOrigin": true,
    "bypass": function (req) {
        req.headers["x-pendo-integration-key"] = "pppppp-ppppp-ppppp-pppppp";
    }
},
`;

  customHeaders = `new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    ...
    request_headers: { 'x-1p-id': 'ssss-ssssss-ssss' }
});
`;

  cname = `new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    ...
    pendo_cname_content: '${window.location.origin}/analytics/pendo',
    pendo_cname_data: '${window.location.origin}/analytics/pendo',
});
`;

  cname2 = `location ~ ^/ui/analytics/pendo/guide-content/(.*) {
        set $pendo_guides_url https://pendo-static-XXXXXXXXX.storage.googleapis.com;
        proxy_pass $pendo_guides_url/guide-content/$1$is_args$args;
    }

    location ~ ^/ui/analytics/pendo/data/(.*) {
        set $pendo_events_url https://app.pendo.io;
        proxy_pass $pendo_events_url/data/$1$is_args$args;
    }
`;

  anonymousUser = `new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    prod_domain: 'www.mysite.com',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    pendo_details: {}
});
`;
  anonymousUser2 = `<code>
new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    prod_domain: 'www.mysite.com',
    pendo_key: 'yyyy-yyyyyy-yyyy',
    pendo_visitor_id_generator: () => \`_OTI_\${Math.random().toString(36).slice(2, 9)}\`,
    pendo_details: {}
});
</code>
`;
  anonymousUser3 = `<code>
new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    prod_domain: 'www.mysite.com',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    pendo_details: {},
    pendo_visitor_payload: (visitorId) => ({
        visitorId : visitorId
    })
});
</code>
`;

  snowPlow = `new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    prod_env: true,
    snowplow_enabled: true
});
`;

  zenDesk = `new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    prod_domain: 'www.mysite.com',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    ...,
    zendesk_key: 'zzzz-zzzzzz-zzzz'
});
`;
  problem = `document. cookie.split('; ')
[0]: "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Oct+11+2022+11%3A32%3A15+GMT2B0200+(Central+European+Summer+Time)&vers"
[1]: "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Oct+11+2022+14%3A51%3A39+GMT$2B0200+(Central+European+Summer+Time)&vers"
`;
  solution = `new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    ...
    ot_localStorage: true
});
`;
}
