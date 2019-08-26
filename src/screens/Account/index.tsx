import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity ,AsyncStorage} from "react-native";
import styles from "./styles";



export default class AccountLogedOut extends Component {

  constructor(props) {
    super(props);
  } 
  async removeToken() {
    try {
      await AsyncStorage.removeItem("token");
    } catch (error) {
      console.log("Wrong Wrong");
    }
  }


  render(){
     return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Image
        style={styles.avatar}
        source={require("../../assets/icons/AccountIcon/UserGrey.png")}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>User Name</Text>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("AccountLogedOut")
              this.removeToken() 
              }}
              style={styles.buttonContainer}
            >
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.item}
            onPress={() => this.props.navigation.navigate("PersonalInfo")}
          >
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/AccountIcon/profile.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info2}>Personal information</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/AccountIcon/orderlist.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info2}>My Orders</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/AccountIcon/address.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info2}>Address</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/AccountIcon/password.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info2}>Change Password</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/AccountIcon/global.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info2}>اللغة العربية</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/AccountIcon/notification.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info2}>Notification</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/AccountIcon/gift.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info2}>My Custom Gift</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/AccountIcon/terms.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info2}>Terms & Confition</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/AccountIcon/return.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info2}>Return Policy</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/AccountIcon/protect.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info2}>Privacy Policy</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/AccountIcon/contactUs.png")}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info2}>Contact Us</Text>
            </View>
          </View>
        </View>

        {/* ICONS SOCIAL IN BOTTOM */}
        {/* ICONS SOCIAL IN BOTTOM */}

        {/* ICONS SOCIAL IN BOTTOM */}

        <View style={styles.Follow}>
          <Text>Follow Us</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 30,
            marginRight: 30
          }}
        >
          <Image
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50
            }}
            source={require("../../assets/icons/AccountIcon/snapchat.png")}
          />
          <Image
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50
            }}
            source={require("../../assets/icons/AccountIcon/facebook.png")}
          />
          <Image
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50
            }}
            source={require("../../assets/icons/AccountIcon/instagram.png")}
          />
          <Image
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50
            }}
            source={require("../../assets/icons/AccountIcon/twitter.png")}
          />
          <Image
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50
            }}
            source={require("../../assets/icons/AccountIcon/whatsapp.png")}
          />
        </View>
      </View>
    </View>
  );
          }
}
