import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../assets/colors";
import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";
export default props => {
  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        <View style={styles.section1}>
          <Text style={styles.sectionTitle}> Send A gift for </Text>
          <Text style={styles.sectionTitle}> beloved one...</Text>
        </View>
        <View style={styles.imagescreen}>
          <Image style={styles.image}
            source={require("../../assets/icons/BarTabs/WelcomeImage.png")}
          />
        </View>
        <View style={styles.buttonG}>
          {/* <LinearGradient style ={styles.button} colors={[PRIMARY_COLOR, SECONDARY_COLOR]}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => props.navigation.navigate("login")}
            >
              <Text>Login</Text>
            </TouchableOpacity>
          </LinearGradient> */}
          <LinearGradient style ={styles.button} colors={[PRIMARY_COLOR, SECONDARY_COLOR]}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => props.navigation.navigate("registration")}
            >
              <Text>Registration</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.sectT}>
          <TouchableOpacity onPress={() => props.navigation.navigate("app")}>
            <Text> EXPLORE GIFT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
