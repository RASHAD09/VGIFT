import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import styles from "./styles";
import FeaturedList from "../Home/FeaturedList";
import Slider from "../Home/Slider";
import ItemAtrribute from "./ItemAtrribute";
import Picker from "./Picker";
// import ButtonGroup1 from "./ButtonGroup1";
import Footer from "./Footer";
import { ScrollView } from "react-native-gesture-handler";
import ItemList from "./ItemList";
import SizeItem from "./SizeItem";
import MoveText from "./MoveText";
import AddTo from "./AddTo";

export default props => {
  const onSearchPress = () => {};
  return (
    <View style={styles.container}>
      <ScrollView>
        <Slider />
        <View style={styles.divider} />
        <ItemAtrribute />
        <Picker />
        <SizeItem />
        <MoveText />
        <ItemList />
        <AddTo />
        <FeaturedList />
        <Footer />
      </ScrollView>
    </View>
  );
};
