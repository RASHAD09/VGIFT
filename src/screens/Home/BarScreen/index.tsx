import React from "react";
import { Text, View, Image } from "react-native";

import styles from "./styles";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageText}>
      <Image
        style={styles.fimg}
        source={require("../../../assets/icons/BarTabs/saudi-arabiasign.png")}
      />
      <Text style={styles.text}> 100% SAUDI </Text>
      </View >

      <View style={styles.imageText}>

      <Image
        style={styles.fimg}
        source={require("../../../assets/icons/BarTabs/orginal.png")}
      />
      <Text style={styles.text}> GENUINE PRODUCTS </Text>
      </View>
      <View style={styles.imageText}>

      <Image
        style={styles.fimg}
        source={require("../../../assets/icons/BarTabs/fastshipping.png")}
      />
      <Text style={styles.text}> FAST SHIPPING </Text>
      </View>
    </View>
  );
};
