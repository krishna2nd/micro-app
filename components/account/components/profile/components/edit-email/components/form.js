import React from 'react';
import { Field, reduxForm } from 'redux-form';

/* === CONSTANTS === */
import { AUTOMATION_ID } from 'src/components/app/app.constants';
import { FIELD_NAMES, FORMS } from 'src/components/account/account.constants';

/* === COMPONENTS === */
import Button from 'src/components/shared/button';
import LabelInput from 'src/components/shared/form/label-input';
import Form from 'src/components/shared/form/form';
import { H4, P } from 'src/components/shared/typography';

/* === FORM VALIDATIONS === */
import {
  required,
  password,
  duplicatePwd
} from 'src/utils/fieldLevelValidationForm';

const EmailForm = props => {
  const { pristine, submitting, handleSubmit } = props;

  return (
    <Form data-automation-id={FORMS.EDIT_EMAIL} onSubmit={handleSubmit}>
      <H4 primary>Editar datos de inicio de sesión</H4>

      <P secondary>*Estos son campos obligatorios</P>

      <Field
        name={FIELD_NAMES.EMAIL}
        type="email"
        label="Correo electr&oacute;nico"
        component={LabelInput}
        placeholder="Email address"
        disabled
      />
      <Field
        name={FIELD_NAMES.OLD_PASSWORD}
        type="password"
        component={LabelInput}
        label="Contrase&ntilde;a anterior"
        placeholder="Password"
        maxLength="40"
        validate={[required, password]}
      />
      <Field
        name={FIELD_NAMES.NEW_PASSWORD}
        type="password"
        component={LabelInput}
        label="Nueva contrase&ntilde;a"
        placeholder="Password"
        maxLength="40"
        validate={[required, password, duplicatePwd]}
      />
      <Button
        small
        block
        secondary
        data-automation-id={AUTOMATION_ID.BUTTONS.SUBMIT}
        type="submit"
        disabled={pristine || submitting}
      >
        Guardar
      </Button>
    </Form>
  );
};

export default reduxForm({
  form: FORMS.EDIT_EMAIL
})(EmailForm);
