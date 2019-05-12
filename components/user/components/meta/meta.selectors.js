import { createSelector } from 'reselect';

export const meta = ({ userReducer: { meta } = { meta: {} } }) => meta;

export const forgotPasswordEmail = createSelector(
  meta,
  data => data.forgotPasswordEmail
);

export const returnTo = createSelector(
  meta,
  data => data.returnTo
);

export const sessionStatus = createSelector(
  meta,
  data => data.sessionStatus
);
