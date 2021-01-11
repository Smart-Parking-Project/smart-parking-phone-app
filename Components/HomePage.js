import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import RegisterPage from "./RegisterPage";
import InputBox from "./InputBox";

function HomePage({ navigation }) {
  return (
    <View style={{ padding: 50, backgroundColor: "white" }}>
      <View>
        <Text style={styles.mainTitle}>Smart Parking </Text>
      </View>

      <View style={{padding:80}}></View>

      <>
        <View>
          <InputBox name="Email"></InputBox>
        </View>
      </>

      <View style={{ padding: 5 }}></View>

      <View>
        <InputBox name="Password"></InputBox>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>

      <View style={{ padding: 55 }}></View>

      <View>
        <TouchableOpacity
          style={{ alignContent: "center" }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 30 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 90,
    marginRight: 90,
    backgroundColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    alignContent: "center",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
