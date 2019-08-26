import { StyleSheet, } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    marginTop: "20%",
      flex: 1,
     marginLeft:25,
     
  },
  roof:{
    justifyContent: "flex-start", 
    alignItems: "flex-start",
    marginLeft: 20,

  },
  
icon:{
  fontSize: 24,
  paddingTop: 60,
  color: "gold",
  marginLeft: 20,
},
  buttonContainer: {
    height:'18%',
    justifyContent: 'center',
    alignItems: 'center',
    width:'90%',
    borderRadius:8,
    marginVertical:20,

  },
  button: {
    justifyContent: "center",
    alignItems:"center",
    borderRadius: 8,
    height: 60,
    width: widthPercentageToDP(85),
    elevation: 10,
    marginVertical:20,

  }, inputContainer: {
    borderBottomColor: "#B7C3C4",
    borderBottomWidth: 1,
    width: "95%",
    height: 55,
    marginBottom: 28
  },
  inputs: {
    height: 45,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  
  
  loginButton: {
    backgroundColor: "#F4CE64",
  },
  loginText: {
    color:'black',
  },
  text:{
    fontSize: 24,
    paddingTop: 30,
    color: "black",
    marginLeft: 20,
}
  
})