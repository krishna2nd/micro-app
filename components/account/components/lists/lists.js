import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AsyncList, AsyncListSummary } from 'src/components/app/sync';
import { ACCOUNT_LISTS_PATH } from 'src/components/app/app.constants';

export default () => (
  <div>
    <Switch>
      <Route exact path={`${ACCOUNT_LISTS_PATH}/:id`} component={AsyncList} />
      <Route component={AsyncListSummary} />
    </Switch>
  </div>
);
