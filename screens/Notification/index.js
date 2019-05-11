import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { ListItem, List } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo";
import { withRouter } from 'react-router';

const Notification = ({history}) => {
  return (
    <View>
      <ListItem
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ["#16d9e3", "#30c7ec", "#46aef7" ],
          start: [0,.47, 1],
          end: [1,.47, 0]
        }}
        ViewComponent={LinearGradient}
        leftAvatar={{
          rounded: true,
          source: require("./../../assets/images/hotsale.png")
        }}
        title="Hot sale 40-60% OFF"
        titleStyle={{ color: "white", fontWeight: "bold" }}
        subtitleStyle={{ color: "white" }}
        subtitle="Buy mebership and purchase more"
        chevronColor="white"
        chevron
        onPress={()=>{history.push('/campaigns/hotsale')}}
      />
      <ListItem
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ["#FF9800", "#F44336"],
          start: [1, 0],
          end: [0.2, 0]
        }}
        ViewComponent={LinearGradient}
        leftAvatar={{
          rounded: true,
          source: require("./../../assets/images/gifts.png")
        }}
        title="Buenfin sale 40% OFF"
        titleStyle={{ color: "white", fontWeight: "bold" }}
        subtitleStyle={{ color: "white" }}
        subtitle="Buy mebership and purchase more"
        chevronColor="white"
        chevron
        onPress={()=>{history.push('/campaigns/buenfin')}}
      />
      <ListItem
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ["#50cc7f", "#f5d100"],
          start: [1, 0],
          end: [0.4, 0]
        }}
        ViewComponent={LinearGradient}
        leftAvatar={{
          rounded: true,
          source: require("./../../assets/images/xmas.png")
        }}
        title="Thanks giving min 40% OFF"
        titleStyle={{ color: "white", fontWeight: "bold" }}
        subtitleStyle={{ color: "white" }}
        subtitle="Get your membership now !!"
        chevronColor="white"
        chevron
        onPress={()=>{history.push('/campaigns/xmas')}}
      />
      <ListItem
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ["#f9d423", "#ff4e50", "#3f3f3f"],
          start: [1, 0],
          end: [0.4, 0]
        }}
        ViewComponent={LinearGradient}
        leftAvatar={{
          rounded: true,
          source: require("./../../assets/images/dod.png")
        }}
        title="Day of the dead"
        titleStyle={{ color: "white", fontWeight: "bold" }}
        subtitleStyle={{ color: "white" }}
        subtitle="We remember you !!"
        chevronColor="white"
        chevron
        onPress={()=>{history.push('/campaigns/dod')}}
      />
    </View>
  );
};

export default withRouter(Notification);
