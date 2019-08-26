import { StyleSheet } from "react-native";
import { heightPercentageToDP,widthPercentageToDP } from "react-native-responsive-screen";

export default StyleSheet.create({

      wrapper: {
        height: heightPercentageToDP(30)
      },
      slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    
      },
      image: {
        height: heightPercentageToDP(30),
        width:widthPercentageToDP(100),
    
      }
    });
