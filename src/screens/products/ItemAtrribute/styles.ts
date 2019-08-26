import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    
  },
  price:{
    backgroundColor:"silver",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:2,


  },
  offer:{
    backgroundColor:"silver",
    marginHorizontal:16,
    paddingHorizontal:10,
    marginVertical:5,

  },
  wish:{
    flexDirection:"row",
    justifyContent:"space-between",

  },
  text:{
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color:"black",
  },
  colorText:{
    color:"black",

  },
  priceColor:{
    color:"gold",
    fontSize:16,
  }
});
