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
  updateCartFailure,
  cleanCartRequest
} from "./cart.actions";

const initialState = {
  list: []
};

export const CartReducer = handleActions(
  {
    [cleanCartRequest]: (state, payload) => ({
      ...state,
      list: []
    }),
    [fetchCartRequest]: (state, payload) => ({
      ...state,
      loading: true
    }),
    [fetchCartSuccess]: (state, { payload: { response } }) => {
      console.log("@payload", response)
      return {
      ...state,
      ...response,
      loading: false
    }},
    [addCartSuccess]: (state, { payload: { response } }) => {
      const product = {
        ...response,
        count: 1
      };
      const list = state.list;
      let stateProduct = list.find(item => item.id === product.id);
      if (!stateProduct) list.push(product);
      else stateProduct.count += 1;
      return {
        ...state,
        list
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
