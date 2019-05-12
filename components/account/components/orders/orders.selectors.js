import { createSelector } from 'reselect';
import get from 'lodash/get';
import values from 'lodash/values';
import groupBy from 'lodash/groupBy';

import { ORDERS_SORT_FORM_NAME } from './orders.constants';
import { getFormValues } from 'redux-form';

export const ordersReducer = ({ accountReducer: { ordersReducer } }) =>
  ordersReducer;
export const orders = createSelector(
  ordersReducer,
  x => get(x, 'orders', [])
);

export const getSelectedOrderValue = state =>
  get(getFormValues(ORDERS_SORT_FORM_NAME)(state), 'sortOrders', null);

export const getOrdersFiltered = createSelector(
  getSelectedOrderValue,
  orders,
  (filterBy, orders) => {
    let filteredOrders = [];
    const defaultOption = 1;
    const selectedOption = parseInt(filterBy, 10);
    if (!filterBy || selectedOption === defaultOption) {
      filteredOrders = values(orders).sort(
        (a, b) => a.submittedDate - b.submittedDate
      );
    } else {
      filteredOrders = values(orders).filter(
        product =>
          parseInt(product.submittedDate.split('/')[1], 10) ===
          selectedOption + 1
      );
    }
    return groupBy(filteredOrders, x => x.state);
  }
);
