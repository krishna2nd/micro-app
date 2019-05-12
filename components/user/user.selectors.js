import { createSelector } from 'reselect';
import get from 'lodash/get';

import {
  allCookies,
  parseAndDecodeJSONString
} from 'src/request/request.utils';

export const userDetails = ({ userReducer }) => {
  const {
    profile: {
      id: profileId,
      favoritesListId,
      mySaveLaterGiftListId,
      firstName,
      middleName,
      lastName,
      email,
      gender,
      phoneNumber,
      phoneExtension,
      countryCode,
      mobileNumber
    },
    meta
  } = userReducer;

  return {
    profileId,
    favoritesListId,
    mySaveLaterGiftListId,
    firstName,
    middleName,
    lastName,
    email,
    gender,
    phoneNumber,
    phoneExtension,
    countryCode,
    mobileNumber,
    meta
  };
};

export const profileId = createSelector(
  userDetails,
  ({ profileId }) => profileId
);

export const email = createSelector(
  userDetails,
  ({ email }) => email
);

export const profileCookie = () =>
  parseAndDecodeJSONString(get(allCookies(), 'profile'));

export const profileName = createSelector(
  userDetails,
  data => get(data, 'firstName') || profileCookie().firstName || ''
);

export const isLoggedIn = createSelector(
  userDetails,
  ({ meta: { isLoggedIn } }) => isLoggedIn
);
