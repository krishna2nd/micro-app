import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CartScreen } from "../Cart/cart.screen";
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
} from "../Cart/cart.actions";
import { userCart, cartTotals } from "../Cart/cart.selectors";

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

const ConfirmScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartScreen);

export { ConfirmScreen };
