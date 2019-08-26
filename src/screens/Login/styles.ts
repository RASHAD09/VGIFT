import { StyleSheet } from "react-native";
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
    inputContainer: {
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
    buttonContainer: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: widthPercentageToDP(85),
      borderRadius:8,
  
    },
    button: {
      justifyContent: "center",
      alignItems:"center",
      borderRadius: 8,
      height: 60,
      width: widthPercentageToDP(90),
      elevation: 10,
      marginBottom:"5%",
  
    },
    
    
  
  icon:{
      fontSize: 24,
      paddingTop: 60,
      color: "gold",
      marginLeft: 20,
  },
  text:{
      fontSize: 24,
      paddingTop: 30,
      color: "black",
      marginLeft: 20,
  },
  errorMessage: {
    fontSize: 20,
    color:"red",
    marginLeft:-80,
  }
  });