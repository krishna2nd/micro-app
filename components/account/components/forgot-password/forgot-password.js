/* === LIBRARIES === */
import React from 'react';

/* === COMPONENTS === */

import { H4, P } from 'src/components/shared/typography';
import ForgotPasswordForm from './form';
import { formContainer } from 'src/components/account/account.styles.css';
import BackNav from 'src/components/account/components/nav/back-nav';
import { LOGIN_PATH } from 'src/components/app/app.constants';

const ForgotPassword = ({ onForgotPassword }) => (
  <div>
    <BackNav to={LOGIN_PATH} />
    <div className={formContainer}>
      <H4 primary>Restablecer contraseña</H4>
      <P secondary>Ingresa el correo electrónico que registraste</P>

      <ForgotPasswordForm onSubmit={onForgotPassword} />
    </div>
  </div>
);

export default ForgotPassword;
