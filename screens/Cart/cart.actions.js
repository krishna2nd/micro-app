/* === LIBRARIES === */
import { createAction } from "redux-actions";
import { get, post } from "../../request/request.api";
import { createRequestActions } from "../../request/request.utils";
import { userCart } from "./cart.selectors";
import { docCart } from "../../state/firebase";

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

export const {
  clearCartRequest,
  clearCartSuccess,
  clearCartFailure
} = createRequestActions("clearCart", "cart");

export const clearCart = () => (dispatch, getState) => {
  dispatch(clearCartRequest());
  docCart
    .set({
      list: []
    })
    .then(() => {
      dispatch(clearCartSuccess());
    })
    .catch(function(error) {
      dispatch(clearCartFailure());
    });
};

export const fetchCartList = product => (dispatch, getState) => {
  dispatch(fetchCartRequest());
  docCart
    .get()
    .then(function(doc) {
      if (doc.exists) {
        const { list = [] } = doc.data();
        if (list && list.length) {
          // console.log(list);
          dispatch(fetchCartSuccess({ list }));
        }
      }
    })
    .catch(() => {});
};

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

export const addToCart = product => (dispatch, getState) => {
  dispatch(addCartRequest());
  dispatch(addCartSuccess(product));

  const cart = userCart(getState());
  docCart
    .set({
      list: cart
    })
    .then(() => {
    })
    .catch(function(error) {
    });
};
