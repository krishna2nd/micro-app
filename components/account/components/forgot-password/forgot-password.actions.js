/* === LIBRARIES === */
import { createAction } from 'redux-actions';
import get from 'lodash/get';
import { push } from 'react-router-redux';

/* === CONSTANTS === */
import { FORGOT_PASSWORD_API_PATH } from './forgot-password.constants';
import { FORGOT_PASSWORD_CONFIRMATION_PATH } from 'src/components/app/app.constants';

/* === IMPORTED_ACTIONS === */
import { toggleLoader } from 'src/components/loader/loader.actions';
import { post } from 'src/request/request.api';
import { createRequestActions } from 'src/request/request.utils';

/* === ACTIONS === */
export const SET_FORGOT_PASSWORD_EMAIL = 'account/SET_FORGOT_PASSWORD_EMAIL';
export const setForgotPasswordEmail = createAction(SET_FORGOT_PASSWORD_EMAIL);
export const saveForgotPasswordEmail = email => dispatch =>
  dispatch(setForgotPasswordEmail(email));

export const {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure
} = createRequestActions('forgotPassword', 'account');

export const forgotPassword = params => dispatch => {
  dispatch(forgotPasswordRequest());
  dispatch(toggleLoader(true));

  return dispatch(
    post({
      url: FORGOT_PASSWORD_API_PATH,
      body: JSON.stringify(params)
    })
  )
    .then(response => {
      if (get(response, 'codeMessage') !== '0') {
        return Promise.reject({
          message: response.message,
          errorCode: response.codeMessage
        });
      }

      dispatch(toggleLoader(false));
      dispatch(forgotPasswordSuccess(response));
      dispatch(saveForgotPasswordEmail(params.email));
      dispatch(push(FORGOT_PASSWORD_CONFIRMATION_PATH));
      return response;
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(forgotPasswordFailure(error.message));
    });
};
