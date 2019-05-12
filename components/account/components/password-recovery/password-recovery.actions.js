/* === CONSTANTS === */

import {
  VERIFY_TOKEN_API_PATH,
  RESET_PASSWORD_API_PATH,
  ERROR_MAP
} from './password-recovery.constants';

/* === IMPORTED_ACTIONS === */
import { toggleLoader } from 'src/components/loader/loader.actions';
import { post, get } from 'src/request/request.api';
import { createRequestActions } from 'src/request/request.utils';

export const {
  verifyPasswordTokenRequest,
  verifyPasswordTokenSuccess,
  verifyPasswordTokenFailure
} = createRequestActions('verifyPasswordToken', 'account');

export const verifyPasswordToken = ({ encId, token }) => dispatch => {
  dispatch(verifyPasswordTokenRequest());
  dispatch(toggleLoader(true));

  encId = encodeURIComponent(encId);
  token = encodeURIComponent(token);

  return dispatch(
    get({
      url: `${VERIFY_TOKEN_API_PATH}?encProfileId=${encId}&token=${token}`
    })
  )
    .then(response => {
      dispatch(toggleLoader(false));
      dispatch(verifyPasswordTokenSuccess(response));

      return response;
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(verifyPasswordTokenFailure(error.message));
    });
};

export const {
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure
} = createRequestActions('resetPassword', 'account');

export const resetPassword = params => dispatch => {
  dispatch(resetPasswordRequest());
  dispatch(toggleLoader(true));

  return dispatch(
    post({
      url: RESET_PASSWORD_API_PATH,
      body: JSON.stringify(params)
    })
  )
    .then(response => {
      dispatch(toggleLoader(false));
      dispatch(resetPasswordSuccess(response));
      return response;
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(resetPasswordFailure(error.message));
    });
};
