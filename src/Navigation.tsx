import React from "react";
import { Image } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { PRIMARY_COLOR } from "./assets/colors";
import Login from "./screens/Login";
import Home from "./screens/Home";
import SplashScreen from "./screens/SplashScreen";
import Explore from "./screens/Explore";
import Registration from "./screens/Registration";
import ForgetPass from "./screens/ForgetPass";
import products from "./screens/products";
import CategoryList from "./screens/CategoryList";
import Category1 from "./screens/CategoryList/Category1"
import Account from "./screens/Account";
import PersonalInfo from "./screens/Account/PersonalInfo";
import AccountLogedOut from "./screens/Account/AccountLogedOut";
import Verification from "./screens/Verification";
import Confirm from "./screens/Confirm";
import Wrong from "./screens/Wrong";



const HomeNavigator = createStackNavigator(
  {
    home: { screen: Home }
  },
  {
    headerMode: "none"
  }
);

const BottomNavigator = createBottomTabNavigator(
  {
    home: { screen: HomeNavigator },
    profile: { screen: Account },
    fav: { screen: Verification },
    cart: { screen: Login },
    gift: { screen: Category1 },
    categories: { screen: CategoryList }
    
    
  },

  {
    tabBarOptions: {
      activeTintColor: PRIMARY_COLOR,
      inactiveTintColor: "#BDBDBD",
      showLabel: true,
      style: { backgroundColor: "white",paddingHorizontal:7 }
    },

    defaultNavigationOptions: ({ navigation }: { navigation: any }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "home")
          iconName = require("./assets/icons/bottomTabs/home.png");
        if (routeName === "profile")
          iconName = require("./assets/icons/bottomTabs/profile.png");
        if (routeName === "fav")
          iconName = require("./assets/icons/bottomTabs/fav.png");
        if (routeName === "cart")
          iconName = require("./assets/icons/bottomTabs/cart.png");
        if (routeName === "gift")
          iconName = require("./assets/icons/bottomTabs/gift.png");
        if (routeName === "categories")
          iconName = require("./assets/icons/bottomTabs/categories.png");
        return (
          <Image
            resizeMode={"contain"}
            source={iconName}
            style={{ tintColor, width: 20, height: 20}}
          />
        );
      }
    })
  }
);
const GuestNav = createStackNavigator(
  {
    explore: { screen: Explore },
    registration: { screen: Registration },
    login: { screen: Login },
    forgetPass:{screen:ForgetPass},
    products:{screen:products},
    CategoryList:{screen:CategoryList},
    category1:{screen:Category1},
    PersonalInfo:{ screen:PersonalInfo },
    AccountLogedOut:{screen:AccountLogedOut},
    Verification:{screen:Verification},
    Confirm:{screen:Confirm},
    Wrong:{screen:Wrong}


  },
  {
    headerMode: "none"
  }
);
const AppNavigator = createSwitchNavigator({
  splash: { screen: SplashScreen },
  guest: { screen: GuestNav },
  app: BottomNavigator
});

export default createAppContainer(AppNavigator);
