import { handleActions } from 'redux-actions';

import {
  profileDetailsSuccess,
  updateProfileDetailsSuccess
} from 'src/components/account/components/profile/profile.actions';
import { normalizeProfile } from './profile.normalizr';
import { initUserSuccess, resetUser } from '../../user.actions';
import { registerSuccess } from 'src/components/account/components/register/register.actions';
import { loginSuccess } from 'src/components/account/components/login/login.actions';

const initialState = {
  // Request
  error: false,

  // Personal Info
  id: '',
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  gender: '',
  dateOfBirth: '', // 04/12/2002
  occupation: '',

  // Phone
  mobileNumber: '',
  phoneNumber: '',
  phoneExtension: '',

  // Associate Info
  associateCheckBox: false,
  associateNumber: '',
  associateStore: '',
  joinDate: '',

  // Credentials
  passwordCheckBox: false,
  oldPassword: '',
  newPassword: '',
  favoritesListId: null
};

export default handleActions(
  {
    [profileDetailsSuccess]: (state, { payload }) => ({
      ...state,
      ...normalizeProfile(payload.response),
      error: payload.error
    }),
    [updateProfileDetailsSuccess]: (state, { payload: { response } }) => ({
      ...state,
      ...normalizeProfile({
        profileId: response.profileId,
        profile: response.profile
      })
    }),
    [initUserSuccess]: (state, { payload: { response } }) => ({
      ...state,
      ...normalizeProfile({
        profileId: response.profile.id,
        profile: response.profile
      }),
      favoritesListId: response.myFavoriteGiftListId,
      mySaveLaterGiftListId: response.mySaveLaterGiftListId
    }),
    [loginSuccess]: (state, { payload: { response } }) => ({
      ...state,
      ...normalizeProfile(response)
    }),
    [registerSuccess]: (state, { payload: { response } }) => ({
      ...state,
      ...normalizeProfile({
        profileId: response.profileId,
        profile: response
      }),
      favoritesListId: response.myFavoriteGiftListId,
      mySaveLaterGiftListId: response.mySaveLaterGiftListId
    }),
    [resetUser]: () => initialState
  },
  initialState
);
