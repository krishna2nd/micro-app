import React from "react";
import { get } from "lodash";
import device from "../../../constants/Layout";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator,
  AppRegistry
} from "react-native";
import { Avatar, Divider, Image, Header } from "react-native-elements";
import { Card } from "native-base";
import {
  setBreakPoints,
  Row,
  Column as Col,
  Grid
} from "react-native-responsive-grid";
import TouchableScale from "react-native-touchable-scale";

setBreakPoints({
  SMALL_Width: 414,
  MEDIUM_Width: 600,
  LARGE_Width: 1024
});

class Departments extends React.Component {
  render() {
    const props = this.props;
    switch (props.type) {
      case "two-column":
        props.column = 2;
        return DepartmentColumnView(props);
        break;
      case "scroll":
        return DepartmentScrollView(props);
      default:
        break;
    }
    return DepartmentScrollView(props);
  }
}

const DepartmentColumnView = ({
  departments = [],
  host,
  defaultImage,
  columns
}) => {
  const departmentCard = department => {
    return (
      <TouchableScale
        friction={90}
        tension={100}
        activeScale={0.92}
      >
        <Card
          title={department.displayName}
          key={department.displayName}
          style={{
            borderWidth: 0.5,
            borderColor: "#EFEFEF"
          }}
        >
          <View
            style={{
              padding: 10,
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              minHeight: 120
            }}
          >
            <Avatar
              size="large"
              source={{
                uri:
                  host +
                  get(department, "families[0].ThumbnailImageUrl", defaultImage)
              }}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text
              lineBreakMode="clip"
              numberOfLines={2}
              style={{
                fontSize: 10,
                color: "#565656"
              }}
            >
              {department.displayName}
            </Text>
          </View>
        </Card>
      </TouchableScale>
    );
  };
  const rows = [];
  let index = 0;
  for (; index < departments.length - 2; index += 3) {
    rows.push(
      <Row key={index}>
        <Col size={30}>{departmentCard(departments[index])}</Col>
        <Col size={30}>{departmentCard(departments[index + 1])}</Col>
        <Col size={30}>{departmentCard(departments[index + 2])}</Col>
      </Row>
    );
  }

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 20 }}>
        Categories list
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: device.width
          }}
        >
          {rows}
        </View>
      </ScrollView>
    </View>
  );
};

const DepartmentScrollView = ({ departments, host, defaultImage }) => (
  <View>
    <Text
      style={{
        fontFamily: "OpenSans-SemiBold",
        fontSize: 16,
        padding: 10
      }}
    >
      Shop by department
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
        {departments.map(department => {
          return (
            <Card
              key={department.displayName}
              style={{
                height: 80,
                width: 100,
                marginLeft: 5,
                padding: 5
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center"
                }}
              >
                <Avatar
                  size="medium"
                  source={{
                    uri:
                      host +
                      get(
                        department,
                        "families[0].ThumbnailImageUrl",
                        defaultImage
                      )
                  }}
                  PlaceholderContent={<ActivityIndicator />}
                />
              </View>
              <Text
                style={{
                  fontSize: 10,
                  paddingHorizontal: 8,
                  textAlign: "center"
                }}
                numberOfLines={2}
              >
                {department.displayName}
              </Text>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  </View>
);

export default Departments;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: device.width
  }
});

AppRegistry.registerComponent("RRSamsApp", () => Departments);
