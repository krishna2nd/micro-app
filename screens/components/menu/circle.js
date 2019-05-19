import React from "react";
import DotCircle from "../../../../components/svg/dot-circle";
import { View, Text } from "react-native";

const Menu = ({}) => (
  <View
    style={{
      height: 60,
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center"
    }}
  >
    {[
      { icon: "violet", text: "Novedades" },
      { icon: "purple", text: "Alimentos" },
      { icon: "gray", text: "Listas" },
      { icon: "blue", text: "Negocio" },
      { icon: "green", text: "Basicos Hogar" },
      { icon: "red", text: "Bebes" },
      { icon: "orange", text: "Hot Shop" },
      { icon: "cyan", text: "Patrocinados" }
    ].map(menu => (
      <View
        key={menu.icon}
        style={{
          height: 60,
          width: 80,
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <DotCircle color={menu.icon} radius={12} dotRadius={7} />
        <Text style={{ fontSize: 8, marginTop: 5 }}>{menu.text}</Text>
      </View>
    ))}
  </View>
);

export default Menu;
