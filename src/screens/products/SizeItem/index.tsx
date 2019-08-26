import React, { Component } from 'react'
import { Text, View,TouchableHighlight ,Picker } from 'react-native'
import styles from "./styles";
import ViewMoreText from 'react-native-view-more-text';
import LinearGradient from "react-native-linear-gradient";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../assets/colors";
import { Drawer} from 'react-native-paper';




export default class SizeItem extends Component {
  constructor (props) {
    super()
    this.state = {
    
      active:'first',

    }
  }
  
  render () {
    const { active } = this.state;


    return (
      <View>
        <Text style={{fontSize:24,fontWeight:"100",color:"black",marginLeft:16}}>Type</Text>
     
    <Drawer.Section 
       style={{flexDirection:"row"}}>
       
        <Drawer.Item
        style={{borderWidth:1,borderRadius:8,borderColor:PRIMARY_COLOR}}
          label="First Item"
          
          active={active === 'first'}
          onPress={() => { this.setState({ active: 'first' }); }}
        />
        <Drawer.Item    
        style={{borderWidth:1,borderRadius:8,borderColor:PRIMARY_COLOR}}

          label="Second Item"
          active={active === 'second'}
          onPress={() => { this.setState({ active: 'second' }); }}
        />
     </Drawer.Section>

         </View>
    )
  }
}
