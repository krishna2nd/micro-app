import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import MyApps from "./screens/MyApps";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Cart from "./screens/Cart";
import Notification from "./screens/Notification";
import Campaigns from "./screens/Campaigns";

import Categories from "./screens/Categories";
import SamsHeader from './components/header';
import SamsFooter from './components/footer';

import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button
} from "native-base";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Container>
          <SamsHeader></SamsHeader>
           <Content>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/myapps" component={MyApps} />
            <Route path="/notification" component={Notification} />
            <Route path="/profile" component={Profile} />
            <Route path="/cart" component={Cart} />
            <Route path="/campaigns/:name" component={Campaigns} />
          </Content>
          <SamsFooter ></SamsFooter>
        </Container>
      </NativeRouter>
    );
  }
}
AppRegistry.registerComponent("MyApp", () => App);
