import { handleActions } from 'redux-actions';
import { initUserSuccess } from 'src/components/user/user.actions';
import { normalizeReservation, orderNormalizr } from './order.normalizr';
import { getOrderSuccess } from './order.actions';

const initialState = {
  delivery: {},
  pickup: {},
  store: {},
  cartProducts: [],
  reservation: {},
  priceDetails: {},
  payment: {},
  submittedDate: '',
  comment: ''
};

const onInitSetOrderInfo = (state, { payload: { response } }) => {
  const { pendingOrders } = orderNormalizr(response);
  return {
    ...state,
    pendingOrders
  };
};

export default handleActions(
  {
    [initUserSuccess]: onInitSetOrderInfo,
    [getOrderSuccess]: (state, { payload: { response } }) => ({
      ...state,
      ...{
        order: response.result,
        storeDetails: response.storeDetails
      },
      reservation: normalizeReservation(response.result)
    })
  },
  initialState
);
