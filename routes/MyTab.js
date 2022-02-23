import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AboutStack, HomeStack } from "./MyStack";

const MyTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="About" component={AboutStack} />
    </Tab.Navigator>
  );
};

export default MyTab;
