import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { Divider, Image, Header } from "react-native-elements";
import Carousel from "react-native-banner-carousel";
import { WebBrowser, Icon } from "expo";
const DeviceWidth = Dimensions.get("window").width;
const BannerWidth = DeviceWidth;
const BannerHeight = 280;

const images = [
  "https://www.sams.com.mx/images/banner-images/BannerHome/2019/05/bh-dso-generico-190503-430x480.jpg",
  "https://www.sams.com.mx/images/banner-images/BannerHome/2019/05/bh-dso-pantallas-samsung-190503-430x480.jpg",
  "https://www.sams.com.mx/images/banner-images/BannerHome/2019/05/bh-dso-celulares-samsung-190503-430x480.jpg",
  "https://www.sams.com.mx/images/banner-images/BannerHome/2019/05/bh-madres-refrigeradorlavasecadora-1900503-430x480.jpg",
  "https://www.sams.com.mx/images/page-landing-images/dia-de-las-madres/banners/bh-madres-chocolates4x3-190503-430x480.jpg",
  "https://www.sams.com.mx/images/page-landing-images/cops/reckitt/vanish/bh-madres-VANISHBMW-190501-430x480.jpg"
];

const RootDomain = "https://www.sams.com.mx";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  renderBanner(image, index) {
    return (
      <View key={index}>
        <Image
          style={{ width: BannerWidth, height: BannerHeight }}
          source={{ uri: image }}
          resizeMode="stretch"
          resizeMethod="resize"
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        {/* <Header
          placement="left"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Sam's Club", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        /> */}
        <ScrollView
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.bannerContainer}>
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={BannerWidth}
            >
              {images.map((image, index) => this.renderBanner(image, index))}
            </Carousel>
          </View>
          <View
            style={{
              height: 56,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center"
            }}
          >
            {["red", "purple", "gray", "blue", "violet"].map(clr => (
              <Icon.FontAwesome
                key={clr}
                name="dot-circle-o"
                size={36}
                style={{ padding: 10 }}
                color={clr}
              />
            ))}
          </View>
          <Divider style={{ height: 11, backgroundColor: "silver" }} />

          <View>
            <Text style={{ fontSize: 30, fontWeight: "bold", padding: 20 }}>
              Shop by department
            </Text>
            <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                  padding: 20
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(ele => (
                  <View
                    key={ele}
                    style={{
                      height: 100,
                      width: 140,
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderColor: "red",
                      margin: 4
                    }}
                  />
                ))}
              </View>
            </ScrollView>
            <Divider style={{ height: 11, backgroundColor: "silver" }} />
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
              {[1, 2, 3, 4, 5, 6].map(ele => (
                <View
                  key={"item-" + ele}
                  style={{
                    width: DeviceWidth,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignContent: "center"
                  }}
                >
                  <View
                    style={{
                      height: 220,
                      width: DeviceWidth / 2 - 2,
                      borderStyle: "solid",
                      borderWidth: 1,
                      marginTop: 1,
                      marginBottom: 1,
                      borderColor: "red"
                    }}
                  />
                  <View
                    style={{
                      height: 220,
                      width: DeviceWidth / 2 - 2,
                      borderStyle: "solid",
                      borderWidth: 1,
                      marginTop: 1,
                      marginBottom: 1,
                      borderColor: "red"
                    }}
                  />
                </View>
              ))}
            </View>
          </View>

          <Divider style={{ height: 11, backgroundColor: "silver" }} />
          <View>
            <Text style={{ fontSize: 30, fontWeight: "bold", padding: 10 }}>
              Recently viewed
            </Text>
            <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                  padding: 20
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(ele => (
                  <View
                    key={ele}
                    style={{
                      height: 100,
                      width: 140,
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderColor: "red",
                      margin: 4
                    }}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
          <Divider style={{ height: 11, backgroundColor: "silver" }} />

          <View>
            <Text style={{ fontSize: 30, fontWeight: "bold", padding: 10 }}>
              Membership
            </Text>
            <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                  padding: 20
                }}
              >
                {[
                  "/images/banner-images/membresias/plus-card-new.jpg",
                  "/images/banner-images/membresias/benefits-card-new.jpg",
                  "/images/banner-images/membresias/individual-card-new.jpg",
                  "/images/banner-images/membresias/negocio-card-new.jpg"
                ].map(img => (
                  <View
                    key={img}
                    style={{
                      borderRadius: 8,
                      margin: 4
                    }}
                  >
                    <Image
                      style={{ height: 108, width: 184, borderRadius: 8 }}
                      source={{ uri: RootDomain + img }}
                    />
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
          <View />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
