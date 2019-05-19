import React from "react";
import { withRouter } from "react-router";
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

setBreakPoints({
  SMALL_Width: 414,
  MEDIUM_Width: 600,
  LARGE_Width: 1024
});

const PDPCardView = withRouter(({ product, host, defaultImage, history }) => {
  const {
    DeliveryEligible,
    DeliveryInStock,
    PickupEligible,
    PickupInStock,
    productDepartment,
    productDisplayName,
    productDisplayText,
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
  return (
    <Card
      style={{
        padding: 2
      }}
    >
      <CardItem header>
        <Text>{sku.shortDescription}</Text>
      </CardItem>
      <CardItem
        header
        style={{
          zIndex: 10,
          position: "absolute",
          top: 5
        }}
      >
        <Left>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              flexDirection: "row"
            }}
          >
            <MaterialCommunityIcons
              name="truck-fast"
              style={{
                fontSize: 18,
                marginRight: 2,
                color: DeliveryEligible ? "#80bd01" : "red"
              }}
            />
            <MaterialCommunityIcons
              name="store"
              style={{
                fontSize: 18,
                color: PickupEligible ? "#80bd01" : "red"
              }}
            />
          </View>
        </Left>
      </CardItem>
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
          ></CarousalView>
        </Body>
      </CardItem>
      <CardItem>
        <Body style={{ flex: 1 }}>
          {/* <WebView
                useWebKit={true}
                originWhitelist={["*"]}
                source={{ html: `<p>${longDescription}</p>` }}
              /> */}
          <Text>{longDescription.replace("<br/>", "\n")}</Text>
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
                  fontWeight: "bold",
                  fontSize: 12,
                  color: "#676767",
                  textAlign: "center"
                }}
              >
                {productDisplayText}
              </Text>
            </Col>
          </Row>
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
});

export default PDPCardView;

AppRegistry.registerComponent("RRSamsApp", () => PDPCardView);
