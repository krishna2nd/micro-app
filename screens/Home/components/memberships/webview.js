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
import device from "../../../../constants/Layout";
import { AntDesign } from "react-native-vector-icons";

var images = [
  require("./1.png"),
  require("./2.png"),
  require("./3.png"),
  require("./4.png")
];

export default class MembershipModal extends Component {
  render() {
    console.log("index", this.props.index);
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
              <AntDesign name="close" />
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
                  alignSelf: "center",
                  width: device.width - 100,
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
