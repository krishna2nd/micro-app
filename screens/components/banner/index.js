import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";
import Carousel from "react-native-banner-carousel";

const renderBanner = (image, index, width, height) => {
  return (
    <View key={index}>
      <Image
        style={{ width, height }}
        source={{ uri: image }}
        resizeMode="stretch"
        resizeMethod="resize"
      />
    </View>
  );
};

const Banner = ({ banners, style, width, height }) => (
  <View style={style}>
    <Carousel autoplay autoplayTimeout={3000} loop index={0} pageSize={width}>
      {banners.map((image, index) => renderBanner(image, index, width, height))}
    </Carousel>
  </View>
);

export default Banner;
