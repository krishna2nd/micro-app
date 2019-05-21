import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, history, persistor } from "./state";

import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import MyApps from "./screens/MyApps";
import { HomeScreen } from "./screens/Home";
import { CategoriesScreen } from "./screens/Categories";
import {CartScreen} from "./screens/Cart";

import Profile from "./screens/Profile";

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
import { PDPScreen } from "./screens/PDP";

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
                <Route path="/categories" component={CategoriesScreen} />
                <Route path="/myapps" component={MyApps} />
                <Route path="/notification" component={Notification} />
                <Route path="/profile" component={Profile} />
                <Route path="/cart" component={CartScreen} />
                <Route path="/campaigns/:name" component={Campaigns} />
                <Route path="/pdp/:skuId" component={PDPScreen} />
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
        "OpenSans-Bold": require("./assets/Open_Sans/OpenSans-Bold.ttf"),
        "OpenSans-BoldItalic": require("./assets/Open_Sans/OpenSans-BoldItalic.ttf"),
        "OpenSans-ExtraBold": require("./assets/Open_Sans/OpenSans-ExtraBold.ttf"),
        "OpenSans-ExtraBoldItalic": require("./assets/Open_Sans/OpenSans-ExtraBoldItalic.ttf"),
        "OpenSans-Italic": require("./assets/Open_Sans/OpenSans-Italic.ttf"),
        "OpenSans-Light": require("./assets/Open_Sans/OpenSans-Light.ttf"),
        "OpenSans-LightItalic": require("./assets/Open_Sans/OpenSans-LightItalic.ttf"),
        "OpenSans-Regular": require("./assets/Open_Sans/OpenSans-Regular.ttf"),
        "OpenSans-SemiBold": require("./assets/Open_Sans/OpenSans-SemiBold.ttf"),
        "OpenSans-SemiBoldItalic": require("./assets/Open_Sans/OpenSans-SemiBoldItalic.ttf"),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
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
