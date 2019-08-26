import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { PRIMARY_COLOR } from "../../../../assets/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    margin: 5,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    borderRadius: 5,
    backgroundColor:"white",

  },
  image: {
    resizeMode: "contain",
    height: heightPercentageToDP(11),
    backgroundColor:"white",
  },
  discountContainer: {
    top: -1.2,
    left: -0.5,
    height: 22,
    width: 50,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 8,
    backgroundColor: "#FF5252",
  },
  discount: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    fontWeight: "500",
    color: "white",
    
  },
  divider: {
    height: 1,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: PRIMARY_COLOR,
  },
  price: {
    fontSize: 12,
    color: "black",
    fontWeight: "500",
    textAlign: "center",
  },
  text: {
    fontSize: 10,
    color: "#BDBDBD",
    textAlign: "center",
    justifyContent:"center"
  },
  buttonsContainer: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 5,
    width: 15,
    height: 15,
  },
});
