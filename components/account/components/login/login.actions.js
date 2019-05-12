/* === LIBRARIES === */
import { push } from 'react-router-redux';

/* === IMPORTED_ACTIONS === */
import { post } from 'src/request/request.api';
import { createRequestActions } from 'src/request/request.utils';
import { toggleLoader } from 'src/components/loader/loader.actions';
import { resetUser, initUser } from 'src/components/user/user.actions';
import getSessionConfirmationNumber from 'src/utils/getSessionConfirmationNumber';
import { returnTo } from 'src/components/user/components/meta/meta.selectors';
import { FORGOT_SOMETHING_PATH } from 'src/components/app/app.constants';

/* === CONSTANTS === */
import { HOME_PATH } from 'src/components/app/app.constants';
import {
  LOGIN_API_PATH,
  LOGOUT_API_PATH,
  MERGE_CART_PARAM
} from './login.constants';

/* === ACTIONS === */
export const {
  loginRequest,
  loginSuccess,
  loginFailure
} = createRequestActions('login', 'account');

export const login = params => (dispatch, getState) => {
  const state = getState();
  const prevRoute = returnTo(state);
  const url =
    prevRoute !== FORGOT_SOMETHING_PATH
      ? LOGIN_API_PATH
      : LOGIN_API_PATH + MERGE_CART_PARAM;

  dispatch(loginRequest());
  dispatch(toggleLoader(true));

  dispatch(
    post({
      url,
      body: JSON.stringify({
        ...params,
        _dynSessConf: getSessionConfirmationNumber()
      })
    })
  )
    .then(response => {
      if (response.codeMessage !== '0') {
        throw response;
      }

      dispatch(toggleLoader(false));
      dispatch(loginSuccess(response));
      dispatch(initUser());
      dispatch(push(prevRoute));
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(loginFailure(error.message));
    });
};

export const {
  logoutRequest,
  logoutFailure,
  logoutSuccess
} = createRequestActions('logout', 'account');

export const logout = () => dispatch => {
  dispatch(logoutRequest());
  dispatch(toggleLoader(true));

  dispatch(
    post({
      url: LOGOUT_API_PATH
    })
  )
    .then(response => {
      if (response.codeMessage !== '0') {
        throw new Error(response.message);
      }

      dispatch(resetUser());
      dispatch(logoutSuccess(response));
      dispatch(toggleLoader(false));
      dispatch(push(HOME_PATH));
    })
    .catch(error => {
      dispatch(logoutFailure(error));
      dispatch(toggleLoader(false));

      return Promise.reject(error);
    });
};
