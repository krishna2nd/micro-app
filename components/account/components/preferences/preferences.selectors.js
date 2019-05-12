/* === LIBRARIES === */
import { createSelector } from 'reselect';

export const preference = ({ accountReducer: { preferenceReducer } }) =>
  preferenceReducer;

export const getPreferenceDetail = createSelector(
  preference,
  data => data.preferenceDetails
);

export const onlyPhoneConfirmation = createSelector(
  preference,
  data => data.onlyTelephonicAlert
);
