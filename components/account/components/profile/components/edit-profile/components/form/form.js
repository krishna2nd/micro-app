import React from 'react';
import { Field, reduxForm } from 'redux-form';

/* === CONSTANTS === */
import { AUTOMATION_ID } from 'src/components/app/app.constants';
import { FIELD_NAMES, FORMS } from 'src/components/account/account.constants';

/* === COMPONENTS === */
import Button from 'src/components/shared/button';
import LabelInput from 'src/components/shared/form/label-input';
import Form from 'src/components/shared/form/form';
import Radio from 'src/components/shared/form/radio';
import { H4, P } from 'src/components/shared/typography';

/* === UTILS === */
import { MASK_UTIL } from 'src/components/shared/form/label-input/label-input.utils';

/* === FORM VALIDATIONS === */
import {
  required,
  noSpecialCharacters,
  isFutureDate,
  isValidDate,
  isOver18
} from 'src/utils/fieldLevelValidationForm';

/* === STYLES === */
import commonStyles from 'src/components/shared/common.styles.css';

const ProfileForm = props => {
  const { pristine, submitting, handleSubmit, onGoBack } = props;

  return (
    <Form data-automation-id={FORMS.EDIT_PROFILE} onSubmit={handleSubmit}>
      <H4 primary>Editar datos personales</H4>

      <P secondary>*Estos campos son obligatorios.</P>

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
        maxLength="40"
        label="Apellido paterno*"
        validate={[required, noSpecialCharacters]}
      />
      <Field
        name={FIELD_NAMES.MIDDLE_NAME}
        type="text"
        component={LabelInput}
        maxLength="40"
        label="Apellido materno"
        validate={[noSpecialCharacters]}
      />
      <Field
        name={FIELD_NAMES.DATE_OF_BIRTH}
        type="text"
        component={LabelInput}
        normalize={MASK_UTIL.DATE}
        label="Fecha de nacimiento"
        validate={[isFutureDate, isValidDate, isOver18]}
      />

      <label>Género</label>
      <div className={commonStyles.twoColContainer}>
        <Field
          name={FIELD_NAMES.GENDER}
          type="radio"
          component={Radio}
          label="Mujer"
          value="Mujer"
        />
        <Field
          name={FIELD_NAMES.GENDER}
          type="radio"
          component={Radio}
          label="Hombre"
          value="Hombre"
        />
      </div>

      <div className={commonStyles.twoColContainer}>
        <Button
          small
          block
          tertiary
          type="button"
          data-automation-id={AUTOMATION_ID.BUTTONS.CANCEL}
          onClick={onGoBack}
        >
          Cancelar
        </Button>

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
      </div>
    </Form>
  );
};

export default reduxForm({
  form: FORMS.EDIT_PROFILE,
  enableReinitialize: true
})(ProfileForm);
