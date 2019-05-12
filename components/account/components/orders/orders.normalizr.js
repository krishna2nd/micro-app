import get from 'lodash/get';
import {
  FULFILLMENT_TYPES,
  DELIVERY,
  ORDER_GROUPS_MAP
} from './orders.constants';
import { getFormattedPrice } from 'src/components/product/product.util';

export const normalizeOrdersResponse = ({ orderMap = [] }) =>
  orderMap.map(order => ({
    id: get(order, 'id', ''),
    images: get(order, 'productImages', ''),
    state: ORDER_GROUPS_MAP[get(order, 'state')],
    submittedDate: get(order, 'submittedDate.formattedDate', ''),
    total: getFormattedPrice(get(order, 'priceInfo.total', 0)),
    type: FULFILLMENT_TYPES[get(order, 'shippingGroup', DELIVERY)]
  }));
