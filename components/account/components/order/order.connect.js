import { connect } from 'react-redux';
import get from 'lodash/get';

import { PAYMENT_TYPE } from './order.constants';
import { getOrder } from './order.actions';
import { addProductsToCart } from 'src/components/cart/cart.actions';

import {
  pickup,
  delivery,
  fullName,
  slotDateAndTime,
  paymentMethod,
  submittedDate,
  priceDetails,
  cartProducts,
  storeName
} from './order.selectors';

import Order from './order';

const mapStateToProps = (state, ownProps) => ({
  orderId: get(ownProps, 'match.params.id'),
  delivery: delivery(state),
  fullName: fullName(state),
  slotDateAndTime: slotDateAndTime(state),
  paymentMethod: PAYMENT_TYPE[paymentMethod(state)],
  submittedDate: submittedDate(state),
  priceDetails: priceDetails(state),
  products: cartProducts(state),
  storeName: storeName(state),
  pickup: pickup(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetOrder: () => {
    const orderId = get(ownProps, 'match.params.id');
    return dispatch(getOrder({ orderId }));
  },
  onAddProductsToCart: products => dispatch(addProductsToCart(products))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
