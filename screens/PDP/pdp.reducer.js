import { handleActions } from "redux-actions";
import { LOCATION_CHANGE } from "react-router-redux";
import { get } from "lodash";
import { normalizeSkuDetails } from "./pdp.normalizr";
import { PdpSkuRequest, PdpSkuSuccess, PdpSkuFailure } from "./pdp.actions";

const initialState = {
  product: undefined
};

export const PdpReducer = handleActions(
  {
    [PdpSkuRequest]: (state, payload) => ({
      ...state
      // loading: true
    }),
    [PdpSkuSuccess]: (state, { payload: { response } }) => {
      return {
        ...state,
        product: {
          ...normalizeSkuDetails(response)
        }
      };
    },
    [PdpSkuFailure]: (state, payload) => ({
      ...state,
      //...payload,
      error: true
    })
  },
  initialState
);
