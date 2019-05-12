import React from 'react';
import { Col } from 'react-flexbox-grid';

import BackNav from 'src/components/account/components/nav/back-nav';
import AddAddressForm from 'src/components/addresses/components/add-address';
import { ACCOUNT_ADDRESSES_PATH } from 'src/components/app/app.constants';

export default ({ goToAddressesPage }) => (
  <div>
    <BackNav to={ACCOUNT_ADDRESSES_PATH} />

    <Col xs={12} md={10} mdOffset={1} xl={8} xlOffset={2}>
      <AddAddressForm
        setUserStore
        onSuccess={goToAddressesPage}
        onCancel={goToAddressesPage}
      />
    </Col>
  </div>
);
