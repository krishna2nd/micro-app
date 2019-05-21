import React from "react";
import { Animated, Easing, View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Divider } from "react-native-elements";
import device from "../../constants/Layout";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import Price from "../components/product/card/price";
import {
  Card,
  Icon,
  CardItem,
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge
} from "native-base";

export class CartScreen extends React.Component {
  render() {
    const { list, subTotal, total, discount, totalCount } = this.props;
    return (
      <View
        style={{
          flex: 1,
          width: device.width,
          height: device.height
        }}
      >
        <Container>
          <Content>
            <List>
              {list.map(item => (
                <ListItem key={item.id} thumbnail>
                  <Left>
                    <Thumbnail square source={{ uri: item.image }} />
                  </Left>
                  <Body>
                    <Text>{item.title}</Text>
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
                          color: item.delivery ? "#80bd01" : "red"
                        }}
                      />
                      <MaterialCommunityIcons
                        name="store"
                        style={{
                          fontSize: 18,
                          color: item.pickup ? "#80bd01" : "red"
                        }}
                      />
                    </View>
                  </Body>
                  <Right>
                    <Badge info>
                      <Text>{item.count}</Text>
                    </Badge>
                    <Price price={item.price * item.count} bold={true} primary={true} />
                  </Right>
                </ListItem>
              ))}
            </List>
            <Divider
              style={{
                height: 1,
                backgroundColor: "#BEBEBE"
              }}
            />

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                paddingTop: 10
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    paddingLeft: 10
                  }}
                >
                  <Icon
                    name="calculator"
                    style={{
                      fontSize: 40,
                      color: "#ABABAB"
                    }}
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    fontSize: 20,
                    fontWeight: "bold",
                    flex: 1
                  }}
                >
                  <Text>Total items</Text>
                  <Text>{totalCount}</Text>
                </View>
              </View>

              <View style={{ flex: 1, marginRight: 15 }}>
                <View style={styles.row}>
                  <Text style={{flex: 1}} >Sub total</Text>
                  <View style={{ alignSelf: "flex-start" }}>
                    <Price price={subTotal} bold={true} primary={true} />
                  </View>
                </View>
                <View style={styles.row}>
                  <Text style={{flex: 1}} >Discount</Text>
                  <View style={{ alignSelf: "flex-start" }}>
                    <Price price={discount} bold={true} primary={true} />
                  </View>
                </View>
                <View
                  style={{
                    ...styles.row,
                    borderTopColor: "#DEDEDE",
                    borderTopWidth: 0.5,
                    paddingTop: 5,
                    marginTop: 5
                  }}
                >
                  <Text style={{ flex: 1, fontWeight: "bold" }}>Total</Text>
                  <View style={{ alignSelf: "flex-start" }}>
                    <Price price={total} bold={true} primary={true} />
                  </View>
                </View>
              </View>
            </View>
          </Content>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "flex-start"
  }
});
