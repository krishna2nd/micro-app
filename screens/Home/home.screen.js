import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Avatar, Divider, Image, Header } from "react-native-elements";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { WebBrowser, Icon } from "expo";
import { get } from "lodash";
import Banner from "./components/banner";
import Menu from "./components/menu";
import Departments from "./components/departments";
import Memberships from "./components/memberships";

const defaultImage = "/images/logo-fixed-2.png";

const DeviceWidth = Dimensions.get("window").width;
const BannerWidth = DeviceWidth;
const BannerHeight = 320;

const RootDomain = "https://www.sams.com.mx";

export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.fetchHomeLayout(this.props.url);
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
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Banner
            style={styles.bannerContainer}
            width={BannerWidth}
            height={BannerHeight}
            banners={this.props.banners}
          />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Menu categories={this.props.categories} />
          </ScrollView>
          <Divider style={{ height: 11, backgroundColor: "silver" }} />

          <Departments departments={this.props.departments} host={RootDomain} defaultImage={defaultImage} />
          <Divider style={{ height: 11, backgroundColor: "silver" }} />
          <View style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Text> Recently </Text>
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

          <Divider style={{ height: 11, backgroundColor: "silver" }} />
          <View>
            <Text style={{ fontSize: 30, fontWeight: "bold", padding: 10 }}>
              Recently viewed
            </Text>
            <ScrollView
              horizontal={true}
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

         <Memberships host={RootDomain} ></Memberships>
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
