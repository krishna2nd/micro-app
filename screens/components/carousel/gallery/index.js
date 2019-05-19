import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { AppRegistry, View } from "react-native";
import device from "../../../../constants/Layout";

const RootDomain = "https://www.sams.com.mx";

export default class Gallery extends React.Component {
  _renderItem({ item, index }, parallaxProps) {
    return (
      <View styles={{ flex: 1, width: device.width, height: 400 }}>
        <ParallaxImage
          source={{ uri: RootDomain + item.media.url }}
          containerStyle={{ width: device.width, height: 400 }}
          style={{ width: device.width - 50, height: 400 }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  }

  render() {
    return (
      <Carousel
        data={this.props.entries}
        renderItem={this._renderItem}
        hasParallaxImages={true}
        sliderWidth={this.props.sliderWidth}
        itemWidth={this.props.itemWidth}
        windowSize={1}
      />
    );
  }
}
AppRegistry.registerComponent("RRSamsApp", () => Gallery);
