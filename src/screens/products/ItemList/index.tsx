import React, { Component } from "react";
import {
  Text,
  View,
  Alert,
  Picker,
} from "react-native";

import { List} from 'react-native-paper';

export default class ItemList extends Component {
  state = {
    expanded: false,


  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });


  render() {

    return (
      <View
        style={{
          marginTop: 22,
          flex: 1,
          
        }}
      >

         <List.Section >
      
      <List.Accordion
        title="Item Attribute "
        expanded={this.state.expanded}
        onPress={this._handlePress}
      >
        <List.Item title="First item"  />
        <List.Item title="Second item" />
          <List.Item title="First item" />
        <List.Item title="Second item" />  
        <List.Item title="First item" />
        <List.Item title="Second item" /> 
         <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>

   
       
     
     
      </View>
      

      
    );
  }
}
