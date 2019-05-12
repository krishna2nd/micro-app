import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* === COMPONENTS === */
import {
  AsyncAddressesSummary,
  AsyncAddressesEdit,
  AsyncAddressesAdd
} from 'src/components/app/sync';

import {
  ADD_ADDRESS_PATH,
  EDIT_ADDRESS_PATH
} from 'src/components/app/app.constants';

export default () => (
  <Switch>
    <Route exact path={ADD_ADDRESS_PATH} component={AsyncAddressesAdd} />
    <Route exact path={EDIT_ADDRESS_PATH} component={AsyncAddressesEdit} />
    <Route nomatch component={AsyncAddressesSummary} />
  </Switch>
);
