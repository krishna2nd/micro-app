/* === LIBRARIES === */
import { createAction } from "redux-actions";
import { get, post } from "../../request/request.api";
import { createRequestActions } from "../../request/request.utils";

import { cleanCartRequest } from "../Cart/cart.actions";
import { userCart } from "../Cart/cart.selectors";

export const {
  orderCreateRequest,
  orderCreateSuccess,
  orderCreateFailure
} = createRequestActions("orderCreate", "confirmation");

export const CreateOrder = list => (dispatch, getState) => {
  const cart = userCart(getState());
  dispatch(orderCreateRequest());
  dispatch(cleanCartRequest());
  dispatch(orderCreateSuccess(cart));
};
