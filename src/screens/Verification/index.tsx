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
  ScrollView,
  AsyncStorage
} from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import CountDown from 'react-native-countdown-component';
import { Icon } from "react-native-elements";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../assets/colors";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
const axios = require("axios");

var request = require("request");

class Verification extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    VerificationCode: "",
    MobileNumber: "",
    status: 0,
    id: "",
    error: ""
  };
  // componentWillMount(){
  //   this.getId();
  // }
  onFinishCheckingCode = (code) => {
    console.log("zzzzzzzzzzzzzzzzzzzzzzz")



    axios.post('http://40.123.211.57:8081/api/Users/VerifyCode', {
      Id: this.state.id,
      verificationCode: this.state.VerificationCode,
    })
      .then((response) => {
        console.log("2222222222222", response);
      })
      .catch((error) => {
        console.log(error);
      });


    // var options = { method: 'POST',
    //   url: 'http://40.123.211.57:8081/api/Users/VerifyCode',
    //   headers: 
    //    { 'cache-control': 'no-cache',
    //      Connection: 'keep-alive',
    //      'Content-Length': '36',
    //      'Accept-Encoding': 'gzip, deflate',
    //      Host: '40.123.211.57:8081',
    //      'Postman-Token': 'd9ab05e7-8ae2-4d24-bbe3-917eb2f41efb,9ba4d335-a896-4da1-812e-1d6c05d312b6',
    //      'Cache-Control': 'no-cache',
    //      Accept: '*/*',
    //      'User-Agent': 'PostmanRuntime/7.15.2',
    //      'Content-Type': 'application/json' },
    //   body: { 
    //     Id: 67,
    //      verificationCode: 5116
    //      },
    //   json: true };

    // request(options, function (error, response, body) {
    //   if (error) throw new Error(error);

    //   console.log("bbbbbbbb",body);
    // });



  }



  async getId() {
    try {
      let Id = await AsyncStorage.getItem("Id");
      let verificationCode = await AsyncStorage.getItem("VerificationCode");


      this.setState({ id: Id + "" });
      this.setState({ VerificationCode: verificationCode + "" });

      // console.log("get  is" , id);
      // this.state.id=JSON.stringify(id);
      console.log("vvvv is", Id);
      console.log("vvvv is", verificationCode);




    } catch (error) {

      console.log("Wrong Wrong22");
    }
  }



  // async onResendCode() {
  //   axios
  //     .post("http://40.123.211.57:8081/api/Users/ResendCode", {

  //       MobileNumber: this.state.MobileNumber,

  //     })
  //     .then(response => {
  //       console.log("dddddd", response);
  //       let accessToken = response;
  //       // this.storeToken(accessToken);
  //       console.log("hhhhhhhhhhhh", response.data.MobileNumber, response.data.Id);
  //     })
  //     .catch(error => {
  //       console.log("dddddddddddddddddddddddddd" + error);
  //     });
  // }


  render() {
    return (

      <View>
        <View
          style={styles.roof}
        >
          <Icon
            iconStyle={styles.icon}
            name="arrow-left"
            type="font-awesome"
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={styles.text}>Verification</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Text >
              We are sending code to
          </Text>

            <Text style={{ color: "#F4CE64" }}> +962791415956 </Text>
          </View>
          <CodeInput
            keyboardType="numeric"
            codeLength={4}
            compareWithCode={this.state.VerificationCode}
            activeColor="gold"
            inactiveColor="silver"
            inputPosition="center"
            size={70}
            onFulfill={this.onFinishCheckingCode}
            containerStyle={{ marginTop: 30 }}
            codeInputStyle={{ borderWidth: 1.5 }}
            // onChangeText={VerificationCode => this.setState({ VerificationCode: VerificationCode })}


          />


          <View style={styles.container}>
            <CountDown
              until={60}
              size={12}
              onFinish={() => alert('Finished')}
              digitStyle={{ backgroundColor: '#FFF' }}
              showSeparator

              digitTxtStyle={{ color: '#000' }}
              timeToShow={['M', 'S']}
              timeLabels={{ m: null, s: null }}

            />
            <LinearGradient
              style={styles.button}
              colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
            >
              <TouchableHighlight
                style={styles.buttonContainer}

                onPress={() => this.onResendCode()}
              >
                <Text style={styles.loginText}>Next</Text>
              </TouchableHighlight>
            </LinearGradient>
          </View>
        </View>
      </View>

    );
  }
}

export default Verification;
