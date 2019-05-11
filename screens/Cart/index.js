import React from "react";
import { Animated, Easing, View } from "react-native";
import LottieView from "lottie-react-native";
import device from "../../constants/Layout";

export default class BasicExample extends React.Component {
  render() {
    return (
      <View style={{ width: device.width, height: device.height}}>
        {/* <LottieView
          style={{ flex: 1 }}
          source={require("./js/animations/Watermelon.json")}
          autoPlay
        />
        <LottieView
          style={{ flex: 1 }}
          source={require("./js/animations/LottieWalkthrough.json")}
          autoPlay
        />
        <LottieView
          style={{ flex: 1 }}
          source={require("./js/animations/MotionCorpse-Jrcanest.json")}
          autoPlay
        /> */}
        <LottieView
          style={{ flex: 1 }}
          source={require("./js/animations/MotionCorpse-Jrcanest.json")}
          autoPlay
        />
      </View>
    );
  }
}
