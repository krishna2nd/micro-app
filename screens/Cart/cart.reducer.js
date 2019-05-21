import { handleActions } from "redux-actions";
import { LOCATION_CHANGE } from "react-router-redux";
import { get } from "lodash";
import { normalizeCart } from "./cart.normalizr";
import {
  fetchCartList,
  fetchCartRequest,
  fetchCartSuccess,
  fetchCartFailure,
  addCartRequest,
  addCartSuccess,
  addCartFailure,
  removeCartRequest,
  removeCartSuccess,
  removeCartFailure,
  updateCartRequest,
  updateCartSuccess,
  updateCartFailure
} from "./cart.actions";

const initialState = {
  list: []
};

export const CartReducer = handleActions(
  {
    [fetchCartRequest]: (state, payload) => ({
      ...state,
      loading: true
    }),
    [fetchCartSuccess]: (state, payload) => ({
      ...state,
      ...payload.request,
      loading: true
    }),
    [addCartSuccess]: (state, {payload: {response}}) => {
      console.log("Adding cart", response);
      return {
        ...state,
        list: [...(state.list), response]
      };
    },
    [removeCartSuccess]: (state, payload) => ({
      ...state
    }),
    [updateCartSuccess]: (state, payload) => ({
      ...state
    })
  },
  initialState
);
