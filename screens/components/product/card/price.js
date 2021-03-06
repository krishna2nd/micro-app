import React from "react";
import { Text, View } from "react-native";

const Price = ({
  price,
  strike = false,
  bold = false,
  primary = false,
  secondary = false,
  style: userStyle = {}
}) => {
  const txtPrice = String(Number(price).toFixed(2));
  const parts = txtPrice.split(".");
  const style = strike
    ? {
        textDecorationLine: "line-through",
        textDecorationStyle: "solid"
      }
    : {};

  if (bold) style.fontWeight = "bold";
  if (primary) style.color = "#83BA0F";
  if (secondary) style.color = "grey";
  if (parts[1] === "00") parts[1] = undefined;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
        borderColor: "red"
      }}
    >
      <Text
        style={{
          ...style,
          fontWeight: "bold",
          fontSize: 15,
          paddingRight: 2,
          ...userStyle
        }}
      >
        $
      </Text>
      <Text
        style={{
          ...style,
          ...userStyle
        }}
      >
        {parts[0]}
      </Text>
      {parts[1] && (
        <Text
          style={{
            ...style,
            marginTop: -5,
            fontSize: userStyle.fontSize ? (userStyle.fontSize - (userStyle.fontSize/5)) : 12,
            ...userStyle
          }}
        >
          {parts[1]}
        </Text>
      )}
    </View>
  );
};

export default Price;
