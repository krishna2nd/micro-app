import React from "react";
import { withRouter } from "react-router";
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
import device from "../../constants/Layout";

const PaymentScreen = withRouter(() => (
  <ScrollView horizontal={false}>
    <Container>
      <Content>
        <Card>
          <CardItem
            cardBody
            onPress={() => {
              this.props.history.push("/confirm");
            }}
          >
            <Image
              source={require("../../assets/payment.png")}
              style={{
                alignContent: "stretch",
                height: device.height,
                width: null,
                flex: 1
              }}
              onPress={() => {
                this.props.history.push("/confirm");
              }}
            />
          </CardItem>
        </Card>
      </Content>
    </Container>
  </ScrollView>
));

export { PaymentScreen };
