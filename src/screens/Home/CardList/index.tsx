import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import CardItem from "./CardItem";
import data from "./data";


export default () => {

  const renderItem = ({ item }) => {
    return (
      <CardItem
        image={item.image}
        
      />
    );
  };
  return (
    <View>
      <Text style={styles.title}>Category</Text>
      <FlatList
        data={data}
        numColumns={3}
        style={{ marginHorizontal: 5 }}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 20,
    color: "black",
  },
});
