import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
// import { PRIMARY_COLOR } from "../../../../assets/colors";

export default StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomColor: "gold",
    borderBottomWidth: 1,
    marginLeft:10,
    marginRight:10,
    paddingVertical:5,

  },
  fimg: {
    width: 35,
    height: 35,
    marginVertical:10,

  },
  text:{
    fontSize: 10,
     color: "silver"
  },
  imageText:{
    padding:0,
    margin:0,
    flexDirection:"row",
    alignItems:"center"
  }
});
