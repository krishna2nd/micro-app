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
import Banner from "../components/banner";
import Menu from "../components/menu";
import Departments from "../components/departments";
import Memberships from "../components/memberships";
import Divider from "../../components/divider";
import { CarouselProductImage } from "../components/carousel";
import PDPCardView from "../components/product/card/pdp.card.view";

const defaultImage = "/images/logo-fixed-2.png";

const DeviceWidth = Dimensions.get("window").width;
const BannerWidth = DeviceWidth;
const BannerHeight = 260;

const RootDomain = "https://www.sams.com.mx";

export class PDPScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.fetchSkuDetails(this.props.match.params.skuId);
  }
  goToTop = () => {
    this.scroll.scrollTo({ x: 0, y: 0, animated: true });
  };
  render() {
    //console.log(this.props.product);
    const { product } = this.props;
    return (
      <View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {!product ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <PDPCardView
              product={product}
              host={RootDomain}
              defaultImage={defaultImage}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 5,
    justifyContent: "center"
  }
});
