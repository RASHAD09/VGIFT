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
    camera: {
        width: 50,
        height: 50,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: "#D6D1C4",
        alignSelf:'center',
        marginTop:5,
        marginLeft:80,
        backgroundColor:"#fff"
      },
      containerT: {
       marginLeft:25,
      },
      inputContainer: {
        borderBottomColor: "#B7C3C4",
        borderBottomWidth: 1,
        width: "95%",
        height: 55,
        marginBottom: 28
      },
      inputs: {
        height: 45,
        borderBottomColor: "#FFFFFF",
      },
      
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
      width: widthPercentageToDP(90),
      elevation: 10,
      marginTop:80,

    },
    inputContainer2: {
      borderBottomColor: "#B7C3C4",
      borderBottomWidth: 1,
      width:widthPercentageToDP(99),
      height: 55,
      marginBottom: 28
    },
    
})