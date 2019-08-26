import React, { Component } from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";

import styles from "./styles";

export default props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{marginLeft:16}}> textInComponent textInComponent textInComponent </Text>
      </View>
        <View style={styles.offer}>
      <View style={styles.price}>
        <Text style={styles.priceColor}>240.0 SAR</Text>

        <View style={styles.wish}>
          <Icon
            name="heart-o"
            type="font-awesome"
            color="#000"
            onPress={() => console.log("hello")}
          />
          <Text style={styles.colorText}>ADD TO WISH LIST</Text>
        </View>
        </View>
        <Text
          style={styles.text}
        >240SAR</Text>

        <Text style={styles.colorText}>Price Incloding VAT 5.0%</Text>
        </View>
    </View>
  );
};
