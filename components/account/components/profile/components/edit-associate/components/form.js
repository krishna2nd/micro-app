import React from 'react';
import { Field, reduxForm } from 'redux-form';

/* === CONSTANTS === */
import { AUTOMATION_ID } from 'src/components/app/app.constants';
import { FIELD_NAMES, FORMS } from 'src/components/account/account.constants';

/* === COMPONENTS === */
import Button from 'src/components/shared/button';
import LabelInput from 'src/components/shared/form/label-input';
import { MASK_UTIL } from 'src/components/shared/form/label-input/label-input.utils';
import Form from 'src/components/shared/form/form';
import { H4, P } from 'src/components/shared/typography';
import { required } from 'src/utils/fieldLevelValidationForm';

const AssociateForm = props => {
  const { pristine, submitting, handleSubmit } = props;

  return (
    <Form data-automation-id={FORMS.EDIT_ASSOCIATE} onSubmit={handleSubmit}>
      <H4 primary>Ingresar datos de asociado</H4>

      <P secondary>*Estos son campos obligatorios</P>

      <Field
        name={FIELD_NAMES.ASSOCIATE_NUMBER}
        type="number"
        component={LabelInput}
        label="Numero de asociado*"
        validate={[required]}
      />
      <Field
        name={FIELD_NAMES.ASSOCIATE_STORE}
        type="number"
        component={LabelInput}
        label="Determinante*"
        validate={[required]}
      />
      {/*
          TODO: Picks a DatePicker library to normalize
          value accross browsers and devices.

          Problem with HTML5 Date Input:
            1) Different devices and browsers give different
            input value
            2) Normalizing cross-browser result is painful
       */}
      <Field
        name={FIELD_NAMES.JOIN_DATE}
        type="text"
        component={LabelInput}
        normalize={MASK_UTIL.DATE}
        label="Fecha de ingreso*"
        validate={[required]}
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
  form: FORMS.EDIT_ASSOCIATE
})(AssociateForm);
