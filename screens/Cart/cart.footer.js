import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Animated, Easing, View } from "react-native";
import LottieView from "lottie-react-native";
import device from "../../constants/Layout";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import Price from "../components/product/card/price";
import {
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
  FooterTab,
  Button,
  Badge,
  Icon,
  Footer
} from "native-base";
import { Card, Title, Paragraph } from "react-native-paper";
import { userCart, cartTotals } from "./cart.selectors";

export class CartFooterScreen extends React.Component {
  render() {
    const { list, subTotal, total , location} = this.props;
    return (
      <Footer>
        <FooterTab
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            flexDirection: "row",
            paddingHorizontal: 30
          }}
        >
          <Button
            onPress={() => {
              if (location.pathname === '/payment') {
                this.props.history.push("/confirm");
              }
              else this.props.history.push("/payment");
            }}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              flexDirection: "column",
              backgroundColor: "#80bd01",
              padding: 15
            }}
          >
            <Price
              price={total}
              primary={true}
              bold={true}
              style={{
                color: "white"
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: "white",
                marginRight: 4
              }}
            >
              Proceed to payment
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
const mapStateToProps = state => ({
  list: userCart(state),
  ...cartTotals(state)
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CartFooterScreen));

// <Card
//         style={{
//           width: device.width,
//           borderColor: "red",
//           borderWidth: 0.5,
//           backgroundColor: "#80bd01",
//           color: "white",
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           height: 60
//         }}
//       >

//         <Text style={{
//           width: device.width,
//           color: "white",
//           flex: 1
//         }}>Pay the amount</Text>
//         <Price
//           price={total}
//           primary={true}
//           bold={true}
//           style={{
//             color: "white"
//           }}
//         />
//       </Card>
