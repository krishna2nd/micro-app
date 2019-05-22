import React from "react";
import { View, Text, ScrollView } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CartScreen from "../Cart/cart.connect";
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
import device from "../../constants/Layout";
import { userCart, cartTotals } from "../Cart/cart.selectors";
import LottieView from "lottie-react-native";

const ConfirmComponent = props => {
  return (
    <ScrollView style={{ width: device.width }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: device.width,
          height: 100
        }}
      >
        <LottieView
          style={{ flex: 1 }}
          source={require("./confirmation.json")}
          autoPlay
          loop={false}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          color: "green"
        }}
      >
        Your order created successfully !!
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 15,
          color: "#1a75cf"
        }}
      >
        Order No: {Date.now()}
      </Text>
      <CartScreen />
    </ScrollView>
  );
};

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
)(ConfirmComponent);

export { ConfirmScreen };
