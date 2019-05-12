/* === CONSTANTS === */
import { GET_ORDER_API_PATH } from './order.constants';

/* === IMPORTED_ACTIONS === */
import { toggleLoader } from 'src/components/loader/loader.actions';
import { get } from 'src/request/request.api';
import {
  createRequestActions,
  jsonToURLSearchParams
} from 'src/request/request.utils';

export const {
  getOrderRequest,
  getOrderSuccess,
  getOrderFailure
} = createRequestActions('getOrder', 'account/order');

export const getOrder = params => dispatch => {
  dispatch(getOrderRequest());
  dispatch(toggleLoader(true));

  return dispatch(
    get({
      url: `${GET_ORDER_API_PATH}?${jsonToURLSearchParams(params)}`
    })
  )
    .then(response => {
      dispatch(toggleLoader(false));
      dispatch(getOrderSuccess(response));

      return response;
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(getOrderFailure(error.message));
    });
};
