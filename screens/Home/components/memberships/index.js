import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator,
  TouchableHighlight,
  Image
} from "react-native";
import { Avatar, Divider, Header } from "react-native-elements";
import MembershipModal from "./webview";

class Memberships extends React.Component {
  state = { modal: false, index: 0 };
  showModal(index) {
    this.setState({
      modal: true,
      index
    });
  }
  hideModal = () => {
    this.setState({
      modal: false
    });
  };
  render() {
    return (
      <View>
        <MembershipModal
          visible={this.state.modal}
          onClose={this.hideModal}
          index={this.state.index}
        />
        <Text style={{
          fontFamily: "OpenSans-SemiBold",
          fontSize: 16,
          padding: 10
        }}>
          Membership
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center",
              padding: 10
            }}
          >
            {[
              "/images/banner-images/membresias/plus-card-new.jpg",
              "/images/banner-images/membresias/benefits-card-new.jpg",
              "/images/banner-images/membresias/individual-card-new.jpg",
              "/images/banner-images/membresias/negocio-card-new.jpg"
            ].map((img, index) => (
              <TouchableHighlight
                key={img}
                onPress={() => {
                  this.showModal(index);
                }}
              >
                <View
                  style={{
                    borderRadius: 8,
                    marginLeft: 10
                  }}
                >
                  <Image
                    style={{ height: 108, width: 184, borderRadius: 8 }}
                    source={{ uri: this.props.host + img }}
                  />
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Memberships;
