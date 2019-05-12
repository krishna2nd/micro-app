import { handleActions, combineActions } from 'redux-actions';

import {
  privacyPolicyDetailsRequest,
  privacyPolicyDetailsSuccess,
  privacyPolicyDetailsFailure
} from './privacy-policy.actions';

const initialState = {
  privacyPolicyDetails: {},
  fetching: null,
  error: null
};

export default handleActions(
  {
    [privacyPolicyDetailsSuccess]: (
      state,
      { payload: { error, fetching, response } }
    ) => ({
      ...state,
      error,
      fetching,
      privacyPolicyDetails: response
    }),
    [combineActions(privacyPolicyDetailsRequest, privacyPolicyDetailsFailure)](
      state,
      {
        payload: { error, fetching }
      }
    ) {
      return { ...state, error, fetching };
    }
  },
  initialState
);
