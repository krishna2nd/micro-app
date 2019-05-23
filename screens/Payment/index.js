import React from "react";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StyleSheet, AppRegistry, Image, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { CreateOrder } from "../Confirm/confirmation.actions";
import device from "../../constants/Layout";
import { userCart, cartTotals } from "../Cart/cart.selectors";

const PaymentComponent = withRouter(() => (
  <ScrollView horizontal={false}>
    <Container>
      <Content>
        <Card>
          <CardItem
            cardBody
          >
            <Image
              source={require("../../assets/payment.png")}
              style={{
                alignContent: "stretch",
                height: device.height,
                width: null,
                flex: 1
              }}
            />
          </CardItem>
        </Card>
      </Content>
    </Container>
  </ScrollView>
));

const mapStateToProps = state => ({
  list: userCart(state),
  ...cartTotals(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  CreateOrder
}, dispatch);

const PaymentScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentComponent);

export { PaymentScreen };
