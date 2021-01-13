import React from "react";
import AppNavigator from "./Components/HomePage";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App() {
  return <AppNavigator></AppNavigator>;
}
