import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Picker
} from "react-native";
import styles from "./styles";
import { SocialIcon } from "react-native-elements";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../assets/colors";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from 'react-native-image-picker';
// import {
//   CachedImage,
//   ImageCacheProvider
// } from 'react-native-cached-image';
const options ={
  title:"my pic",
  takePhotoButtonTitle:" from camera",
  chooseFromLibraryButtonTitle:" from galary"
}
export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    language: "",
    avatarSource:null,
  };
  handleChoosePhoto =() => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
  
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      }
  
      else {
        let source = { uri: response.uri };
  
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
  
        this.setState({
          avatarSource: source,
          pic:response.data
        });
      }
    });
  }

  render() {
    // const {photo} = state;
    return (
      <View style={styles.container}>
        <View style={styles.header} />
 
             

        <Image
                  source={this.state.avatarSource}

          style={styles.avatar}
          // source={require("../../../assets/icons/AccountIcon/UserGrey.png")}

        />
       
        <TouchableOpacity onPress={this.handleChoosePhoto}>
        <Image
          style={styles.camera}
          source={require("../../../assets/icons/AccountIcon/photo-camera.png")}
        />
        </TouchableOpacity>

        <View style={styles.containerT}>
          <View style={styles.inputContainer}>
            <Text>Name</Text>
            <TextInput
              style={styles.inputs}
              placeholder="Name"
              keyboardType="default"
              onChangeText={Name => this.setState({ Name })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Phone</Text>
            <TextInput
              style={styles.inputs}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              onChangeText={phone => this.setState({ phone })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Email</Text>
            <TextInput
              style={styles.inputs}
              placeholder="Phone Number"
              keyboardType="default"
              onChangeText={Email => this.setState({ Email })}
            />
          </View>
          <View style={styles.inputContainer2}>
            <Text>Gender</Text>
            <Picker
              selectedValue={this.state.language}
              style={{ width: "95%", height: 45, borderBottomColor: "#FFFFFF" }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue })
              }
            >
              <Picker.Item label="NOT" value="NOT" />
              <Picker.Item label="Male" value="Male" />

              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          <LinearGradient
            style={styles.button}
            colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
          >
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => alert("login")}
            >
              <Text>Save</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}
