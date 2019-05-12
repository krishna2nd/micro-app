/* === LIBRARIES === */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

/* === COMPONENTS === */
import {
  AsyncLogin,
  AsyncRegister,
  AsyncForgotPassword,
  AsyncForgotPasswordConfirmation,
  AsyncProfile,
  AsyncPreferences,
  AsyncLists,
  AsyncFavorites,
  AsyncAddresses
} from 'src/components/app/sync';

import {
  LOGIN_PATH,
  REGISTER_PATH,
  FORGOT_PASSWORD_PATH,
  FORGOT_PASSWORD_CONFIRMATION_PATH,
  ACCOUNT_ADDRESSES_PATH,
  ACCOUNT_PREFERENCES_PATH,
  ACCOUNT_FAVORITES_PATH,
  ACCOUNT_LISTS_PATH,
  PSWD_EXPIRY_PATH
} from 'src/components/app/app.constants';

class Account extends Component {
  render() {
    return (
      <Switch>
        <Route path={LOGIN_PATH} component={AsyncLogin} />
        <Route path={REGISTER_PATH} component={AsyncRegister} />
        <Route
          path={FORGOT_PASSWORD_CONFIRMATION_PATH}
          component={AsyncForgotPasswordConfirmation}
        />
        <Route path={FORGOT_PASSWORD_PATH} component={AsyncForgotPassword} />
        <Route path={PSWD_EXPIRY_PATH} component={AsyncForgotPassword} />

        <Route path={ACCOUNT_ADDRESSES_PATH} component={AsyncAddresses} />

        <Route path={ACCOUNT_PREFERENCES_PATH} component={AsyncPreferences} />

        <Route path={ACCOUNT_FAVORITES_PATH} component={AsyncFavorites} />

        <Route path={ACCOUNT_LISTS_PATH} component={AsyncLists} />
        <Route component={AsyncProfile} />
      </Switch>
    );
  }
}

export default Account;
