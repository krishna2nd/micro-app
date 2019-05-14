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
import { Avatar, Image, Header } from "react-native-elements";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { WebBrowser, Icon } from "expo";
import { get } from "lodash";
import Departments from "../Home/components/departments";

import Divider from "../../components/divider";

const defaultImage = "/images/logo-fixed-2.png";

const DeviceWidth = Dimensions.get("window").width;
const BannerWidth = DeviceWidth;
const BannerHeight = 320;

const RootDomain = "https://www.sams.com.mx";

export class CategoriesScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    //this.props.fetchHomeLayout(this.props.url);
  }
  goToTop = () => {
    this.scroll.scrollTo({x: 0, y: 0, animated: true});
 }
  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Departments
              departments={this.props.departments}
              host={RootDomain}
              defaultImage={defaultImage}
              type="two-column"
            />
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
