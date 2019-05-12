import React from 'react';
import BackNav from 'src/components/account/components/nav/back-nav';
import { H4, P } from 'src/components/shared/typography';
import TelephoneForm from 'src/components/telephone-form';
import { formContainer } from 'src/components/account/account.styles.css';

const EditTelephone = ({ goToProfilePage }) => (
  <div>
    <BackNav />

    <div className={formContainer}>
      <H4 primary>Editar datos telefónicos</H4>
      <P secondary>* Estos campos son obligatorios</P>

      <TelephoneForm hasSecondaryPhone={true} onSuccess={goToProfilePage} />
    </div>
  </div>
);

export default EditTelephone;
