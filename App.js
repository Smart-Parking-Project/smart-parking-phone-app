import React from "react";
import { AppRegistry, View, Text } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./Components/Dashboard/Dashboard";
import ParkingMap from "./Components/Dashboard/ParkingMap";
import Payment from "./Components/Dashboard/Payment";
import HomePage from "./Components/HomePage/HomePage";
import SignIn from "./Components/HomePage/SignIn";
import SignUp from "./Components/RegisterPage/SignUp";
import TabNavigator from "./Components/Dashboard/TabNavigator";
import { LogBox } from "react-native";
import Exit from "./Components/Dashboard/Exit";
import Error from "./Components/RegisterPage/Error";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://192.168.0.48:5000/graphql",
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="LogIn" component={SignIn} options={{ headerShown: false }} ></Stack.Screen>
          <Stack.Screen name="Register" component={SignUp} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="DashboardHome" component={TabNavigator} options={{ headerShown: false }} ></Stack.Screen>
          <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>
          <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} ></Stack.Screen>
          <Stack.Screen name="Exit" component={Exit} options={{ headerShown: false }} ></Stack.Screen>
          <Stack.Screen name="Error" component={Error}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("Smart Parking", () => App);


