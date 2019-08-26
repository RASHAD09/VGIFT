import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import styles from "./styles";
import Header from "./Header";
import FeaturedList from "./FeaturedList";
import CardList from "./CardList";
import BarScreen from "./BarScreen";
import Slider from "./Slider";


import { ScrollView } from "react-native-gesture-handler";

export default props => {
  const onSearchPress = () => {
    props.navigation.navigate("search");
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <Header />

      <ScrollView>
        
      <Slider />
        <BarScreen />
        <CardList />
        <FeaturedList />
      </ScrollView>
    </View>
  );
};
