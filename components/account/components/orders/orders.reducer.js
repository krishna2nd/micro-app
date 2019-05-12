import { handleActions } from 'redux-actions';
import { getOrdersSuccess } from './orders.actions';

const initialState = {
  orders: []
};

const getOrdersSuccessHandler = (state, { payload: { response } }) => ({
  ...state,
  orders: response
});

export default handleActions(
  {
    [getOrdersSuccess]: getOrdersSuccessHandler
  },
  initialState
);
