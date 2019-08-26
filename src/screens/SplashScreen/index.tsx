import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ActivityIndicator } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import * as Animatable from "react-native-animatable";
interface Props {
  navigation;
}
export default class index extends Component<Props> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("guest");
    }, 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.winnerImage}
            source={require("../../assets/images/splash/winner.png")}
          />
          {/* <Animatable.View animation="pulse" iterationCount="infinite"> */}
            <Image
              style={styles.logo}
              source={require("../../assets/images/splash/logo.png")}
            />
          {/* </Animatable.View> */}
        </View>
        <View>
          <Text style={styles.footerText}>Loading...</Text>
          <Text style={styles.footerText}>© Copyright GIFT 2019</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 70,
    alignItems: "center",
  },
  winnerImage: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(25),
  },
  logo: {
    marginTop: 45,
    alignSelf: "center",
    width: widthPercentageToDP(50),
    height: heightPercentageToDP(25),
  },
  footerText: {
    color: "#BDBDBD",
    fontSize: 15,
    marginVertical: 3,
    textAlign: "center",
  },
});
