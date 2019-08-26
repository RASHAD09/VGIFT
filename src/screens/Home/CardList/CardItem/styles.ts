import { StyleSheet } from "react-native";
import { heightPercentageToDP,widthPercentageToDP } from "react-native-responsive-screen";
import { PRIMARY_COLOR } from "../../../../assets/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    overflow:'hidden',
    margin: 5,
    borderWidth:1,
    borderColor: PRIMARY_COLOR,
    borderRadius:8,
  },
  image: {
   // height:heightPercentageToDP(13.88),
   height:heightPercentageToDP(14),
   resizeMode:"contain",
    
  },
});
