import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Avatar, Divider, Image, Header } from "react-native-elements";

const Memberships = ({ host }) => (
  <View>
    <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
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
        ].map(img => (
          <View
            key={img}
            style={{
              borderRadius: 8,
              marginLeft: 10
            }}
          >
            <Image
              style={{ height: 108, width: 184, borderRadius: 8 }}
              source={{ uri: host + img }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  </View>
);

export default Memberships;
