import React, { Component } from "react";
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
  Text
} from "native-base";
import { Platform } from "expo-core";
import { SearchBar } from "react-native-elements";

const iOS = Platform.OS === "ios";

export default class SamsHeader extends Component {
  render() {
    return (

        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="cart" />
            </Button>
          </Right>
        </Header>
    );
  }
}

// {/* <SearchBar
//           placeholder="Type Here..."
//           onChangeText={() => {}}
//           value={""}
//           platform="default"
//           lightTheme={true}
//         /> */}