import React from "react";
import { get } from "lodash";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator,
  AppRegistry
} from "react-native";
import { Icon } from "expo";
import { Avatar, Divider, Image, Header } from "react-native-elements";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import {
  setBreakPoints,
  Row,
  Column as Col,
  Grid
} from "react-native-responsive-grid";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import CardView from "./card.view";

setBreakPoints({
  SMALL_Width: 414,
  MEDIUM_Width: 600,
  LARGE_Width: 1024
});

export default class CardColumView extends React.Component {
  render() {
    const { products, host, defaultImage } = this.props;
    const rows = [];
    for (let index = 0; index < products.length - 1; index += 2) {
      rows.push(
        <Row key={index}
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Col size={48} offset={-1}>
            <CardView
              product={products[index]}
              host={host}
              defaultImage={defaultImage}
            />
          </Col>
          <Col size={48} offset={1}>
            <CardView
              product={products[index + 1]}
              host={host}
              defaultImage={defaultImage}
            />
          </Col>
        </Row>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {rows}
      </View>
    );
  }
}

AppRegistry.registerComponent("RRSamsApp", () => CardColumView);
