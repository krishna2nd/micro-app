import pick from 'lodash/pick';
import get from 'lodash/get';

import { getNormalizePhoneNumber } from 'src/components/telephone-form/telephone-form.utils';
import {
  COUNTRY_CODES,
  COUNTRY_CODE,
  MOBILE_NUMBER
} from 'src/components/telephone-form/telephone-form.constants';

export const normalizeProfile = ({ profileId = '000000', profile = {} }) => {
  const normalizedMobileNumber = getNormalizePhoneNumber({
    mobileNumber: get(profile, 'mobileNumber', '')
  });

  return {
    ...pick(profile, ['firstName', 'email', 'gender', 'receivePromoEmail']),
    id: profileId,
    dateOfBirth: get(profile, 'dateOfBirth.formattedDate', ''),
    joinDate: get(profile, 'joinDate.formattedDate', ''),
    firstName: get(profile, 'firstName', ''),
    middleName: get(profile, 'lastName', ''),
    lastName: get(profile, 'middleName', ''),
    fullName: `${profile.firstName || ''} ${profile.middleName ||
      ''} ${profile.lastName || ''}`,
    countryCode: normalizedMobileNumber[COUNTRY_CODE] || COUNTRY_CODES.MEXICO,
    mobileNumber: normalizedMobileNumber[MOBILE_NUMBER],
    phoneNumber: get(profile, 'phoneNumber', ''),
    associateStore: get(profile, 'associateStore', ''),
    associateNumber: get(profile, 'associateNumber', ''),
    phoneExtension: get(profile, 'phoneExtension', ''),
    occupation: get(profile, 'occupation', ''),
    passwordCheckBox: 'false'
  };
};
