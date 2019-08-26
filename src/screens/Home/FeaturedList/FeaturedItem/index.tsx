import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./styles";
import { Icon } from 'react-native-elements';
const Add = require("../../../../assets/icons/add.png");
const Like = require("../../../../assets/icons/like.png");
// interface to tell the component what to receive
// interface Props {
//   text: String;
//   image: any;
//   discount;
//   price;
// }
export default (props: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}
    
    >

      <View style={styles.discountContainer}>
        <Text style={styles.discount}>{props.discount}</Text>
      </View>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.divider} />
      <Text style={styles.price}>{props.price}</Text>
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.buttonsContainer}>
      <Image source={Add} style={styles.icon} />

      <Icon
        
       name='heart-o'
        type='font-awesome'
        color='#000'
        onPress={() => console.log('hello')}
   />        
   {/* heart-outline */}
        {/* gamepad-round-outline */}
      </View>
    </TouchableOpacity>
  );
};
