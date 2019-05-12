import { handleActions, combineActions } from 'redux-actions';

import {
  termsConditionsDetailsRequest,
  termsConditionsDetailsSuccess,
  termsConditionsDetailsFailure
} from './terms-conditions.actions';

const initialState = {
  termsConditionsDetails: {},
  fetching: null,
  error: null
};

export default handleActions(
  {
    [termsConditionsDetailsSuccess]: (
      state,
      { payload: { error, fetching, response } }
    ) => ({
      ...state,
      error,
      fetching,
      termsConditionsDetails: response
    }),
    [combineActions(
      termsConditionsDetailsRequest,
      termsConditionsDetailsFailure
    )](
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
