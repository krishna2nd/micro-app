import React from "react";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { get } from "lodash";
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator,
  AppRegistry,
  Image,
  WebView
} from "react-native";
import { Avatar } from "react-native-elements";
import {
  Button,
  Text,
  Card,
  CardItem,
  Body,
  Right,
  Left,
  Icon
} from "native-base";
import { Title, Paragraph } from "react-native-paper";
import {
  setBreakPoints,
  Row,
  Column as Col,
  Grid
} from "react-native-responsive-grid";
import Carousel from "react-native-snap-carousel";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import Price from "./price";
import TouchableScale from "react-native-touchable-scale";
import device from "../../../../constants/Layout";
import Gallery from "../../../components/carousel/gallery";
import CarousalView from "../../../components/carousel/gallery/sliderentry";
import { addToCart } from "../../../Cart/cart.actions";

setBreakPoints({
  SMALL_Width: 414,
  MEDIUM_Width: 600,
  LARGE_Width: 1024
});

const PDPCardView = withRouter(
  ({ product, host, defaultImage, history, addToCart: actionAddToCart }) => {
    const {
      DeliveryEligible,
      DeliveryInStock,
      PickupEligible,
      PickupInStock,
      productDepartment,
      productDisplayName,
      productSmallImageUrl,
      productRepositoryId,
      skuFinalPrice,
      skuLastPrice,
      skuRepositoryId,
      skuUnitOfMeasure,
      skuWeighable,

      specialPrice,
      basePrice,
      isPriceStrike,
      breadcrumb,
      skuType,
      status,
      skuStatus,
      comparisonData,
      categoryDisplay,
      department,
      auxiliaryMedia,
      skuId,
      sku = {},
      freeShipping,
      seoURL,
      paymentPlans,
      maxQuantity,
      skuToDisplay,
      longDescription = ""
    } = product;

    if (!product) return <ActivityIndicator size="large" color="#0000ff" />;

    const prodMedia = sku.auxiliaryMedia || [];
    const productDisplayText = `${sku.brand || ""} ${sku.displayName ||
      ""} ${sku.shopTicketDesc || ""}`;
    return (
      <Card
        style={{
          padding: 2
        }}
      >
        <CardItem>
          <Body>
            {/* <Gallery
            entries={prodMedia}
            sliderWidth={device.width}
            itemWidth={device.width - 20}
          /> */}
            <CarousalView
              entries={prodMedia}
              sliderWidth={device.width}
              itemWidth={device.width - 20}
            />
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Row
              style={{
                alignItems: "center",
                borderColor: "#d6d7da"
              }}
            >
              <Col>
                <Text
                  numberOfLines={2}
                  style={{
                    margin: 5,
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "#676767",
                    textAlign: "center"
                  }}
                >
                  {productDisplayText}
                </Text>
              </Col>
            </Row>
          </Body>
        </CardItem>
        <CardItem>
          <Body
            style={{
              padding: 2
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row"
              }}
            >
              <MaterialCommunityIcons
                name="truck-fast"
                style={{
                  fontSize: 22,
                  marginRight: 20,
                  color: DeliveryEligible ? "#80bd01" : "red"
                }}
              />
              <MaterialCommunityIcons
                name="store"
                style={{
                  fontSize: 22,
                  color: PickupEligible ? "#80bd01" : "red"
                }}
              />
            </View>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <ScrollView>
                <WebView
                  automaticallyAdjustContentInsets={false}
                  style={{
                    flex: 1,
                    height: 320,
                    width: device.width
                  }}
                  useWebKit={true}
                  originWhitelist={["*"]}
                  source={{ html: `<p>${longDescription}</p>` }}
                />
              </ScrollView>
            </View>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Row>
              <View
                style={{
                  flex: 1,
                  justifyContent: "space-around",
                  alignContent: "center",
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <Price price={specialPrice} bold={true} primary={true} />
                {isPriceStrike && (
                  <Price price={basePrice} strike={true} secondary />
                )}
              </View>
            </Row>
          </Body>
        </CardItem>
        <CardItem
          style={{
            padding: 2,
            margin: 0
          }}
        >
          <Body
            style={{
              padding: 2,
              margin: 0
            }}
          >
            <Right>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  flexDirection: "row"
                }}
              >
                <Button
                  style={{
                    padding: 2,
                    backgroundColor: "#0077c5",
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center"
                  }}
                  onPress={() => {
                    actionAddToCart({
                      title: productDisplayText,
                      image: sku.thumbnailImageUrl,
                      id: skuId,
                      delivery: DeliveryEligible,
                      pickup: PickupEligible,
                      price: specialPrice,
                      skuLastPrice: basePrice
                    });
                  }}
                >
                  <FontAwesome
                    name="cart-plus"
                    style={{
                      color: "white",
                      fontSize: 30,
                      fontWeight: "bold"
                    }}
                  />
                </Button>
              </View>
            </Right>
          </Body>
        </CardItem>
      </Card>
    );
  }
);

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators({ addToCart }, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PDPCardView);

AppRegistry.registerComponent("RRSamsApp", () => PDPCardView);
