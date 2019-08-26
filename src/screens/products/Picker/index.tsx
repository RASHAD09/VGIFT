import React, { Component } from "react";
import {
  Modal,
  Text,
  Button,
  TouchableHighlight,
  View,
  Alert,
  Picker,
} from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../assets/colors";

import { Drawer} from 'react-native-paper';


export default class Pickerr extends Component {
  state = {
    expanded: false,
    active: '100',


  }

  


  render() {
    const { active } = this.state;

    return (
      <View
        style={{
          marginTop: 22,
          flex: 1,
          
        }}
      >
         <Text style={{fontSize:24,fontWeight:"100",color:"black",marginLeft:16}}>Size</Text>

<Drawer.Section 
   style={{flexDirection:"row"}}>
   
    <Drawer.Item
    style={{borderWidth:1,borderRadius:8,borderColor:PRIMARY_COLOR}}
      label="100"
      active={active === '100'}
      onPress={() => { this.setState({ active: '100' }); }}
    />
    <Drawer.Item
        style={{borderWidth:1,borderRadius:8,borderColor:PRIMARY_COLOR}}
      label="50"
      active={active === '50'}
      onPress={() => { this.setState({ active: '50' }); }}
    />
 </Drawer.Section>


      </View>
      

      
    );
  }
}
