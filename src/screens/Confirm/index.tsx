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

      <View style={styles.fors}>
      <Image 
       style={styles.imagescreen}
       source={require("../../assets/icons/confirm3x.png")}
       
       />
      <Text style={{color:'black',fontSize:24}}>Confirmer</Text>

      <Text style={{color:'black',fontSize:16}}>You have successfully registered in GIFT</Text>

      </View>
      
      
        
        <TouchableHighlight onPress={() => props.navigation.navigate('login')}>
          <Text style={styles.loginText}>Login Now?</Text>
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
  fors:{
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
  imagescreen:{

    justifyContent:'center',
    alignItems:'center', 
    padding:25,
    width:150,
    height:150,
  }
  
});


