import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CartScreen } from "./cart.screen";
import {
  fetchCartList,
  fetchCartRequest,
  fetchCartSuccess,
  fetchCartFailure,
  addCartRequest,
  addCartSuccess,
  addCartFailure,
  removeCartRequest,
  removeCartSuccess,
  removeCartFailure,
  updateCartRequest,
  updateCartSuccess,
  updateCartFailure
} from "./cart.actions";
import { userCart, cartTotals } from "./cart.selectors";

const mapStateToProps = state => ({
  list: userCart(state),
  ...cartTotals(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCartList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartScreen);
