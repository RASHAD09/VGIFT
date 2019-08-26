import React, { Component } from 'react'
import { Text, View,TouchableHighlight ,Picker } from 'react-native'
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../assets/colors";




export default class AddTo extends Component {
  constructor (props) {
    super()
    this.state = {
    

    }
   

  }
 

  
  
  render () {


    return (
      <View style={styles.container}>
          
        <LinearGradient
            style={styles.button}
            colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
          >
            <TouchableHighlight
              style={styles.buttonContainer}
              onPress={() => this.onClickListener("login")}
            >
              <Text>Log in</Text>
            </TouchableHighlight>
          </LinearGradient>





         </View>
    )
  }
}
