import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

export default StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "stretch",
    width: widthPercentageToDP(22)
  },
  footer: {
    height: heightPercentageToDP(7.5),
    paddingTop: 10,
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: 0
  },
  pick: {
    height: 25,
    width: 30,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});
