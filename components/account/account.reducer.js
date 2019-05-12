/* === LIBRARIES === */
import { combineReducers } from 'redux';

/* === REDUCERS === */
import ordersReducer from './components/orders/orders.reducer';
import orderReducer from './components/order/order.reducer';
import preferenceReducer from './components/preferences/preferences.reducer';
import membershipReducer from './components/membership/membership.reducer';

export default combineReducers({
  ordersReducer,
  orderReducer,
  preferenceReducer,
  membershipReducer
});
