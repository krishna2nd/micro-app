import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Select from 'src/components/shared/form/select';

const Sorting = ({ sortOptions, onChangeSorting }) => (
  <Field
    name="selected"
    type="select"
    noMargin
    label="Ordenar por"
    component={Select}
    onChange={onChangeSorting}
  >
    {sortOptions.map(department => (
      <option key={department} value={department}>
        {department}
      </option>
    ))}
  </Field>
);

export default reduxForm({
  form: 'SortingDepartments'
})(Sorting);
