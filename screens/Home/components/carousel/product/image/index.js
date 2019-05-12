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
  ActivityIndicator
} from "react-native";
import { Avatar, Divider, Image, Header } from "react-native-elements";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const CarouselProductImage = ({
  isEndeca = true,
  title = "Recommended products",
  products,
  host,
  defaultImage
}) => {
  let productList = products;
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 20 }}>
        {title}
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "center",
            padding: 20
          }}
        >
          {productList.map((product, index) => {
            return (
              <Card
                key={product['product.repositoryId']+ "-" + index}
                style={{ marginLeft: 10 }}
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
                        host + (product["sku.smallImage.url"] || defaultImage)
                    }}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                </View>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CarouselProductImage;
