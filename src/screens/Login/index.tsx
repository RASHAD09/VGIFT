import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ScrollView,
  Alert,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import { Icon } from "react-native-elements";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../assets/colors";
import LinearGradient from "react-native-linear-gradient";
import { thisExpression } from "@babel/types";


const axios = require("axios");

const ACCESS_TOKEN = "access_token";




class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    MobileNumber: "",
    Password: "",
    error: "",
      TextInputValue: "",
    ErrorStatus : true,
  };


  async onLogInPressed() {
    axios
      .post("http://40.123.211.57:8081/api/Users/LogIn", {
        //MobileNumber: this.state.MobileNumber,
       // Password: this.state.Password
       'MobileNumber':this.state.MobileNumber,
       'Password': this.state.Password
            })
      .then(response => {
        this.storeToken(response.data.data.token);
        console.log("response.data.token",response.data.data.token);
      })
      .catch(error => {
        console.log("dddddddddddddddddddddddddd" + error);
      });
  }

  // ASYNC STORAGE
  async storeToken(accessToken) {
    try {
      await AsyncStorage.setItem("token", accessToken);

      this.getToken();
    } catch (error) {
      console.log("Wrong Wrong");
    }
  }

  async getToken() {
    try {
      let token = await AsyncStorage.getItem("token");
      console.log("get  is" + token);
    } catch (error) {
      console.log("Wrong Wrong");
    }
  }

  // handleMes =() => {
  //   const value = this.refs.form.getValue();
  //     console.log(value); 
    
  // }

  
  render() {
    return (
      <View>
       
        <View
          style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
        >
          <Icon
            iconStyle={styles.icon}
            name="arrow-left"
            type="font-awesome"
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={styles.text}>Login</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text>Phone</Text>
            <TextInput
              style={styles.inputs}
              keyboardType="phone-pad"
              // underlineColorAndroid="transparent"
              onChangeText={MobileNumber =>
                this.setState({ MobileNumber: MobileNumber })                
            }
                       

            />
            
          </View>
          <View style={styles.inputContainer}>
            <Text>password</Text>
            <TextInput
              style={styles.inputs}
              keyboardType="default"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={Password => this.setState({ Password :Password})}
            />
          </View>
          <LinearGradient
            style={styles.button}
            colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
          >
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.onLogInPressed() }
            >
              <Text>Log in</Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("registration")}
          >
            <Text> dont have an account? Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("forgetPass")}
          >
            <Text> Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
