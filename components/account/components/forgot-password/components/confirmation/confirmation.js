/* === LIBRARIES === */
import React from 'react';

/* === CONSTANTS === */
import { AUTOMATION_ID } from 'src/components/app/app.constants';

/* === COMPONENTS === */
import Button from 'src/components/shared/button';
import BackNav from 'src/components/account/components/nav/back-nav';
import { H4, P } from 'src/components/shared/typography';

/* === STYLES === */
import { formContainer } from 'src/components/account/account.styles.css';

const Confirmation = ({ email, onForgotPassword }) => (
  <div>
    <BackNav />

    <div className={formContainer}>
      <H4 primary>&iexcl;Listo!</H4>
      <P secondary>
        Te enviamos un correo con las instrucciones para restablecer tu
        contraseña
      </P>
      <Button
        link
        data-automation-id={AUTOMATION_ID.BUTTONS.SUBMIT}
        onClick={() => onForgotPassword({ email })}
      >
        Reenviar correo
      </Button>
    </div>
  </div>
);

export default Confirmation;
