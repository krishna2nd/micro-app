import { connect } from 'react-redux';
import { getOrdersFiltered, getSelectedOrderValue } from './orders.selectors';
import { getOrders } from './orders.actions';
import Orders from './orders';

const mapStateToProps = state => ({
  orders: getOrdersFiltered(state),
  sortSelected: getSelectedOrderValue(state)
});
const mapDispatchToProps = dispatch => ({
  onGetOrders: () => dispatch(getOrders())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
