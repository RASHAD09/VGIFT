import { StyleSheet } from "react-native";
import { PRIMARY_COLOR,SECONDARY_COLOR } from "../../../assets/colors";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

export default StyleSheet.create({

    container:{
flex:1,

    },
    header:{
      backgroundColor:PRIMARY_COLOR ,
      height:180,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 70,
      borderWidth: 4,
      borderColor: "#D6D1C4",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:95,
      backgroundColor:"#fff"
    },
    name:{
      fontSize:22,
      color:"gold",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
      padding:10,

    },
    bodyContent: {
      padding:10,

      justifyContent:"center",
      alignItems:"center"
    },
    info:{
      fontSize:16,
      color: "#fff",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:5,
      height:30,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:5,
      width:100,
      borderRadius:30,
      backgroundColor: "red",
    },
    item:{
      flexDirection : 'row',
      borderBottomWidth:1,
      borderBottomColor:"#B7C3C8",
      paddingBottom:4,

    },
    infoContent:{
      alignItems:'flex-start',
      paddingLeft:5
    },
    iconContent:{
      alignItems:'flex-start',
      paddingRight:5,
      marginLeft:20,
      

    },
    icon:{
      width:27,
      height:27,
      marginTop:8,
    },
    info2:{
      fontSize:15,
      marginTop:8,
      color: "#000",
    },
  Follow:{
    justifyContent:"center",
    alignItems:"center",
    marginVertical:15,
  }
  });