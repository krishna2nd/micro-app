import React, { Component } from "react";
import {
  Modal,
  WebView,
  Text,
  TouchableHighlight,
  View,
  Image,
  Alert
} from "react-native";
//import Swiper from 'react-native-swiper';
import device from "../../../constants/Layout";
import { AntDesign } from "react-native-vector-icons";

var images = [
  require("./1.png"),
  require("./2.png"),
  require("./3.png"),
  require("./4.png")
];

export default class MembershipModal extends Component {
  render() {
    return (
      <View style={{ marginTop: 5 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.visible}
          onRequestClose={() => {}}
        >
          <View style={{ marginTop: 22 }}>
            <TouchableHighlight
              onPress={() => {
                this.props.onClose();
              }}
            >
              <AntDesign
                name="close"
                style={{
                  fontSize: 20,
                  marginLeft: 5,
                  fontWeight: "bold"
                }}
              />
            </TouchableHighlight>
            <View
              style={{
                width: device.width - 50,
                height: device.height - 100,
                marginLeft: 10
              }}
            >
              <Image
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  width: device.width - 50,
                  height: device.height - 100
                }}
                source={images[this.props.index]}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
