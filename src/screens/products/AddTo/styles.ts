import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
      flex: 1,
     marginLeft:25,
    },
   
  
    buttonContainer: {
      height:'18%',
      flexDirection: 'row',
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
      marginBottom:20,

    },
  });