import { handleActions } from 'redux-actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  resetUser,
  getSessionSuccess,
  getSessionFailure,
  initUserSuccess
} from 'src/components/user/user.actions';
import { setForgotPasswordEmail } from 'src/components/account/components/forgot-password/forgot-password.actions';
import { normalizeMeta } from './meta.normalizr';
import {
  HOME_PATH,
  LOGIN_PATH,
  FORGOT_PASSWORD_PATH,
  REGISTER_PATH
} from 'src/components/app/app.constants';
import { SESSION_STATUS, SESSION_CONFIG_KEY } from './meta.constants';

const initialState = {
  forgotPasswordEmail: null,
  returnTo: HOME_PATH,
  sessionStatus: SESSION_STATUS.PENDING,
  isLoggedIn: false
};

const setForgotPasswordEmailHandler = (state, { payload }) => ({
  ...state,
  forgotPasswordEmail: payload
});

const setSessionSuccess = (state, { payload }) => {
  localStorage.setItem(SESSION_CONFIG_KEY, JSON.stringify(payload.response));
  return {
    ...state,
    [SESSION_CONFIG_KEY]: payload.response,
    sessionStatus: SESSION_STATUS.READY
  };
};

const setSessionFailure = (state, { payload }) => ({
  ...state,
  sessionStatus: SESSION_STATUS.FAILED
});

const locationChangeHandler = (state, { payload: { pathname } }) => {
  const blackList = [LOGIN_PATH, REGISTER_PATH, FORGOT_PASSWORD_PATH];
  const { pathname: curPath, search } = window.location;

  return {
    ...state,
    returnTo:
      pathname !== LOGIN_PATH && !blackList.includes(curPath)
        ? `${curPath}${search}`
        : state.returnTo
  };
};

export default handleActions(
  {
    [initUserSuccess]: (
      state,
      {
        payload: {
          response: { profile: { securityStatus } = { securityStatus: 0 } }
        }
      }
    ) => ({
      ...state,
      ...normalizeMeta({ securityStatus })
    }),
    [setForgotPasswordEmail]: setForgotPasswordEmailHandler,
    [resetUser]: () => ({
      ...initialState,
      sessionStatus: SESSION_STATUS.READY
    }),
    [getSessionSuccess]: setSessionSuccess,
    [getSessionFailure]: setSessionFailure,
    [LOCATION_CHANGE]: locationChangeHandler
  },
  initialState
);
