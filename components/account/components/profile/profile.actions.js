import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

import { toggleLoader } from 'src/components/loader/loader.actions';
import { post, get } from 'src/request/request.api';
import { createRequestActions } from 'src/request/request.utils';

import {
  PROFILE_DETAILS_API_PATH,
  UPDATE_PROFILE_DETAILS_API_PATH
} from './profile.constants';

import { profile } from 'src/components/user/components/profile/profile.selectors';
export const {
  profileDetailsRequest,
  profileDetailsSuccess,
  profileDetailsFailure
} = createRequestActions('profileDetails', 'account/profile');

export const getProfileDetails = () => dispatch => {
  dispatch(profileDetailsRequest());
  dispatch(toggleLoader(true));

  return dispatch(
    get({
      url: PROFILE_DETAILS_API_PATH
    })
  )
    .then(response => {
      dispatch(profileDetailsSuccess(response));
      dispatch(toggleLoader(false));
      return response;
    })
    .catch(({ message }) => {
      dispatch(toggleLoader(false));
      dispatch(profileDetailsFailure(message));
      return Promise.reject(message);
    });
};

export const {
  updateProfileDetailsRequest,
  updateProfileDetailsSuccess,
  updateProfileDetailsFailure
} = createRequestActions('updateProfileDetails', 'account/profile');

export const updateProfileDetails = (formParams = {}) => (
  dispatch,
  getState
) => {
  const profileData = profile(getState());
  const mobileNumber =
    (formParams.countryCode || '') + (formParams.mobileNumber || '');

  // Combine the original profile data with the
  // new updated form data
  const params = pickBy(
    {
      ...profileData,
      ...formParams,
      mobileNumber
    },
    identity
  );

  dispatch(updateProfileDetailsRequest());
  dispatch(toggleLoader(true));

  return dispatch(
    post({
      url: UPDATE_PROFILE_DETAILS_API_PATH,
      body: JSON.stringify(params)
    })
  )
    .then(response => {
      dispatch(toggleLoader(false));
      dispatch(updateProfileDetailsSuccess(response));

      return response;
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(updateProfileDetailsFailure(error.codeMessage));
      return Promise.reject(error);
    });
};
