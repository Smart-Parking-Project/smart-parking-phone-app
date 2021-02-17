import * as React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  Keyboard,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import RegisterPage from "../RegisterPage/RegisterPage";
import HomePageForm from "./HomePageForm";
import Dashboard from "../Dashboard/Dashboard";
import ParkingMap from "../Dashboard/ParkingMap";
import Payment from "../Dashboard/Payment";
import AccountInfo from "../Dashboard/AccountInfo";

const HomePageSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

function HomePage({ navigation }) {
  return (
    <ImageBackground source={require("../../assets/2.png")} style={styles.main}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.mainTitle}>Smart Parking </Text>
        </View>

        <View style={{ padding: 80 }}></View>

        <View>
          <Formik
            initialValues={{
              email: " ",
              password: " ",
            }}
            validationSchema={HomePageSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              navigation.navigate("Dashboard");
              actions.resetForm();
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  placeholderTextColor="white"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                  onBlur={props.handleBlur("email")}
                ></TextInput>

                <Text style={styles.errorText}>
                  {props.touched.email && props.errors.email}
                </Text>

                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  placeholderTextColor="white"
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  onBlur={props.handleBlur("password")}
                ></TextInput>

                <Text style={styles.errorText}>
                  {props.touched.password && props.errors.password}
                </Text>

                <TouchableOpacity
                  style={styles.buttonLogin}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.text}>Log In</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>

        <View style={{ padding: 40 }}></View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={{ padding: 30 }}></View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
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
    fontSize: 20,
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
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          //headerLeft: null,
          options={{ title: " ", headerLeft: null }}
        ></Stack.Screen>
        <Stack.Screen name="Parking Map" component={ParkingMap}></Stack.Screen>
        <Stack.Screen
          name="Payment"
          component={Payment}
          //options={{ title: "" }}
        ></Stack.Screen>
        <Stack.Screen name="AccountInfo" component={AccountInfo}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
