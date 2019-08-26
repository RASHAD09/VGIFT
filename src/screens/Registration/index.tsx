import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  AsyncStorage,
  ScrollView,
  TouchableOpacity
} from "react-native";
import styles from "./styles";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../assets/colors";
import LinearGradient from "react-native-linear-gradient";
const axios = require("axios");
import { Icon } from "react-native-elements";

class Registration extends Component {
  
  constructor(props) {
    super(props);
    
  }
  state = {
    Name: "",
    MobileNumber: "",
    Password: "",
    passwordCon: "",
    errors: [],
  };

  async onRegisterPressed() {
    axios
      .post("http://40.123.211.57:8081/api/Users/Register", {
        Name: this.state.Name,
        MobileNumber: this.state.MobileNumber,
        Password: this.state.Password
      })
      .then(response => {
        this.storeId.bind(response.data.data.id,response.data.data.verificationCode);
        console.log("accessID00" , response.data.data.id,response.data.data.verificationCode);
        // console.log("access" , response.data);
      })
      .catch(error => {
        console.log("dddddsssssdddddd" + error);
      });
  } 
  async storeId(accessId,acessVerify) {
    console.log("accessID11" + accessId);
    console.log("accessv12" + acessVerify);

    try {
      await   AsyncStorage.setItem("Id",accessId+"");
      await   AsyncStorage.setItem("Verify",acessVerify+"");

      console.log("" + accessId);
      console.log("" + acessVerify);


      // this.getId();
    } catch (error) {
      console.log("error1",error);
    }
  }

  // async getId() {
  //   try {
  //     let Id = await AsyncStorage.getItem("Id");
  //     console.log("get  is" + Id);
  //   } catch (error) {
  //     console.log("error2",error);
  //   }
  // }

  render() {
    return (
      <View
      >
        <View
          style={{ justifyContent: "flex-start", alignItems: "flex-start" ,marginBottom:"5%"}}>
          <Icon
            iconStyle={styles.icon}
            name="arrow-left"
            type="font-awesome"
            onPress={() => this.props.navigation.navigate("app")}
          />
          <Text style={styles.text}>SignUP</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text>Name</Text>
            <TextInput
              style={styles.inputs}
              //  placeholder="Phone Number"
              keyboardType="default"
              onChangeText={Name => this.setState({ Name: Name })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Phone</Text>
            <TextInput
              style={styles.inputs}
              //  placeholder="Phone Number"
              keyboardType="phone-pad"
              onChangeText={MobileNumber =>
                this.setState({ MobileNumber: MobileNumber })
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>password</Text>
            <TextInput
              style={styles.inputs}
              //  placeholder="Phone Number"
              keyboardType="default"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={Password => this.setState({ Password: Password })}
            />
          </View>

          {/* <View style={styles.inputContainer}>
          <Text>Confirm password</Text>
          <TextInput style={styles.inputs}
            //  placeholder="Phone Number"
            keyboardType="default"
            secureTextEntry={true}
              underlineColorAndroid='transparent'
            onChangeText={(passwordCon) => this.setState({ passwordCon:passwordCon })}
          />

        </View> */}

          <LinearGradient
            style={styles.button}
            colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
          >
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() =>{
                this.onRegisterPressed()
                this.props.navigation.navigate("Verification")
              }
              }
            >
              <Text>SignUp</Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity
            style={styles.bclick}
            onPress={() => this.props.navigation.navigate("login")}
          >
            <Text> Aleardy have an account? Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bclick}
            onPress={() => this.props.navigation.navigate("login")}
          >
            <Text> Aleardy have an account? Sign in</Text>
          </TouchableOpacity>
        </View>
        {/* <Errors errors={this.state.errors} /> */}
      </View>
    );
  }
}
// const Errors = props => {
//   return (
//     <View>
//       {props.errors.map((error, i) => (
//         <Text key={i} style={styles.error}>
//           {" "}
//           {error}{" "}
//         </Text>
//       ))}
//     </View>
//   );
// };

export default Registration;
