import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SORT_OPTIONS, ORDERS_SORT_FORM_NAME } from '../orders.constants';

import Form from 'src/components/shared/form/form';
import Select from 'src/components/shared/form/select';
import styles from '../orders.styles.css';

const Sort = () => (
  <div className={styles.sortContainer}>
    <Form className={styles.sort}>
      <Field name="sortOrders" type="select" label="Mes" component={Select}>
        {SORT_OPTIONS.map((option, key) => (
          <option key={key} value={key}>
            {option}
          </option>
        ))}
      </Field>
    </Form>
  </div>
);

export default reduxForm({
  form: ORDERS_SORT_FORM_NAME
})(Sort);
