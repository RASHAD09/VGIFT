import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../assets/colors";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

export default StyleSheet.create({
  sectionContainer: {
    marginTop: 55
  },
  section1: {
    paddingBottom: 55,
    paddingLeft: 20
  },

  sectionTitle: {
    fontSize: 28,
    color: "black"
  },

  buttonG: {
    margin: 25,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 30
  },
  butt1: {
    backgroundColor: PRIMARY_COLOR,
    width: 50,
    height: 20,
    borderRadius: 8
  },
  sectT: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "200",
    color: "black",
    paddingTop: 18
  },
  imagescreen: {
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    
  },
  image:{
    height:heightPercentageToDP(50),
    resizeMode:"contain"
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
});
