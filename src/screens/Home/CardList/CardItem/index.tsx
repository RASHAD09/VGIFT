import React from "react";
import { View, TouchableOpacity, Image, Text,ImageBackground } from "react-native";
import styles from "./styles";

// interface to tell the component what to receive
interface Props {
  image: any;
}
export default (props: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}
    >
     
      <ImageBackground  style={styles.image} source={props.image}
       />

    </TouchableOpacity>
  );
};
