import React from "react";
import { get } from "lodash";
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator,
  AppRegistry
} from "react-native";
import { Avatar } from "react-native-elements";
import { Button, Icon, Text } from "native-base";
import { Card, Title, Paragraph } from "react-native-paper";
import {
  setBreakPoints,
  Row,
  Column as Col,
  Grid
} from "react-native-responsive-grid";
import { FontAwesome5 } from "react-native-vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

setBreakPoints({
  SMALL_Width: 414,
  MEDIUM_Width: 600,
  LARGE_Width: 1024
});

const CardView = ({
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
  defaultImage
}) => {
  return (
    <Card
      title={productDisplayName}
      key={productDisplayText}
      style={{ padding: 20 }}
    >
      <Row>
        <Col>
          {/* <FontAwesome5 name="store" ></FontAwesome5> */}
        </Col>
        <Col offset={10}>
        {/* <FontAwesome5 name="truck" ></FontAwesome5> */}
        </Col>
      </Row>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Avatar
          size="xlarge"
          source={{
            uri: productSmallImageUrl || host + defaultImage
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <Row
        style={{
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: "#d6d7da"
        }}
      >
        <Col>
          <Price price={skuFinalPrice} bold={true} primary={true} />
        </Col>
        <Col offset={10}>
          <Price price={skuLastPrice} strike={true} secondary />
        </Col>
      </Row>
      <Row
        style={{
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: "#d6d7da"
        }}
      >
        <Col>
          <Text
            style={{
              fontWeight: "bold",
              color: "#454545",
              textAlign: "center"
            }}
          >
            {productDisplayName}
          </Text>
        </Col>
      </Row>
      <Row
        style={{
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: "#d6d7da"
        }}
      >
        <Col>
          <Button
            style={{
              flex: 1,
              alignSelf: "center"
            }}
          >
            <Icon name="cart" iconRight />
            <Text>Add</Text>
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

const Price = ({
  price,
  strike = false,
  bold = false,
  primary = false,
  secondary = false
}) => {
  const txtPrice = String(Number(price).toFixed(2));
  const parts = txtPrice.split(".");
  const style = strike
    ? {
        textDecorationLine: "line-through",
        textDecorationStyle: "solid"
      }
    : {};

  if (bold) style.fontWeight = "bold";
  if (primary) style.color = "green";
  if (secondary) style.color = "grey";

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <Text style={style}>{parts[0]}</Text>
      <Text
        style={{
          ...style,
          lineHeight: 15,
          fontSize: 10
        }}
      >
        {parts[1]}
      </Text>
    </View>
  );
};

export default CardView;

AppRegistry.registerComponent("RRSamsApp", () => CardView);

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
