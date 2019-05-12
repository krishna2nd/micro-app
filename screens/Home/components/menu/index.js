import React from "react";
import DotCircle from "../../../../components/svg/dot-circle";
import { View, Text, ScrollView } from "react-native";
import { Image } from "react-native-elements";

const Menu = ({ categories }) => (
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center"
      }}
    >
      {categories.map(category => {
        return (
          <View
            key={category.name}
            style={{
              height: 90,
              width: 88,
              padding:10,
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <Image
              style={{ height: 32, width: 32, alignSelf: "center" }}
              source={{ uri: "https://" + category.icon }}
            />
            <Text
              style={{
                fontSize: 8,
                marginTop: 5,
                textAlign: "center",
                alignSelf: "center"
              }}
            >
              {category.name}
            </Text>
          </View>
        );
      })}
    </View>
  </ScrollView>
);

export default Menu;
