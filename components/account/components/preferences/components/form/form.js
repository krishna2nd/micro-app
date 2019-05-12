/* === LIBRARIES === */
import React from 'react';
import { Row, Col } from 'src/components/shared/flex';
import { Field, reduxForm } from 'redux-form';

/* === CONSTANTS === */
import { AUTOMATION_ID } from 'src/components/app/app.constants';
import { FIELD_NAMES, FORMS } from 'src/components/account/account.constants';

/* === COMPONENTS === */
import Button from 'src/components/shared/button';
import Checkbox from 'src/components/shared/form/checkbox';
import Form from 'src/components/shared/form/form';
import { H3, P } from 'src/components/shared/typography';
import styles from './form.styles.css';

const PreferencesForm = props => {
  const { handleSubmit, submitting, showPrivacy } = props;
  return (
    <Form
      data-automation-id={FORMS.PREFERENCES}
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <H3 primary>¿Qué información te gustaría recibir?</H3>

      <P bold large>
        Información por correo electrónico
      </P>
      <Field
        name={FIELD_NAMES.RECEIVE_INFO_EMAIL}
        component={Checkbox}
        label="Información de walmart.com.mx en mi buzón de correo"
        type="checkbox"
      />

      <Field
        name={FIELD_NAMES.RECEIVE_PROMO_EMAIL}
        component={Checkbox}
        label="Publicidad y/o promociones en mi buzón de correo"
        type="checkbox"
      />

      <P bold large>
        Carrito abandonado
      </P>
      <Field
        name={FIELD_NAMES.ABANDON_CART_ALERT}
        component={Checkbox}
        label="Información sobre mi carrito en mi buzón de correo"
        type="checkbox"
      />

      <P bold large>
        Promociones por SMS
      </P>
      <Field
        name={FIELD_NAMES.TELEPHONE_SMS_ALERT}
        component={Checkbox}
        label="Información via SMS sin costo"
        type="checkbox"
      />

      <P bold large>
        Llamada de confirmación
      </P>
      <Field
        name={FIELD_NAMES.ONLY_TELEPHONE_ALERT}
        component={Checkbox}
        label="Una llamada para confirmar cada pedido"
        type="checkbox"
      />

      <P>
        Consulta nuestro&nbsp;
        <Button type="button" link blue onClick={showPrivacy}>
          Aviso de Privacidad
        </Button>
      </P>

      <Row end="md">
        <Col xs={12} md={6} lg={4}>
          <Button
            secondary
            block
            data-automation-id={AUTOMATION_ID.BUTTONS.SUBMIT}
            type="submit"
            disabled={submitting}
          >
            Guardar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default reduxForm({
  form: FORMS.PREFERENCES,
  enableReinitialize: true
})(PreferencesForm);
