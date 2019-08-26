import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity,
   ScrollView
} from 'react-native';

export default props => {

 
    return (
      <View style={styles.container}> 

      <View style={styles.Fors}>
      <Image  style={styles.ImageScreen}
       source={require("../../assets/icons/wrong3x.png")}
       
       />

      <Text style={{color:'black',fontSize:24}}>Wrong Code</Text>

      <Text style={{color:'black',fontSize:14}}>You have enterd verification code</Text>

      </View>
      
      
        
        <TouchableHighlight  onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Resend Now</Text>
        </TouchableHighlight>

      <View style={styles.container}>

                    </View>
      </View>

    );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Fors:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"35%",
    paddingBottom:'10%'
    },
  loginText: {
    color: 'gold',
    borderBottomColor:'gold',
    borderBottomWidth:1,
  },
  ImageScreen:{
    justifyContent:'center',
    alignItems:'center', 
    padding:25,
    width:150,
    height:150,
  }
  
});


