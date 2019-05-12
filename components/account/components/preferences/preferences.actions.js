/* === CONSTANTS === */
import {
  GET_PREFERENCES_API_PATH,
  SET_PREFERENCES_API_PATH
} from './preferences.constants';

/* === NORMALIZR === */
import { normalizePreferencesParams } from './preferences.normalizr';

/* === SELECTORS === */
import { preference } from './preferences.selectors';

/* === IMPORTED_ACTIONS === */
import { toggleLoader } from 'src/components/loader/loader.actions';
import { post, get } from 'src/request/request.api';
import { createRequestActions } from 'src/request/request.utils';

export const {
  getPreferenceDetailsRequest,
  getPreferenceDetailsSuccess,
  getPreferenceDetailsFailure
} = createRequestActions('getPreferenceDetails', 'account');

export const getPreferenceDetails = ({ alertPath } = {}) => dispatch => {
  dispatch(getPreferenceDetailsRequest());

  return dispatch(
    get({
      url: GET_PREFERENCES_API_PATH
    })
  )
    .then(response => {
      dispatch(getPreferenceDetailsSuccess(response));
      return response;
    })
    .catch(error => {
      dispatch(getPreferenceDetailsFailure(error.message));
    });
};

export const {
  setPreferenceDetailsRequest,
  setPreferenceDetailsSuccess,
  setPreferenceDetailsFailure
} = createRequestActions('setPreferenceDetails', 'account');

export const setPreferenceDetails = ({ alertPath, ...params } = {}) => (
  dispatch,
  getState
) => {
  const state = getState();
  dispatch(setPreferenceDetailsRequest());
  dispatch(toggleLoader(true));

  const newParams = {
    userPreferences: [], // Mandatory
    ...normalizePreferencesParams(preference(state)),
    ...params
  };

  return dispatch(
    post({
      url: SET_PREFERENCES_API_PATH,
      body: JSON.stringify(newParams)
    })
  )
    .then(response => {
      dispatch(toggleLoader(false));
      dispatch(setPreferenceDetailsSuccess(newParams));

      return response;
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(setPreferenceDetailsFailure(error.message));
    });
};
