import React,{Component} from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import FeaturedItem from "./FeaturedItem";
import data from "./data";
const axios = require('axios');





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
export default class FeaturedList extends Component {

  state = {
    firstQuery: '',
    loading: false,
    data: [],
    error: null,

  }
  // ?id=${}

  componentWillMount() {
   try {
    axios.get("http://40.123.211.57:8081/api/items")
    .then(response =>{
      console.log("dddddd",response);

      if ( response.data.data != null){
        this.setState({ data:response.data.data })

      }else{
        this.setState({ data: [] })
      }
    } )
   } catch (error) {
     console.log("dddddddddddddddddddddddddd")
    this.setState({ data: [] })
   } 
  }
  
  
  
  render(){
  return (
    <View>
      <Text style={styles.title}>Featured</Text>
      <FlatList
            data={this.state.data}
            showsHorizontalScrollIndicator={false}
        horizontal={true}        
        style={{ marginHorizontal: 5 }}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
    </View>
  );
}

}
const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 20,
    color: "black",
  },
});
