import React from 'react';
import { Svg } from "expo";

export default DotCircle = ({ color = "black", radius= 10, dotRadius=5, fill="transparent" }) => {
  const size = radius*2+2;
  const center = size/2
  return (<Svg height={size} width={size}>
    <Svg.Circle cx={center} cy={center} r={radius} stroke={color} fill={fill} />
    <Svg.Circle cx={center} cy={center} r={dotRadius} stroke={color} fill={color} />
  </Svg>);
}
