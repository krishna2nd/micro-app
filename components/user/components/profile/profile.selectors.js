import isEmpty from 'lodash/isEmpty';
import { createSelector } from 'reselect';

export const profile = ({ userReducer: { profile } }) => profile;

export const profileId = createSelector(
  profile,
  user => user.id
);

export const email = createSelector(
  profile,
  user => user.email
);

export const phoneNumber = createSelector(
  profile,
  user => user.phoneNumber
);

export const mobileNumber = createSelector(
  profile,
  user => user.mobileNumber
);

export const hasPhoneNumber = createSelector(
  profile,
  user => !isEmpty(user.mobileNumber) || !isEmpty(user.phoneNumber)
);
