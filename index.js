import { AppRegistry, StatusBar } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
// make the status bar translucent
StatusBar.setTranslucent(false);
StatusBar.setBackgroundColor("transparent");
StatusBar.setBarStyle("dark-content");
AppRegistry.registerComponent(appName, () => App);
