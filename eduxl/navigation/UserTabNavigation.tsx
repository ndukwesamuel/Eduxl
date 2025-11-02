import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";

// Screens
// import Home from "../../screens/Customerinterface/Home";
import Account from "../../screens/Customerinterface/Account/Account";
import Guests from "../../screens/Customerinterface/Guest/Guests";
import Neigborhood from "../../screens/Customerinterface/Neigborhood";
import Errand from "../../screens/Customerinterface/Errands/Errand";

// Components
import {
  CustomTabButton,
  Tabcomponent,
} from "../../components/shared/naviagetion";
import Home from "../screens/Home";
import DisplayAvaliableSubject from "../screens/displayAvaliableSubject";

const Tab = createBottomTabNavigator();

const UserTabNavigation = () => {
  const { userProfile_data } = useSelector((state) => state.ProfileSlice);
  const isGuest = userProfile_data?.user?.isGuest;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 65,
          ...styles.shadow,
        },
        tabBarLabelStyle: {
          color: "white",
        },
      }}
    >
      {/* For Non-Guests (5 tabs) - Errands comes after Home */}

      {/* Account (Always Last) */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: "#005091",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tabcomponent
              focused={focused}
              iconFocused={require("../../assets/images/Account2.png")}
              iconUnfocused={require("../../assets/images/Account.png")}
              label="Account"
              containerStyle={{ alignItems: "center", top: 10 }}
              texttStyle={{ color: "#000000" }}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="SubjectDisplay"
        component={DisplayAvaliableSubject}
        options={{
          tabBarActiveTintColor: "#005091",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tabcomponent
              focused={focused}
              iconFocused={require("../../assets/images/Account2.png")}
              iconUnfocused={require("../../assets/images/Account.png")}
              label="Account"
              containerStyle={{ alignItems: "center", top: 10 }}
              texttStyle={{ color: "#000000" }}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default UserTabNavigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
