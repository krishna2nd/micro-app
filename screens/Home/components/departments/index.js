import React from "react";
import { get } from "lodash";
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
import { Button, Card, Title, Paragraph } from "react-native-paper";

class Departments extends React.Component {
  render() {
    const props = this.props;
    console.log("Departments..", props.type);
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

const DepartmentColumnView = ({ departments, host, defaultImage, columns }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 20 }}>
        Categories list
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignContent: "center",
            padding: 20
          }}
        >
          {departments.map(department => {
            return (
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
                    alignItems: "center"
                  }}
                >
                  <Avatar
                    size="large"
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
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#565656"
                    }}
                  >
                    {department.displayName}
                  </Text>
                </View>
              </Card>
            );
          })}
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
                paddingBottom: 5
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

AppRegistry.registerComponent("RRSamsApp", () => Departments);
