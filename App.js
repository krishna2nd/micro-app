import React from "react";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import  { store, history } from './state';

import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import MyApps from "./screens/MyApps";
import { HomeScreen } from "./screens/Home";
import Profile from "./screens/Profile";
import Cart from "./screens/Cart";
import Notification from "./screens/Notification";
import Campaigns from "./screens/Campaigns";

import Categories from "./screens/Categories";
import SamsHeader from "./components/header";
import SamsFooter from "./components/footer";

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
      <Provider store={store}>
        <ConnectedRouter history={history} />
        <NativeRouter>
          <Container>
            <SamsHeader />
            <Content>
              <Route exact path="/" component={HomeScreen} />
              <Route path="/categories" component={Categories} />
              <Route path="/myapps" component={MyApps} />
              <Route path="/notification" component={Notification} />
              <Route path="/profile" component={Profile} />
              <Route path="/cart" component={Cart} />
              <Route path="/campaigns/:name" component={Campaigns} />
            </Content>
            <SamsFooter />
          </Container>
        </NativeRouter>
      </Provider>
    );
  }
}
AppRegistry.registerComponent("MyApp", () => App);
