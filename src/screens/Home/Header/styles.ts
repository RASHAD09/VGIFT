import { StyleSheet } from "react-native";
import {
    heightPercentageToDP,
    widthPercentageToDP,
  } from "react-native-responsive-screen";

export default StyleSheet.create({
    
  container: {
    padding: 12,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: heightPercentageToDP(14),
  },
  searchContainer: {
    backgroundColor: "white",
    width: widthPercentageToDP(80),
    borderRadius: 25,
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    height: heightPercentageToDP(5),
    elevation:20
  },
  icon: {
    width: 30,
    height: heightPercentageToDP(5),
  },
 
});
