/* === LIBRARIES === */
import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';

/* === CONSTANTS === */
import { AUTOMATION_ID } from 'src/components/app/app.constants';
import { FIELD_NAMES, FORMS } from 'src/components/account/account.constants';

/* === COMPONENTS === */
import NavLink from 'src/components/shared/nav-link';
import Button from 'src/components/shared/button';
import LabelInput from 'src/components/shared/form/label-input';
import Checkbox from 'src/components/shared/form/checkbox';
import Form from 'src/components/shared/form/form';
import { H3, P } from 'src/components/shared/typography';
import {
  FORGOT_PASSWORD_PATH,
  REGISTER_PATH
} from 'src/components/app/app.constants';

/* === STYLES === */
import styles from './form.styles.css';

/* === FORM VALIDATIONS === */
import { required, email, password } from 'src/utils/fieldLevelValidationForm';

let LoginForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <Form onSubmit={handleSubmit} data-automation-id={FORMS.LOGIN}>
      <H3 primary>Iniciar sesión</H3>

      <Field
        name={FIELD_NAMES.EMAIL}
        type="email"
        component={LabelInput}
        label="Correo electr&oacute;nico*"
        placeholder="Email address"
        validate={[required, email]}
      />

      <Field
        name={FIELD_NAMES.PASSWORD}
        type="password"
        component={LabelInput}
        label="Contrase&ntilde;a*"
        placeholder="Password"
        maxLength="40"
        validate={[required, password]}
      />

      <NavLink
        blue
        className={styles.forgotPasswordBtn}
        to={FORGOT_PASSWORD_PATH}
      >
        &iquest;Olvidaste tu contrase&ntilde;a?
      </NavLink>

      <Field
        name={FIELD_NAMES.REMEMBER_ME}
        id="rememberMe"
        component={Checkbox}
        label={<span>Mantener sesi&oacute;n activa</span>}
        type="checkbox"
      />

      <Button
        small
        secondary
        block
        data-automation-id={AUTOMATION_ID.BUTTONS.SUBMIT}
        type="submit"
        disabled={submitting}
      >
        Iniciar sesión
      </Button>

      <P secondary center className={styles.registerBtn}>
        ¿Aún no tienes cuenta?
        <NavLink to={REGISTER_PATH} link blue>
          &nbsp; Crear cuenta
        </NavLink>
      </P>
    </Form>
  );
};

export default reduxForm({
  form: FORMS.LOGIN
})(LoginForm);
