import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../assets/colors";
import { Icon } from "react-native-elements";
import styles from "./styles";

export default () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
    >
      <View style={styles.searchContainer}>
        <Icon name="search" size={25} color={PRIMARY_COLOR} />
        <TextInput placeholder="Search Your Gift" />
      </View>
      <Image
        style={styles.icon}
        resizeMode="contain"
        source={require("../../../assets/icons/bell.png")}
      />
    </LinearGradient>
  );
};


