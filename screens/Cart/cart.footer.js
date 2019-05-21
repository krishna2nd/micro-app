import React from "react";
import { connect } from "react-redux";
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
    const { list, subTotal } = this.props;
    return (
      <Footer>
        <FooterTab
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            flexDirection: "row",
            padding: 5,
            paddingHorizontal: 30
          }}
        >
          <Button
            badge
            vertical
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              flexDirection: "row",
              padding: 15,
              backgroundColor: "#80bd01"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "white",
                marginRight: 4
              }}
            >
              Proceed to payment
            </Text>
            <Price
              price={subTotal}
              primary={true}
              bold={true}
              style={{
                fontSize: 16,
                color: "white"
              }}
            />
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
)(CartFooterScreen);

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
