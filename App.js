import React from "react";
import AppNavigator from "./Components/HomePage";
import { AppRegistry, View, Text } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://192.168.0.48:5000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppNavigator></AppNavigator>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("Smart Parking", () => App);
