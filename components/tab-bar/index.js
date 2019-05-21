import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import { withRouter } from "react-router";
import { FooterTab, Button } from "native-base";
import TabBarIcon from "./icon";
import { Platform } from "react-native";
import routes from "../../routes";

const NavigationTabBar = ({ location, props }) => {
  return (
    <FooterTab style={styles.nav} >
      {routes.map(ele => (
        <Link key={ele.to} {...ele} underlayColor="#f0f4f7" style={styles.navItem}>
          <TabBarIcon focused={ele.to === location.pathname} name={ele.icon} />
        </Link>
      ))}
    </FooterTab>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  }
});

export default withRouter(NavigationTabBar);
