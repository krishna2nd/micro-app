/* === LIBRARIES === */
import { createAction } from "redux-actions";
import { get, post } from "../../request/request.api";
import { createRequestActions } from "../../request/request.utils";
import { userCart } from "./cart.selectors";
import { store } from "../../state";

import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC3-Mn-jUF07cjiIz9-FV4ZrA9BP5ifX4",
  authDomain: "onemex-8d535.firebaseapp.com",
  databaseURL: "https://onemex-8d535.firebaseio.com",
  projectId: "onemex-8d535",
  storageBucket: "onemex-8d535.appspot.com",
  messagingSenderId: "125184474941",
  appId: "1:125184474941:web:bb4e8d84006a4fef"
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
const db = firebase.firestore();
// db.settings({
//   cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
// });
// db.enablePersistence();

const docCart = db.collection("cart").doc("sams");

docCart.onSnapshot(function(doc) {
  store.dispatch(fetchCartSuccess(doc.data()));
});

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

export const cleanCartRequest = createAction("CLEAN_ITEMS_FROM_CART");

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
      // docCart.get().then(function(doc) {
      //   if (doc.exists) {
      //     console.log("Document data:", doc.data());
      //   } else {
      //     // doc.data() will be undefined in this case
      //     console.log("No such document!");
      //   }
      // });
    })
    .catch(function(error) {
      // console.error("Error adding document: ", error);
    });
};
