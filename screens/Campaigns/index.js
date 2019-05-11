import React from "react";
import { Animated, Easing, View, ScrollView } from "react-native";
import { withRouter } from "react-router";
import LottieView from "lottie-react-native";
import device from "../../constants/Layout";

const lottieMap = {
  gift: [() => ({ bg: "white", source: require("./animations/gift.json") })],
  buenfin: [
    () => ({ bg: "green", source: require("./animations/buenfin.json") })
  ],
  hotsale: [() => ({ bg: "white", source: require("./animations/gift.json") })],
  xmas: [() => ({ bg: "black", source: require("./animations/xmas.json") })],
  gifts: [() => ({ bg: "white", source: require("./animations/gift.json") })],
  dod: [
    () => ({ bg: "#3f3f3f", source: require("./animations/dod1.json") }),
    () => ({ bg: "#3F3F3F", source: require("./animations/dod2.json") }),
    () => ({ bg: "#3F3F3F", source: require("./animations/dod3.json") })
  ]
};

class Campaigns extends React.Component {
  render() {
    const {
      match: {
        params: { name: Campaign }
      }
    } = this.props;
    console.log(Campaign);
    const lotties = lottieMap[Campaign];
    return (
      <ScrollView style={{ width: device.width, }}>
        {lotties.map((lottie, index) => {
          const asset = lottie();
          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                width: device.width,
                height: lotties.length > 1 ? device.height / 3 : device.height,
                backgroundColor: asset.bg
              }}
              key={index}
            >
              <LottieView style={{ flex: 1 }} source={asset.source} autoPlay />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export default withRouter(Campaigns);
