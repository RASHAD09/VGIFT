import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";

import Swiper from "react-native-swiper";
import styles from "./styles";

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}
       showsButtons={false}
        autoplay={true} 
        activeDotColor='white'
        autoplayTimeout={4}
        >
        <View style={styles.slide1}>
          <Image style={styles.image} source={require("./slideren.png")} />
        </View>
        <View style={styles.slide1}>
          <Image style={styles.image} source={require("./slideren.png")} />
        </View>
        <View style={styles.slide1}>
          <Image style={styles.image} source={require("./slideren.png")} />
        </View>
      </Swiper>
    );
  }
}
