import React from "react";
import { withRouter } from "react-router";
import NavigationTabBar from "../tab-bar";
import CartFooter from "../../screens/Cart/cart.footer";
import {
    Footer
  } from "native-base";

const SamsFooter = ({ location, props }) => {
  console.log(location);
  if (location.pathname === "/myapps") return null;
  if (location.pathname === "/cart") return <CartFooter ></CartFooter>;
  return (
    <Footer>
      <NavigationTabBar />
    </Footer>
  );
};

export default withRouter(SamsFooter);
