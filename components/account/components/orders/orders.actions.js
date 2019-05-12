/* === CONSTANTS === */
import { GET_ORDERS_API_PATH } from './orders.constants';

/* === IMPORTED_ACTIONS === */
import { toggleLoader } from 'src/components/loader/loader.actions';
import { get } from 'src/request/request.api';
import { createRequestActions } from 'src/request/request.utils';
import { normalizeOrdersResponse } from './orders.normalizr';

export const {
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersFailure
} = createRequestActions('getOrders', 'account/orders');

export const getOrders = params => dispatch => {
  dispatch(getOrdersRequest());
  dispatch(toggleLoader(true));

  return dispatch(
    get({
      url: GET_ORDERS_API_PATH
    })
  )
    .then(response => {
      dispatch(toggleLoader(false));
      dispatch(getOrdersSuccess(normalizeOrdersResponse(response)));
      return response;
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(getOrdersFailure(error.message));
    });
};
