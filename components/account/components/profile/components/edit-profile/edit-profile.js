import React from 'react';

import Form from './components/form';
import BackNav from 'src/components/account/components/nav/back-nav';
import { formContainer } from 'src/components/account/account.styles.css';

export default ({ profileDetails, onUpdateProfileDetails }) => (
  <div>
    <BackNav />
    <div className={formContainer}>
      <Form />
    </div>
  </div>
);
