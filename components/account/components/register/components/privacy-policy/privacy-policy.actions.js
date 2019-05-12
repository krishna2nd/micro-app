import { toggleLoader } from 'src/components/loader/loader.actions';
import { get } from 'src/request/request.api';
import { createRequestActions } from 'src/request/request.utils';

import { GET_CONFIGURED_CONTENT_API_PATH } from '../../register.constants';
import { GET_MEDIA_PRIVACY_POLICY } from './privacy-policy.constants';

export const {
  privacyPolicyDetailsRequest,
  privacyPolicyDetailsSuccess,
  privacyPolicyDetailsFailure
} = createRequestActions('privacyPolicyDetails', 'privacy-policy');

export const getPrivacyPolicyDetails = () => dispatch => {
  dispatch(privacyPolicyDetailsRequest());
  dispatch(toggleLoader(true));

  return dispatch(
    get({
      url: `${GET_CONFIGURED_CONTENT_API_PATH}?mediaName=${GET_MEDIA_PRIVACY_POLICY}`
    })
  )
    .then(response => {
      dispatch(privacyPolicyDetailsSuccess(response));
      dispatch(toggleLoader(false));
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(privacyPolicyDetailsFailure(error));
      return Promise.reject(error);
    });
};
