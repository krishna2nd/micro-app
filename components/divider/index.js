import React from "react";
import { Divider as RNEDivider } from "react-native-elements";

const Divider = ({ type = "default", color = "#DFDFDF" }) => {
  let height = 11;
  if (type === "small") height = 6;

  return <RNEDivider style={{ height: height, backgroundColor: color }} />;
};

export default Divider;
