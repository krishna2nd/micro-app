import React from "react";
import { withRouter } from "react-router";
import NavigationTabBar from "../tab-bar";
import {
    Footer
  } from "native-base";

const SamsFooter = ({ location, props }) => {
  console.log(location);
  if (location.pathname === "/myapps") return null;

  return (
    <Footer>
      <NavigationTabBar />
    </Footer>
  );
};

export default withRouter(SamsFooter);
