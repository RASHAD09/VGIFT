import React, { Component } from "react";
import { Text, View, TouchableHighlight, Picker } from "react-native";
import styles from "./styles";
import ViewMoreText from "react-native-view-more-text";
import LinearGradient from "react-native-linear-gradient";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../assets/colors";
import { Drawer } from "react-native-paper";

export default class Footer extends Component {

  state = {user: ''}
  updateUser = (user) => {
     this.setState({ user: user })
  }
  render()
  {
  return (
    <View style={{ justifyContent: "center", flex: 1, paddingTop: 20 }}>
      <LinearGradient
        style={styles.footer}
        colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
      >
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener("login")}
        >
          <Text>ADD TO CART</Text>
        </TouchableHighlight>
        <Text style={{ fontSize: 35, padding:10 }}>|</Text>

        <Text style={{padding:10 }}>QTY</Text>
        
        <Picker
          style={styles.pick}
          selectedValue = {this.state.user}
           onValueChange = {this.updateUser}
        >

          <Picker.Item label=" 1 " value="1" />
          <Picker.Item label=" 2 " value="2" />
          <Picker.Item label=" 3 " value="3" />
        </Picker>
        <Text style={{backgroundColor:"white",width:30,height:25,justifyContent:"center" }}>{this.state.user}</Text>

      </LinearGradient>
    </View>
  );
}

}
