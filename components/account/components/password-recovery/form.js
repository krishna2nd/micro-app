/* === LIBRARIES === */
import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';

/* === CONSTANTS === */
import { AUTOMATION_ID } from 'src/components/app/app.constants';
import { FIELD_NAMES, FORMS } from 'src/components/account/account.constants';

/* === COMPONENTS === */
import Button from 'src/components/shared/button';
import { P } from 'src/components/shared/typography';
import LabelInput from 'src/components/shared/form/label-input';
import Form from 'src/components/shared/form/form';

/* === FORM VALIDATIONS === */
import {
  required,
  password,
  maxLength40
} from 'src/utils/fieldLevelValidationForm';

const RecoveryForm = props => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <Form onSubmit={handleSubmit} data-automation-id={FORMS.PASSWORD_RECOVERY}>
      <Field
        name={FIELD_NAMES.PASSWORD}
        type="password"
        component={LabelInput}
        label="Nueva contraseña*"
        maxLength="40"
        validate={[required, password, maxLength40]}
      />
      <P>
        La contraseña debe tener al menos 8 caracteres y contener al menos una
        letra mayúscula y un número
      </P>
      <Button
        small
        secondary
        block
        data-automation-id={AUTOMATION_ID.BUTTONS.SUBMIT}
        type="submit"
        disabled={pristine || submitting}
      >
        Actualizar
      </Button>
    </Form>
  );
};

export default reduxForm({
  form: FORMS.PASSWORD_RECOVERY
})(RecoveryForm);
