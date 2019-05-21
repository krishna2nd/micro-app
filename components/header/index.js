import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  IonicIcons,
  Title,
  Item,
  Input,
  Text,
  Badge,
  Card,
  CardItem
} from "native-base";
import { Image, StyleSheet, View } from "react-native";
import { Platform } from "expo-core";
import { withRouter } from "react-router";
import { Link } from "react-router-native";
import { SearchBar } from "react-native-elements";
import { cartTotals } from "../../screens/Cart/cart.selectors";

const iOS = Platform.OS === "ios";
const CartHeader = () => (
  <Header style={styles.header}>
    <Left>
      <Button transparent>
        <Link to="/">
          <Icon name="home" style={styles.icon} />
        </Link>
      </Button>
    </Left>
    <Body>
      <Title style={{ color: "#898989" }}>Checkout</Title>
    </Body>
  </Header>
);
class SamsHeader extends Component {
  render() {
    const { location, totalCount = 0 } = this.props;
    if (location.pathname === "/cart") return <CartHeader />;
    return (
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon name="menu" style={styles.icon} />
          </Button>
        </Left>
        <Body>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center"
            }}
          >
            <Image
              source={require("../../assets/sams-logo.png")}
              style={{ width: 120, alignSelf: "stretch" }}
            />
          </View>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" style={styles.icon} />
          </Button>
          <Button transparent>
            <Link to="/cart">
              <View>
                <Badge success style={styles.badge}>
                  <Text style={{ color: "white" }}>{totalCount}</Text>
                </Badge>
                <Icon name="cart" style={{ ...styles.icon }} />
              </View>
            </Link>
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white"
  },
  icon: {
    color: "#0463ac",
    fontSize: 35
  },
  badge: {
    position: "absolute",
    marginTop: -10,
    right: -10,
    zIndex: 1,
    padding: 0,
    color: "white",
    backgroundColor: "green"
  }
});

const mapStateToProps = state => ({
  ...cartTotals(state)
});

export default connect(
  mapStateToProps,
  null
)(withRouter(SamsHeader));
