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
import Banner from "./components/banner";
import Menu from "./components/menu";
import Departments from "./components/departments";
import Memberships from "./components/memberships";
import Divider from "../../components/divider";
import { CarouselProductImage } from "./components/carousel";
import { CardColumView } from "./components/product";

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
  goToTop = () => {
    this.scroll.scrollTo({x: 0, y: 0, animated: true});
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
          <Card>
            <Banner
              style={styles.bannerContainer}
              width={BannerWidth}
              height={BannerHeight}
              banners={this.props.banners}
            />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Menu categories={this.props.categories} />
            </ScrollView>
          </Card>
          <Divider />
          <Card>
            <Departments
              departments={this.props.departments}
              host={RootDomain}
              defaultImage={defaultImage}
              type="scroll"
            />
          </Card>
          <Divider />
          <Card>
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
               <CardColumView products={this.props.recomendedProducts} host={RootDomain} defaultImage={defaultImage} />
            </View>
          </Card>
          <Divider />
          <Card>
            <Memberships host={RootDomain} />
          </Card>
          <Divider />
          {this.props.carousels.map((carousel, index) => (
            <View key={index}>
              <Card>
                <CarouselProductImage
                  products={carousel.contents}
                  defaultImage={defaultImage}
                  host={RootDomain}
                />
              </Card>
              <Divider />
            </View>
          ))}
          <View>
           <Button  title='Go To Top' onPress={this.goToTop} />
           </View>
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

// {/* <Text> Recently </Text>
//               {[1, 2, 3, 4, 5, 6].map(ele => (
//                 <View
//                   key={"item-" + ele}
//                   style={{
//                     width: DeviceWidth,
//                     display: "flex",
//                     flexDirection: "row",
//                     justifyContent: "space-around",
//                     alignContent: "center"
//                   }}
//                 >
//                   <View
//                     style={{
//                       height: 220,
//                       width: DeviceWidth / 2 - 2,
//                       borderStyle: "solid",
//                       borderWidth: 1,
//                       marginTop: 1,
//                       marginBottom: 1,
//                       borderColor: "red"
//                     }}
//                   />
//                   <View
//                     style={{
//                       height: 220,
//                       width: DeviceWidth / 2 - 2,
//                       borderStyle: "solid",
//                       borderWidth: 1,
//                       marginTop: 1,
//                       marginBottom: 1,
//                       borderColor: "red"
//                     }}
//                   />
//                 </View>
//               ))} */}