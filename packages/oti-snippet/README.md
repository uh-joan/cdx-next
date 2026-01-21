[![Build Status](https://build.sp.clarivate.io/jenkins/buildStatus/icon?job=PSL%2Foti-snippet%2Fmaster)](https://build.sp.clarivate.io/jenkins/job/PSL/job/oti-snippet/job/master/)

This API is designed to use OneTrust as Cookies acceptance manager and integrate
some analytics tools (such as pendo) within it.

# Installation

The API is prepared to be installed as a package or imported as a
[UMD](https://github.com/umdjs/umd) file, for those implementations that do not
use modules.

## Installation on npm projects

First, it is necessary to point the project to the Clarivate package repository
instead of NPM, because the current package is only available for use by
Clarivate projects. Create a file at the root of your project, in the same place
as package.json, name it .npmrc (don't forget the leading dot!) and give it this
content:

```
@sp:registry = https://repo.clarivate.io/artifactory/api/npm/npm-central/
```

Then, install the library containing the snippet.

```
npm install @sp/oti-snippet
```

## Installation on non npm projects

Import the library in the header of the application index.html:

```
<script src="https://sp-library.prod.sp.aws.clarivate.net/oti/{VERSION}/index.umd.js"></script>
```

Notice that `{VERSION}` must be replaced by the desired library version, for
example in case of 1.1.61, the import should be:

```
<script src="https://sp-library.prod.sp.aws.clarivate.net/oti/1.1.61/index.umd.js"></script>
```

> !NOTE: Check the [versions](#versions) section at the end of the document.

There is also a `latest` folder with the most up to dated version of the
repository. It is not recomended, almost forbidden, to use this url in
production environments. But it might be useful on development:

```
<script src="https://sp-library.prod.sp.aws.clarivate.net/oti/latest/index.umd.js"></script>
```

# Usage

The use of the Oti library depends on whether the library has been imported as
an npm package or as an umd file. In the first case the library can be imported
as a module; while in the second it is referenced a global variable.

## Usage as a module

In case of using npm, the Oti resources can be imported as a module:

```
import { Component, OnInit } from '@angular/core';
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
}
```

## Usage as a variable

The script import provides the `Oti` package as a global variable. This package
contains the `OtiService`, which should be used like this:

```
<script>
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
</script>
```

> The service creation and initialization can be done as soon as pendo details
> are available. Sometime those details are obtained from a request call; then,
> should be done after obtaining the response.
>
> This applies to both npm and non npm usage.

# Options

The `OtiService` initialize method can receive the following options:

| Option                          | Required | Type                              | Default                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------- | -------- | --------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app_id                          | true     | string                            |                                                           | Application id. This id is used to identify the application in the analytics context.                                                                                                                                                                                                                                                                                                               |
| user_id                         | false    | string                            |                                                           | User id. This id is used to identify the user in the analytics context. It can be undefined for anonymous tracking.                                                                                                                                                                                                                                                                                 |
| ot_key                          | true     | string                            |                                                           | OneTrust key, corresponding to the application Cookies scan.                                                                                                                                                                                                                                                                                                                                        |
| ot_localStorage                 | false    | boolean                           | false                                                     | Flag indicating if use Local Storage instead of Cookies for storing user cookie setting.                                                                                                                                                                                                                                                                                                            |
| ot_language                     | false    | string                            |                                                           | Enable the capability to fix the language of the Cookie Banner interface. If undefined, it use the language of the browser. For english, it should take tha value 'en'.                                                                                                                                                                                                                             |
| prod_domain                     | false    | string                            |                                                           | Host name used for production. This is used by the API to verify if is in production enviornment. Only used in case of `prod_env` is not defined.                                                                                                                                                                                                                                                   |
| prod_env                        | false    | boolean                           |                                                           | Flag indicating if is on production.                                                                                                                                                                                                                                                                                                                                                                |
| pendo_key                       | false    | string                            |                                                           | Pendo key. This key should be unique per application. It is used to obtain Pendo Guides and for link the users usage to an application.                                                                                                                                                                                                                                                             |
| pendo_details                   | false    | object, () => object              |                                                           | Pendo details, which are send to pendo. This param could be an object with the pendo details, or a function returning the details. In case of a function, it is called just before initializing pendo.                                                                                                                                                                                              |
| pendo_optimize_requests         | false    | boolean                           | false                                                     | Flag indicating whether initial pendo requests (visitor, DNP, metadata) should only be executed once per session. In the case of non-SPA applications, where the browser reloads the page every time the route changes, it can be annoying to run this request on every page load. Setting this flag to true will limit one request per session, or when the user changes their cookie preferences. |
| pendo_dnp_url                   | false    | string                            | /pendo/dnp                                                | URL used when update DNP settings.                                                                                                                                                                                                                                                                                                                                                                  |
| pendo_dnp_method                | false    | string                            | PUT                                                       | HTTP method used when update DNP settings.                                                                                                                                                                                                                                                                                                                                                          |
| pendo_visitor_url               | false    | string                            | /pendo/visitor                                            | URL used when updating visitor information.                                                                                                                                                                                                                                                                                                                                                         |
| pendo_visitor_payload           | false    | object[], (visitorId) => object[] |                                                           | Pendo visitor information, which are send to pendo. This param could be an object with the visitor info, or a function returning the info. In case of a function, it is called just before executing the visitor request. !!! Notice that the object must be an array                                                                                                                               |
| pendo_visitor_method            | false    | string                            | POST                                                      | HTTP method used when updating visitor information.                                                                                                                                                                                                                                                                                                                                                 |
| pendo_metadata_url              | false    | string                            | /pendo/metadata                                           | URL used when update metadata.                                                                                                                                                                                                                                                                                                                                                                      |
| pendo_metadata_method           | false    | string                            | PUT                                                       | HTTP method used when update metadata.                                                                                                                                                                                                                                                                                                                                                              |
| pendo_url                       | false    | string                            | https://cdn.pendo.io/agent/static/${pendoKey}/pendo.js    | URL for downloading pendo API library                                                                                                                                                                                                                                                                                                                                                               |
| pendo_visitor_id_generator      | false    | () => string                      |                                                           | Function for customize the generation of anonymous users                                                                                                                                                                                                                                                                                                                                            |
| pendo_cname_content             | false    | string                            |                                                           | An alternate url to load guide content from. This will be used to replace the standard google storage url for your subscription. Usually used for [CNAME setups](https://support.pendo.io/hc/en-us/articles/360043539891-CNAME-for-Pendo-Engage).                                                                                                                                                   |
| pendo_cname_data                | false    | string                            |                                                           | An alternate url to use when transmitting event data. Usually used for [CNAME setups](https://support.pendo.io/hc/en-us/articles/360043539891-CNAME-for-Pendo-Engage).                                                                                                                                                                                                                              |
| request_headers                 | false    | object                            |                                                           | HTTP headers send on every request called. It can be used for sending authentication params for example.                                                                                                                                                                                                                                                                                            |
| request_with_credentials        | false    | boolean                           | false                                                     | When true, credentials are sent on http request event they're requestes to different domain                                                                                                                                                                                                                                                                                                         |
| snowplow_enabled                | false    | boolean                           | false                                                     | Flag indicating if Snowplow is enabled.                                                                                                                                                                                                                                                                                                                                                             |
| snowplow_context_data           | false    | object                            | { appsessionId: <snowplow_session_id>, product: <appId> } | Snowplow context data. This data is send to Snowplow.                                                                                                                                                                                                                                                                                                                                               |
| snowplow_event_method           | false    | string                            | post                                                      | HTTP method used when sending events to Snowplow. It can take the values 'post' and 'get'                                                                                                                                                                                                                                                                                                           |
| snowplow_session_id             | false    | string                            |                                                           | Session id used to identify the user session. If defined, snowplow is enabled for tracking, otherwise tracking is disabled.                                                                                                                                                                                                                                                                         |
| snowplow_url                    | false    | string                            |                                                           | URL used when sending events to Snowplow. Default values are 'snowplow-collector.userintel.prod.sp.aws.clarivate.net' for prod environment and snowplow-collector.staging.userintel.dev.sp.aws.clarivate.net for non prod                                                                                                                                                                           |
| zendesk_appName                 | false    | string                            |                                                           | Application name for getting Zendesk configuration from Zendedesk Access platform service                                                                                                                                                                                                                                                                                                           |
| zendesk_environment             | false    | string                            |                                                           | Force to use specific environment when integrate with Zendesk (snapshot, stable, etc.). If undefined it deduces the environment from the url                                                                                                                                                                                                                                                        |
| zendesk_key                     | false    | string                            |                                                           | Zendesk key. This key should be unique per application. It is used to enable integration with ZenDesk.                                                                                                                                                                                                                                                                                              |
| zendesk_url                     | false    | string                            | https://static.zdassets.com/ekr/snippet.js                | URL for downloading Zendesk API library                                                                                                                                                                                                                                                                                                                                                             |
| zendesk_hide_article_link       | false    | boolean                           | false                                                     | Hide the link in Zendesk webWidget to navigate to the original article at Zendesk platform                                                                                                                                                                                                                                                                                                          |
| zendesk_position                | false    | 'left', 'right'                   | right                                                     | The possible value for horizontal is 'left' (the default is right).                                                                                                                                                                                                                                                                                                                                 |
| zendesk_redirect_to_help_center | false    | boolean                           | false                                                     | When true, instead of opening webWidget the Zendesk HelpCenter page is opened in a separate tab.                                                                                                                                                                                                                                                                                                    |

# Methods

| Method                     | Params                      | Return | Description                                                                                                                                                                                                                                                                                     |
| -------------------------- | --------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onCookieChanges            | function                    | void   | Adds a listener for each cookie configuration change. <br/>The function send by param receives the parameter { next: string[], prev?: string[] } with the cookies changes.<br/>The listener will be trigger one time for initial setup and every time the user changes the Cookies preferences. |
| openCookiePreferences      |                             | void   | Opens OneTrust Cookies management panel.                                                                                                                                                                                                                                                        |
| printDebug                 |                             | void   | Show current One Trust cookies by console.                                                                                                                                                                                                                                                      |
| resetAnalyticsContext      |                             | void   | Reset the analytics context.                                                                                                                                                                                                                                                                    |
| setDebug                   | boolean                     | void   | Allows enabling debug mode.                                                                                                                                                                                                                                                                     |
| trackEvent                 | string                      | void   | Track an struck event in Snowplow.                                                                                                                                                                                                                                                              |
| trackNamedEvent            | name: string, props: object | void   | Track a named event via Pendo.                                                                                                                                                                                                                                                                  |
| trackPageView              | string                      | void   | Track a page view event in Snowplow.                                                                                                                                                                                                                                                            |
| updateAnalyticsContextData | object                      | void   | Update the analytics context data. See 'snowplow_context_data' attribute.                                                                                                                                                                                                                       |

# Use cases

In the following sections are explained some uses cases that tries to help in
order to decide the options configuration.

## One Trust integration

This is the minimum and necessary configuration. This API is designed to use
OneTrust and integrate some other tools within it. For that reason, `ot_key` is
a required attribute:

```javascript
new OtiService({
  ot_key: 'xxxx-xxxxx-xxxxxx',
  prod_domain: 'www.mysite.com',
});
```

The attribute `prod_domain` allow notifying which is the host used for
production, in order to load OneTrust for production or development mode. But,
it can be replaced by the attribute `prod_env`, in case the corresponding flag
is available.

```javascript
import { environment } from 'src/environments/environment';

new OtiService({
  ot_key: 'xxxx-xxxxx-xxxxxx',
  prod_env: environment.production,
});
```

With this configuration, `One Trust` will be loaded and the Cookie Preferences
Banner will appear when accessing the application. The Cookie Categories shown
in the Cookies Configuration Panel depend on the scan associated with the
provided key.

### Listening to Cookies changes

The following example shows how to an application can listen to Cookie settings
modifications.

```javascript
import { environment } from 'src/environments/environment';

const otiService = new OtiService({
  ot_key: 'xxxx-xxxxx-xxxxxx',
  prod_env: environment.production,
});

otiService.onCookieChanges(({ initial, next, prev }) => {
  console.log('Cookies has changed');
  console.log('Is initial load', initial);
  console.log('New Cookie Settings', next);
  console.log('Previous Cookie Settings', prev);
});
```

## Pendo integration

Pendo is an analytic tool used with those main goals:

- Provide application news, help and guidance
- Track user application usage

To comply with the legislation of some countries, these functionalities must be
subjected to the acceptance of cookies.

This API enables pendo and OneTrust integration, in order to satisfy this
compliance. To achieve this, is necessary to set up, at least, the `pendo_key`
and `pendo_details` attributes:

```
new OtiService({
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
```

With this configuration, `Pendo` will be loaded and initialized depending on the
user Cookies acceptance and Pendo configuration.

### Pendo communication and backend integration

User information is stored in pendo application using three request calls:

- Visitor creation
  - ```
    curl 'https://app.pendo.io/api/v1/metadata/visitor/agent/value?create=true' \
    -H 'x-pendo-integration-key: pppppp-ppppp-ppppp-pppppp' \
    -H 'content-type: application/json' \
    --data-raw '[{"visitorId":"xxxx-xxxxx-xxxx","values":{"firstname":"John","lastname":"Smith"}}]'
    ```

    > The body data for this request is obtained from `pendo_visitor_payload`
    > attribute.

- DNP update
  - ```
    curl 'https://app.pendo.io/api/v1/metadata/visitor/pendo/value/uuuu-uuuuu-uuuu/donotprocess' \
    -X 'PUT' \
    -H 'x-pendo-integration-key: pppppp-ppppp-ppppp-pppppp' \
    --data-raw 'false'
    ```
- Metadata update
  - ```
    curl 'https://app.pendo.io/api/v1/metadata/visitor/custom/value/uuuu-uuuuu-uuuu/APPID_targetingcookies' \
    -X 'PUT' \
    -H 'x-pendo-integration-key: pppppp-ppppp-ppppp-pppppp' \
    --data-raw '"YES"'
    ```

Executing those requests directly from the front-end application implies several
issues:

- The request to a different domain might lead to Cross-Origin error
- Exposing `x-pendo-integration-key`in the request header is insecure. A
  malicious user might use it to generate fake usage of the application.

In order to solve those issues there are two proposed workarounds:

- Using a reverse proxy
- Using backend services as proxy

In both cases, the solution implies specifying an internal url for the pendo
requests. The attributes `pendo_visitor_url`, `pendo_dnp_url` and
`pendo_visitor_url` are made for that purpose:

```
new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    ...
    pendo_visitor_url: '/ui/pendoapi/agent/value?create=true',
    pendo_dnp_url: `/ui/pendoapi/pendo/value/uuuu-uuuuu-uuuu/donotprocess`,
    pendo_metadata_url: `/ui/pendoapi/custom/value/uuuu-uuuuu-uuuu/APP_targetingcookies`,
});
```

> By default, the request for `pendo_visitor_url` uses `POST` method and
> `pendo_dnp_url` and `pendo_metadata_url` uses `PUT`. Those methods can be
> modified with the `pendo_visitor_method`, `pendo_dnp_method` and
> `pendo_metadata_method` attributes.

#### Reverse proxy

In case of having a reverse proxy it can be used to handle those requests.

For example, in case of having Nginx, it could be handled with the following
config:

```
location ~ ^/ui/pendoapi/(.*) {
    set $pendo_url https://app.pendo.io;
    proxy_pass $pendo_url/api/v1/metadata/visitor/$1$is_args$args;

    proxy_ssl_server_name on;
    proxy_set_header x-pendo-integration-key pppppp-ppppp-ppppp-pppppp;
}
```

Or in case of an Angular app, adding the next entry into the `proxy.conf` file:

```
{
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
```

> There are other Nginx configurations that allow this functionality, depending
> on whether other parameters are required, etc. Or even different reverse
> proxies. Please consult their documentation.

#### Proxy service

In case of not having a reverse proxy available, the solution would be implement
a custom service which receive the request from the front and execute a request
call to `https://app.pendo.io`, injecting the `x-pendo-integration-key` header.

### Custom headers

In some cases is necessary to add some header parameters to the pendo requests:
authentication, api identification, etc. For that purpose exists the
`request_headers` attribute:

```
new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    ...
    request_headers: { 'x-1p-id': 'ssss-ssssss-ssss' }
});
```

### CNAME

CNAME features, handled by the attributes `pendo_cname_content` and
`pendo_cname_content`, helps ensure that events are collected and guides are
served to end users who are subject to ad-blocking software, firewalls, web
filters, etc. Visit
[CNAME setups](https://support.pendo.io/hc/en-us/articles/360043539891-CNAME-for-Pendo-Engage)
for more information.

That might be an implementation of local urls for pendo guides and events:

```
new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    ...
    pendo_cname_content: `${window.location.origin}/analytics/pendo`,
    pendo_cname_data: `${window.location.origin}/analytics/pendo`,
});
```

In that case the application must have a service or a reverse proxy for handling
those urls. There is an example of a Nginx configuration for those urls:

```
    location ~ ^/ui/analytics/pendo/guide-content/(.*) {
        set $pendo_guides_url https://pendo-static-XXXXXXXXX.storage.googleapis.com;
        proxy_pass $pendo_guides_url/guide-content/$1$is_args$args;
    }

    location ~ ^/ui/analytics/pendo/data/(.*) {
        set $pendo_events_url https://app.pendo.io;
        proxy_pass $pendo_events_url/data/$1$is_args$args;
    }
```

> NOTE: The url https://pendo-static-XXXXXXXXX.storage.googleapis.com is
> specific of each project and depends on Pendo configuration.  
> You can get this url by executing `pendo.validateEnvironment()` from the
> browser console. The output of this command will contain the url, under
> _Validate Config options_ > _allowedOriginServers_.

### Anonymous user

In case of public applications, where no login is required, the OTIService
generates an anonymous visitorId automatically. In that case,
`pendo_visitor_payload` attribute is not necessary and will be generated
automatically with the generated visitorId.

```
new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    prod_domain: 'www.mysite.com',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    pendo_details: {}
});
```

In case of needing to customize the generation of anonymous users, the
`pendo_visitor_id_generator` attribute can be used:

```
new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    prod_domain: 'www.mysite.com',
    pendo_key: 'yyyy-yyyyyy-yyyy',
    pendo_visitor_id_generator: () => `_OTI_${Math.random().toString(36).slice(2, 9)}`,
    pendo_details: {}
});
```

In case of needing to customize the visitor payload, the `pendo_visitor_payload`
attribute receive a function that receives the generated visitorId and returns
the payload:

```
new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    prod_domain: 'www.mysite.com',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    pendo_details: {},
    pendo_visitor_payload: (visitorId) => ({
        visitorId : visitorId
    })
});
```

## Snowplow integration

Snowplow is an analytic tool used to track user events and page views. To
integrate Snowplow with the OtiService, it is necessary to set up the
`snowplow_enabled` attribute as `true`:

```
new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    prod_env: true,
    snowplow_enabled: true
});
```

With this configuration, `Snowplow` will be loaded and initialized depending on
the user Cookies acceptance and Snowplow configuration.

## ZenDesk Integration

This API enables ZenDesk and Pendo integration.

To achieve this, is only necessary to set up the `zendesk_key` attribute:

```
new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    prod_domain: 'www.mysite.com',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    ...,
    zendesk_key: 'zzzz-zzzzzz-zzzz'
});
```

With this configuration, `Zendesk` will be loaded and initialized depending on
its configuration.

## Domain and subdomain issues

There is a known issue with the OneTrust API when exists different applications
sharing the same main domain with different OT Keys.

For example, having the applications http://clarivate.com and
http://myapp.clarivate.com. If a user chose their preferences for
http://clarivate.com they automatically apply to http://myapp.clarivate.com,
which is not the desired behaviour.

> NOTE: It is imporant to highlight the issue applies to this particular case.
> Take into account the following considerations:
>
> - Applications http://clarivate.com and http://myapp.clarivate.com have
>   different cookies requirements and have been scanned separately, so they
>   have a different OT Key.
> - Both applications are set up in OT with the same domain, generally the root
>   domain `/`. If the application domains were http://clarivate.com/company and
>   http://clarivate.com/myapp; and they would be registered in OT with the
>   domains /company and /myapp, the issue would not apply.

### The problem

OneTrust API generates some global variables depending on user cookies setup.
Those are: dataLayer, OnetrustActiveGroups, etc. But, when different
applications coexist sharing part of their domain, those variables mix the user
preferences between the subdomain and the main domain. As a result, using those
variables to determine whether enable analytics or not is not truthful.

The issue has to do with how OneTrust API reads cookies and how browsers' manage
those cookies. The API stores the user preferences as a Cookie with the name
`OptanonConsent`. Generally, cookies have a name that allows them to be
distinguished from each other, but the fact is the browser allows different
cookies to be stored with the same name if they belong to a different domain.

But, when reading the cookies it is not possible to specify or distinguish the
cookie from one domain or other. They are retrieved with the same name:

```
document. cookie.split('; ')
[0]: "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Oct+11+2022+11%3A32%3A15+GMT2B0200+(Central+European+Summer+Time)&vers"
[1]: "OptanonConsent=isGpcEnabled=0&datestamp=Tue+Oct+11+2022+14%3A51%3A39+GMT$2B0200+(Central+European+Summer+Time)&vers"
```

The OneTrust API is not prepared for this, so they take one of the for building
the mentioned global variables.

### The solution

OneTrust allows using browser Local Storage instead of cookies for storing the
user preferences.

This is achieved by importing the OneTrust SDK adding the attribute `amp=true`
to the script import. But using the OTIService is as simple as setting to true
the `ot_localStorage` attribute:

```
new OtiService({
    ot_key: 'xxxx-xxxxx-xxxxxx',
    pendo_key : 'yyyy-yyyyyy-yyyy',
    ...
    ot_localStorage: true
});
```

# Keys and more keys

In relation with OneTrust and Pendo Integration, there are several `keys`
involved that have been mentioned above. Distinguishing between those keys can
be confusing; so this section tries to summarize what those keys are and what
they are for.

- OneTrust Key
- Pendo API Key
- Pendo Integration Key
- Zendesk Key

The `OneTrust Key` corresponds with the application Cookies scan. It is
generally provided by the platform team, at the initial stages of the
implementation. The key is provided by opening a Jira ticket, cloned from
[this](https://jira.clarivate.io/browse/PEP-21). Finally, when having the key it
must set as the `ot_key` option attribute when creating the OtiService.

The `Pendo API Key` corresponds with the specific Pendo settings for each
application. Which mainly includes Pendo Guides and Tracking. It should be
provided by the Product Owner and must be specific for application. This key is
set as the `pendo_key` option attribute when creating the OtiService.

The `Pendo Integration Key` is used for authenticating the requests executed to
Pendo. This key must be hidden from the user, and is sent via a header parameter
´x-pendo-integration-key´. You can read further information
[here](https://developers.pendo.io/docs/?bash#authentication).

# Versions

This section tries to enum the main versions of the library, and the changes on
each version:

- 1.1.23 Initial version.
- 1.1.27 Performance upgrade.
  - Initialize pendo App right after visitor is created.
  - Add pendo_optimize_requests parameter to minimize pendo API requests.
- 1.1.28 Add requestWithCredentials parameter to include credentials in requests
  to different domain.
- 1.1.29 Fix error 451 Unavailable For Legal Reasons when enabling Functional
  cookies. Bug introduced in 1.1.27
- 1.1.30 Implement CName for Pendo Engage
- 1.1.33 Fix error: isReady undefined. On pendo.js lazy load.
- 1.1.35 Implement ZenDesk integration
- 1.1.37 New functionalities
  - Add method openCookiePreferences
  - Add ot_language parameter
- 1.1.39 Add zendesk JWT authentication
- 1.1.54 Update Zendesk links within webWidget to be automatically authenticated
  - Add attribute zendesk_access_url
  - Add attribute zendesk_help_center_url
  - Add attribute zendesk_redirect_to_help_center
  - Add attribute zendesk_hide_article_link
  - Add attribute zendesk_position
- 1.1.60 Use Platform Zendesk Access service
  - Remove attribute zendesk_web_widget_jwt
  - Remove attribute zendesk_access_url
  - Remove attribute zendesk_help_center_url
  - Add attribute zendesk_appName
- 1.1.61 Add onCookieChanges method
- 1.1.63 Fix error: Anonymous id changes on each page reload
- 1.1.64 Implement Zendesk integration with custom authentication using cookies
  - Add attribute zendesk_environment
- 1.2.65 Implement Snowplow integration
- 1.2.66 Add trackNamedEvent method
- 1.2.68 OtiService configuration is set on initialize method, instead of
  constructor
- 1.2.69 Use snowplow_enabled to enable Snowplow tracking, instead of
  snowplow_session_id, which is not mandatory
- 1.2.70 Fix error, sent query param &env=undefined to Zendesk urls when
  specific environment is not defined
- 1.2.71 Consider Functional cookies category, instead of Targeting cookies, for
  Snowplow integration

## Changelog

Nothing to report yet
