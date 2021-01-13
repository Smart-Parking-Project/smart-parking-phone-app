import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import RegisterPage from "./RegisterPage";
import { useState } from "react";

function HomePage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 50, backgroundColor: "white" }}>
      <View>
        <Text style={styles.mainTitle}>Smart Parking </Text>
      </View>

      <View style={{ padding: 80 }}></View>

      <>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          ></TextInput>
        </View>
      </>

      <View style={{ padding: 5 }}></View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
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
    backgroundColor: "#003FB6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "yellow",
    alignContent: "center",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
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
