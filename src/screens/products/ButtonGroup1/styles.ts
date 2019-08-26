import { StyleSheet } from "react-native";
import {
    heightPercentageToDP,
    widthPercentageToDP
  } from "react-native-responsive-screen";
  
export default StyleSheet.create({


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
        marginHorizontal:25,
        marginVertical:10,

        
  
      },
      switchB:{
          flexDirection:"row",
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 8,
        height: 60,
        width: widthPercentageToDP(30),
        elevation: 10,

      },
      footer:{
          flexDirection:"row",
          justifyContent: "center",
          alignItems:"center",
          position:"absolute",
            bottom: 0,

      },
     
    
})