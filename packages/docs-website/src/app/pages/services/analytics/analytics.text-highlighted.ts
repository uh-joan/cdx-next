export const appModuleAngular = `...
import {
  AnalyticsContextSchema,
  AnalyticsModule,
  CLARIVATE_IGLU_SCHEMA,
} from '@cdx/ngx-analytics';

...

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...,
    AnalyticsModule.forRoot(APP_ANALYTICS_SETTINGS, APP_ANALYTICS_CONTEXT)
  ],
  providers: [
    ...,
    providers: [AnalyticsService],
    bootstrap: [AppComponent],
  ]
})
export class AppModule {}`;

export const analyticsSettingsAngular = `export interface AnalyticsSettings {
    appId: string;
    options?: {
        snowplowContextData?: AnalyticsContextData;
        snowplowEnvironment?: AnalyticsEnvironment;
        snowplowUrl?: string;
    };
}`;

export const contextAngular = `  createNewContext(): void {
  const newContext: AnalyticsContextSchema = {
    schema: NEW_SCHEMA,
    data: {
      newProp: 'newProp',
    },
  };
  this.analyticsService.resetContext(newContext);
}

updateCurrentContext(): void {
  const newContextData: AnalyticsContextData = {
    contextProp: 'updatedContextProp',
    newProp: 'newProp',
  };
  this.analyticsService.updateContextData(newContextData);
}`;

export const appModuleReact = `import { CLARIVATE_IGLU_SCHEMA, RcxAnalytics } from '@cdx/rcx-analytics';

export const AnalyticsContext = createContext<RcxAnalytics>(
  new RcxAnalytics(
    {
      appId: 'myAppId',
    },
    {
      schema: CLARIVATE_IGLU_SCHEMA,
      data: CONTEXT_DATA,
    },
  ),
);
export function App() {
  const analyticsService = useContext(AnalyticsContext);
  ...

  return <BrowserRouter>
      <AnalyticsContext.Provider value={analyticsService}>
  ...`;

export const structuredEventReact = `
interface StructuredEvent {
  category: string;
  action: string;
  label?: string;
  property?: string;
  value?: number;
}`;

export const analyticModuleReact = `
analyticsService.trackEvent({
  ...event,
  context: [ADDITIONAL_CONTEXT],
})`;

export const contextReact = `
import {
  AnalyticsContextData,
  AnalyticsContextSchema,
  CLARIVATE_IGLU_SCHEMA,
} from '@cdx/rcx-analytics';

const newContextData: AnalyticsContextData = {
  newProp: 'newProp',
};
analyticsService.resetContext({
  schema: CLARIVATE_IGLU_SCHEMA,
  data: newContextData,
});

analyticsService.updateContextData(newContextData);`;
