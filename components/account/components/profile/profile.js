import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/* === COMPONENTS === */
import {
  AsyncProfileSummary,
  AsyncOrders,
  AsyncOrder,
  AsyncEditProfile,
  AsyncEditEmail,
  AsyncEditAssociate,
  AsyncEditTelephone
} from 'src/components/app/sync';

import {
  ACCOUNT_PROFILE_PATH,
  EDIT_PROFILE_PATH,
  EDIT_EMAIL_PATH,
  EDIT_ASSOCIATE_PATH,
  EDIT_TELEPHONE_PATH,
  ACCOUNT_ORDERS_PATH
} from 'src/components/app/app.constants';

class Profile extends Component {
  constructor(props) {
    super(props);

    const { onGetProfileDetails, onGetDeliveryAddresses } = props;

    onGetProfileDetails();
    onGetDeliveryAddresses();
  }

  render() {
    return (
      <div>
        <Route
          exact
          path={ACCOUNT_PROFILE_PATH}
          component={AsyncProfileSummary}
        />
        <Route exact path={EDIT_PROFILE_PATH} component={AsyncEditProfile} />
        <Route exact path={EDIT_EMAIL_PATH} component={AsyncEditEmail} />
        <Route
          exact
          path={EDIT_ASSOCIATE_PATH}
          component={AsyncEditAssociate}
        />
        <Route
          exact
          path={EDIT_TELEPHONE_PATH}
          component={AsyncEditTelephone}
        />

        <Route exact path={ACCOUNT_ORDERS_PATH} component={AsyncOrders} />
        <Route
          exact
          path={`${ACCOUNT_ORDERS_PATH}/:id`}
          component={AsyncOrder}
        />
      </div>
    );
  }
}

export default Profile;
