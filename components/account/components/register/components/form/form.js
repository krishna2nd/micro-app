/* === LIBRARIES === */
import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';

/* === CONSTANTS === */
import { AUTOMATION_ID } from 'src/components/app/app.constants';
import { FIELD_NAMES, FORMS } from 'src/components/account/account.constants';

/* === COMPONENTS === */
import Button from 'src/components/shared/button';
import LabelInput from 'src/components/shared/form/label-input';
import NavLink from 'src/components/shared/nav-link';
import Checkbox from 'src/components/shared/form/checkbox';
import Form from 'src/components/shared/form/form';
import { H3, P } from 'src/components/shared/typography';
import { LOGIN_PATH } from 'src/components/app/app.constants';

/* === FORM VALIDATIONS === */
import {
  required,
  email,
  password,
  noSpecialCharacters
} from 'src/utils/fieldLevelValidationForm';

/* === STYLES === */
import styles from './form.styles.css';

let RegisterForm = props => {
  const { handleSubmit, submitting, showPrivacy, showTermsConditions } = props;

  return (
    <Form
      data-automation-id={FORMS.REGISTER}
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <H3 primary>Crear cuenta</H3>

      <Field
        name={FIELD_NAMES.FIRST_NAME}
        type="text"
        component={LabelInput}
        label="Nombres*"
        maxLength="40"
        validate={[required, noSpecialCharacters]}
      />

      <Field
        name={FIELD_NAMES.LAST_NAME}
        type="text"
        component={LabelInput}
        label="Apellido paterno*"
        maxLength="40"
        validate={[required, noSpecialCharacters]}
      />

      <Field
        name={FIELD_NAMES.EMAIL}
        type="email"
        component={LabelInput}
        label="Correo electrónico*"
        placeholder="Email address"
        maxLength="255"
        validate={[required, email]}
      />

      <Field
        name={FIELD_NAMES.PASSWORD}
        type="password"
        component={LabelInput}
        label="Contraseña* (8 caracteres mínimo)"
        placeholder="Password"
        maxLength="40"
        validate={[required, password]}
      />

      <Field
        name={FIELD_NAMES.ALLOW_MARKETING_EMAIL}
        id={FIELD_NAMES.ALLOW_MARKETING_EMAIL}
        className={styles.promotionCheckbox}
        component={Checkbox}
        label="Si no deseas recibir publicidad y/o promociones, por favor marca este recuadro"
        type="checkbox"
      />

      <P small secondary className={styles.termsText}>
        Al crear una cuenta, aceptas que eres mayor de 18 años y que has leído y
        estás de acuerdo con los
        <Button type="button" link blue onClick={showTermsConditions}>
          &nbsp;Términos y Condiciones&nbsp;
        </Button>
        y el
        <Button type="button" link blue onClick={showPrivacy}>
          &nbsp;Aviso de Privacidad.&nbsp;
        </Button>
      </P>

      <Button
        small
        secondary
        block
        data-automation-id={AUTOMATION_ID.BUTTONS.SUBMIT}
        className={styles.submitBtn}
        type="submit"
        disabled={submitting}
      >
        Crear cuenta
      </Button>

      <P secondary center className={styles.loginBtn}>
        ¿Ya tienes cuenta?
        <NavLink to={LOGIN_PATH} link blue>
          &nbsp; Iniciar sesión
        </NavLink>
      </P>
    </Form>
  );
};

export default reduxForm({
  form: FORMS.REGISTER
})(RegisterForm);
