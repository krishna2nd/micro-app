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
import Form from 'src/components/shared/form/form';

/* === FORM VALIDATIONS === */
import { required, email } from 'src/utils/fieldLevelValidationForm';

const ForgotPasswordForm = props => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <Form onSubmit={handleSubmit} data-automation-id={FORMS.FORGOT_PASSWORD}>
      <Field
        name={FIELD_NAMES.EMAIL}
        type="email"
        component={LabelInput}
        label="Correo electr&oacute;nico*"
        validate={[required, email]}
      />
      <Button
        small
        secondary
        block
        data-automation-id={AUTOMATION_ID.BUTTONS.SUBMIT}
        type="submit"
        disabled={pristine || submitting}
      >
        Enviar
      </Button>
    </Form>
  );
};

export default reduxForm({
  form: FORMS.FORGOT_PASSWORD
})(ForgotPasswordForm);
