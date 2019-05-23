import { Platform } from "react-native";

const routes = [
  {
    to: "/",
    icon: Platform.OS === "ios" ? `ios-home` : "md-home"
  },
  {
    to: "/categories",
    icon: Platform.OS === "ios" ? `ios-list` : "md-list"
  },
  {
    to: "/notification",
    icon: Platform.OS === "ios" ? `ios-notifications` : "md-notifications"
  },
  // {
  //   to: "/myapps",
  //   icon: Platform.OS === "ios" ? "ios-apps" : "md-apps"
  // },
  {
    to: "/profile",
    icon: Platform.OS === "ios" ? "ios-contact" : "md-contact"
  }
];

export default routes;
