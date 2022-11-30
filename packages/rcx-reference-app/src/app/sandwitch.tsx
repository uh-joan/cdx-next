import { CLARIVATE_IGLU_SCHEMA } from '@cdx/rcx-analytics';
import { useContext } from 'react';

import { AnalyticsContext } from './app';

function Sandwich() {
  const analyticsService = useContext(AnalyticsContext);

  analyticsService.resetContext({
    schema: CLARIVATE_IGLU_SCHEMA,
    data: {
      changedContext: 'changedContextProp',
    },
  });

  analyticsService.trackPageView({
    title: 'sandwitch',
  });

  return (
    <div>
      <img
        src="https://thumbs.dreamstime.com/b/toasted-sandwich-ham-cheese-vegetables-breakfast-white-background-34301117.jpg"
        alt="Sandwich"
      />
    </div>
  );
}

export default Sandwich;
