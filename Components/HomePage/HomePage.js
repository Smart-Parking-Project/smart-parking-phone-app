//import * as React from "react";
import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  Keyboard,
  TouchableOpacityBase,
} from "react-native";

import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default function HomePage({ navigation }) {
  return (
    <ImageBackground source={require("../../assets/2.png")} style={styles.main}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ padding: 75 }}></View>
        <View>
          <Text style={styles.mainTitle}>Smart Parking </Text>
        </View>
        <View style={{ padding: 50 }}></View>
        {/* <View>
          <Image source={require("../../assets/2.png")}></Image>
        </View> */}

        {/* <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("DashboardHome")}
          >
            <Text style={styles.text}>Test</Text>
          </TouchableOpacity>
        </View> */}

        <View style={{ padding: 50 }}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("LogIn")}
            >
              <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 3 }}></View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 5 }}></View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 70,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  button: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 60,
    marginRight: 60,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    alignContent: "center",
  },
  buttonLogin: {
    marginTop: 4,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 90,
    marginRight: 90,
    backgroundColor: "#003FB6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    alignContent: "center",
  },

  text: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },

  textInput: {
    borderColor: "white",
    borderWidth: 1,
    padding: 15,
    color: "white",
  },

  main: {
    padding: 50,
    flex: 1,
  },
});

// const Stack = createStackNavigator();

// function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomePage}
//           options={{ headerShown: false }}
//         ></Stack.Screen>
//         <Stack.Screen name="Register" component={RegisterPage}></Stack.Screen>
//         <Stack.Screen
//           name="Dashboard"
//           component={Dashboard}
//           //headerLeft: null,
//           options={{ title: " ", headerLeft: null }}
//         ></Stack.Screen>
//         <Stack.Screen name="Parking Map" component={ParkingMap}></Stack.Screen>
//         <Stack.Screen
//           name="Payment"
//           component={Payment}
//           //options={{ title: "" }}
//         ></Stack.Screen>
//         <Stack.Screen name="AccountInfo" component={AccountInfo}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default AppNavigator;
