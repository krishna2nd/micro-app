import { handleActions } from 'redux-actions';
import {
  getPreferenceDetailsSuccess,
  setPreferenceDetailsSuccess
} from './preferences.actions';
import { normalizePreferencesResponse } from './preferences.normalizr';

const getPreferenceDetailsSuccessHandler = (
  state,
  { payload: { response } }
) => ({
  ...state,
  ...normalizePreferencesResponse(response)
});

const setPreferenceDetailsSuccessHandler = (
  state,
  { payload: { response } }
) => ({
  ...state,
  onlyTelephonicAlert:
    response.onlyTelephonicAlert === 'receiveCallConfirmation'
});

const initialState = {
  abandonCartAlert: false,
  forOBIEE: false,
  onlyTelephonicAlert: false,
  receiveInfoEmail: false,
  receivePromoEmail: false,
  telephonicSmsAlert: false
};

export default handleActions(
  {
    [getPreferenceDetailsSuccess]: getPreferenceDetailsSuccessHandler,
    [setPreferenceDetailsSuccess]: setPreferenceDetailsSuccessHandler
  },
  initialState
);
