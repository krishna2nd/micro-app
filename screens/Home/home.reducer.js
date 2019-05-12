import { handleActions } from "redux-actions";
import { LOCATION_CHANGE } from "react-router-redux";
import { normalizeHomeLayout } from "./home.normalizr";
import {
  homeLayoutRequest,
  homeLayoutSuccess,
  homeLayoutFailure
} from "./home.actions";

const initialState = {
  //   returnTo: HOME_PATH,
  //   sessionStatus: SESSION_STATUS.PENDING,
  //   isLoggedIn: false
};

// const setSessionSuccess = (state, { payload }) => {
//   localStorage.setItem(SESSION_CONFIG_KEY, JSON.stringify(payload.response));
//   return {
//     ...state,
//     [SESSION_CONFIG_KEY]: payload.response,
//     sessionStatus: SESSION_STATUS.READY
//   };
// };

// const setSessionFailure = (state, { payload }) => ({
//   ...state,
//   sessionStatus: SESSION_STATUS.FAILED
// });

export const HomeReducer = handleActions(
  {
    [homeLayoutRequest]: (state, payload) => ({
      ...state
      // loading: true
    }),
    [homeLayoutSuccess]: (state, payload) => ({
      ...state,
      ...normalizeHomeLayout(payload)
    }),
    [homeLayoutFailure]: (state, payload) => ({
      ...state,
      ...payload,
      error: true
    })
    // [getSessionSuccess]: setSessionSuccess,
    // [getSessionFailure]: setSessionFailure,
  },
  initialState
);
