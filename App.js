import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, history, persistor } from "./state";

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

import { AppLoading, Font, Asset, Icon } from "expo";
import { PersistGate } from "redux-persist/integration/react";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/logo.png"),
        require("./assets/splash.png")
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
AppRegistry.registerComponent("MyApp", () => App);
