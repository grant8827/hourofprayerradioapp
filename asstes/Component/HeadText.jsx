import React from 'react';
import {Text,} from 'react-native';
import { LinearTextGradient } from "react-native-text-gradient";

const HeadText = () => {
  return (
    <LinearTextGradient
    style={{ fontWeight: "bold", fontSize: 50, }}
    locations={[0, 1]}
    colors={["#af0000", "#000"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    <Text>The Hour Of Prayer Radio</Text>
  </LinearTextGradient>
  );
};

export default HeadText