/* === LIBRARIES === */
import { createAction } from "redux-actions";
import { get, post } from "../../request/request.api";
import { createRequestActions } from "../../request/request.utils";
export const {
  fetchCartRequest,
  fetchCartSuccess,
  fetchCartFailure
} = createRequestActions("fetchCart", "cart");

export const {
  addCartRequest,
  addCartSuccess,
  addCartFailure
} = createRequestActions("addCart", "cart");

export const {
  removeCartRequest,
  removeCartSuccess,
  removeCartFailure
} = createRequestActions("removeCart", "cart");

export const {
  updateCartRequest,
  updateCartSuccess,
  updateCartFailure
} = createRequestActions("updateCart", "cart");

export const fetchCartList = product => (dispatch, getState) => {
  dispatch(fetchCartRequest());
};

export const cleanCartRequest = createAction('CLEAN_ITEMS_FROM_CART');

export const fetchBackendUrl = ({
  url,
  method,
  onSuccess,
  onFailure,
  onRequest
}) => (dispatch, getState) => {
  dispatch(onRequest());
  return dispatch(
    method({
      url
    })
  )
    .then(response => {
      dispatch(onSuccess(response));
      //console.log(response);
      return response;
    })
    .catch(({ message }) => {
      console.error("ERR", url, message);
      dispatch(onFailure(message));
      return Promise.reject(message);
    });
};

export const addToCart = (product) => (dispatch, getState) => {
  dispatch(addCartRequest());
  dispatch(addCartSuccess(product));
}
