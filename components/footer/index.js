import React from "react";
import { withRouter } from "react-router";
import NavigationTabBar from "../tab-bar";
import CartFooter from "../../screens/Cart/cart.footer";
import {
    Footer
  } from "native-base";

const SamsFooter = ({ location, props }) => {
  if (location.pathname === "/myapps") return null;
  if (location.pathname === "/cart" || location.pathname === "/payment") return <CartFooter ></CartFooter>;
  return (
    <Footer style={{
      backgroundColor: "white"
    }} >
      <NavigationTabBar />
    </Footer>
  );
};

export default withRouter(SamsFooter);
