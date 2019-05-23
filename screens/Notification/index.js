import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { ListItem, List } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo";
import { withRouter } from "react-router";
import device from "../../constants/Layout";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const styles = StyleSheet.create({
  card: {
    height: 350,
    width: device.width - 50,
    alignSelf: "center",
    margin: 10,
    marginVertical: 6,
    borderRadius: 6
  },
  lc: {
    height: 350,
    width: device.width - 50,
    alignSelf: "center",
    borderRadius: 6
  },
  lcc: {
    padding: 20
  },
  lh: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textShadowColor: "#EFEFEF"
  },
  ls: { color: "white", fontSize: 20 }
});
const Notification = ({ history }) => {
  const list = [
    <ListItem
      containerStyle={styles.lc}
      contentContainerStyle={styles.lcc}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.95}
      linearGradientProps={{
        colors: ["#16d9e3", "#30c7ec", "#46aef7"],
        start: [0, 0.47, 1],
        end: [1, 0.47, 0]
      }}
      ViewComponent={LinearGradient}
      leftAvatar={{
        rounded: true,
        source: require("./../../assets/images/hotsale.png")
      }}
      title="Hot sale 40-60% OFF"
      titleStyle={styles.lh}
      subtitleStyle={styles.ls}
      subtitle="Buy mebership and purchase more"
      chevronColor="white"
      chevron
      heckmark
      onPress={() => {
        history.push("/campaigns/hotsale");
      }}
    />,

    <ListItem
      containerStyle={styles.lc}
      contentContainerStyle={styles.lcc}
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
      titleStyle={styles.lh}
      subtitleStyle={styles.ls}
      subtitle="Hot sale is on !! get your membership now.."
      chevronColor="white"
      chevron
      onPress={() => {
        history.push("/campaigns/buenfin");
      }}
    />,

    <ListItem
      containerStyle={styles.lc}
      contentContainerStyle={styles.lcc}
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
      titleStyle={styles.lh}
      subtitleStyle={styles.ls}
      subtitle="Get your membership now !!"
      chevronColor="white"
      chevron
      onPress={() => {
        history.push("/campaigns/xmas");
      }}
    />,
    <ListItem
      containerStyle={styles.lc}
      contentContainerStyle={styles.lcc}
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
      titleStyle={styles.lh}
      subtitleStyle={styles.ls}
      subtitle="We remember you !!"
      chevronColor="white"
      chevron
      onPress={() => {
        history.push("/campaigns/dod");
      }}
    />
  ];
  return (
    <View
      style={{
        width: device.width,
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      {list.map((item, index) => (
        <Card key={index} style={styles.card}>
          {item}
        </Card>
      ))}
    </View>
  );
};

export default withRouter(Notification);
