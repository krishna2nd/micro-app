import React from "react";
import { withRouter } from 'react-router';
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
  Image
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
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import Price from "./price";
import TouchableScale from "react-native-touchable-scale";

setBreakPoints({
  SMALL_Width: 414,
  MEDIUM_Width: 600,
  LARGE_Width: 1024
});

const ProductCardView = withRouter(({
  product: {
    deliveryEligible,
    deliveryInStock,
    pickupEligible,
    pickupInStock,
    productDepartment,
    productDisplayName,
    productDisplayText,
    productSmallImageUrl,
    productRepositoryId,
    skuFinalPrice,
    skuLastPrice,
    skuRepositoryId,
    skuUnitOfMeasure,
    skuWeighable
  },
  host,
  defaultImage,
  history
}) => {
  return (
    <TouchableScale friction={90} tension={100} activeScale={0.92}
      onPress={()=>{
        let skuId = productRepositoryId;
        if (skuId[0] === '0') {
          skuId = skuId.substring(1)
        }
        history.push(`/pdp/${skuId}`);
      }}
    >
      <Card
        style={{
          padding: 2,
        }}
      >
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
                  color: deliveryEligible ? "#80bd01" : "red"
                }}
              />
              <MaterialCommunityIcons
                name="store"
                style={{
                  fontSize: 18,
                  color: pickupEligible ? "#80bd01" : "red"
                }}
              />
            </View>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{ uri: productSmallImageUrl || host + defaultImage }}
              PlaceholderContent={<ActivityIndicator />}
              style={{ height: 100, width: 100, flex: 1, alignSelf: "center" }}
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
                <Price price={skuFinalPrice} bold={true} primary={true} />
                <Price price={skuLastPrice} strike={true} secondary />
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
    </TouchableScale>
  );
});

export default ProductCardView;

AppRegistry.registerComponent("RRSamsApp", () => ProductCardView);

/*availableStores:
Array[145]

deliveryEligible:
true

deliveryInStock:
true

pickupEligible:
true

pickupInStock:
true
productDepartment:
Array[8]
productDisplayName:
"Consola"
productDisplayText:
"Consola PS4 1TB más FIFA 19"
productFamily:
Array[4]
productFineline:
Array[2]
productRepositoryId:
"0980009499"
productSeoURL:
"[/playstation/consola-ps4-1tb-mas-fifa-19/980009499]"
productSmallImageUrl:
"https://www.sams.com.mx/images/product-images/img_small/980009499s.jpg"
recordId:
"sku-980009499..0980009499.catalog20001.es__MX"
recordTypeRaw:
Array[2]
skuDisplayName:
"Consola PS4 1TB más FIFA 19"
skuFinalPrice:
"7999.000000"
skuLastPrice:
"7999.000000"
skuRepositoryId:
"980009499"
skuUnitOfMeasure:
"eaches"
skuWeighable:
"0"
*/
