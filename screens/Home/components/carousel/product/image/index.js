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
import Price from "./../../../product/card/price";

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
      <Text
        style={{
          fontFamily: "OpenSans-SemiBold",
          fontSize: 16,
          padding: 10
        }}
      >
        {title}
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
          {productList.map((product, index) => {
            return (
              <Card
                key={product["product.repositoryId"] + "-" + index}
                style={{ marginLeft: 6 }}
              >
                <View
                  style={{
                    padding: 8,
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
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
                  <Price price={product['sku.finalPrice']} bold={true} primary={true} />
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
