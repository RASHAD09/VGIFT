import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import FeaturedItem from "../../Home/FeaturedList/FeaturedItem";
import data from "../../Home/FeaturedList/data";
export default () => {

    
  const renderItem = ({ item }) => {
    return (
      <FeaturedItem
        text={item.text}
        image={item.image}
        price={item.price}
        discount={item.discount}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
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
