import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Dashboard from "./Dashboard";
import ParkingMap from "./ParkingMap";
import Payment from "./Payment";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="white"
      barStyle={{ backgroundColor: "#0066CC" }}
    >
      <Tab.Screen
        name="Parking Map"
        component={ParkingMap}
        options={{
          tabBarLabel: "Parking Map",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="parking" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarLabel: "Payment",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="currency-usd-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
