import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";

import { useMutation, gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomePageSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

const AUTHENTICATE_USER = gql`
  mutation authenticateUser($username: String!, $password: String!) {
    authenticateUser(username: $username, password: $password) {
      id
      username
      email
      firstName
      lastName
      token
    }
  }
`;

export default function SignIn({ navigation }) {
  const [logInUser, { data, loading, error }] = useMutation(AUTHENTICATE_USER);

  const logIn = async (data) => {
    try {
      await AsyncStorage.setItem("token", data.authenticateUser.token);
      console.log("Data Saved");
    } catch (e) {
      // remove error
      console.log("Didn't save");
    }

    try {
      await AsyncStorage.setItem("id", data.authenticateUser.id);
    } catch (e) {
      // remove error
    }

    const userIDAdded = data.authenticateUser.id;

    navigation.navigate("DashboardHome");
  };

  if (data) {
    logIn(data);
  }

  if (error) {
    navigation.navigate("Error", { error: error.message });
    //return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}> Sign In </Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.footer}>
          <View>
            <Formik
              initialValues={{
                username: " ",
                password: " ",
              }}
              validationSchema={HomePageSchema}
              onSubmit={(values, actions) => {
                console.log(values);
                logInUser({
                  variables: {
                    username: values.username,
                    password: values.password,
                  },
                });

                actions.resetForm();
              }}
            >
              {(props) => (
                <View>
                  <View>
                    <Text style={styles.text_footer}>Username</Text>

                    <View style={styles.action}>
                      <Feather name="user" color="black" size={20} />

                      <TextInput
                        style={styles.textInput1}
                        placeholder="Username"
                        placeholderTextColor="black"
                        onChangeText={props.handleChange("username")}
                        value={props.values.username}
                        onBlur={props.handleBlur("username")}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ padding: 10 }}></View>

                  <View>
                    <Text style={styles.text_footer}>Password</Text>

                    <View style={styles.action}>
                      <Feather name="lock" color="black" size={20} />

                      <TextInput
                        style={styles.textInput1}
                        placeholder="Password"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        onChangeText={props.handleChange("password")}
                        value={props.values.password}
                        onBlur={props.handleBlur("password")}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ padding: 10 }}></View>
                  <View>
                    <TouchableOpacity
                      style={styles.buttonLogin}
                      onPress={props.handleSubmit}
                    >
                      <Text style={styles.text}>Sign In</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ padding: 3 }}></View>
                  <View>
                    <TouchableOpacity
                      style={styles.buttonSignUp}
                      onPress={() => navigation.navigate("Register")}
                    >
                      <Text style={styles.textSign}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0066CC",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },

  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    color: "black",
  },

  text_footer: {
    color: "black",
    fontSize: 18,
  },

  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },

  textInput1: {
    flex: 1,

    paddingLeft: 10,
    color: "black",
  },

  button: {
    alignItems: "center",
    marginTop: 50,
  },

  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonLogin: {
    marginTop: 4,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#0066CC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    alignContent: "center",
  },

  buttonSignUp: {
    marginTop: 4,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0066CC",
    alignContent: "center",
  },

  textSign: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#0066CC",
  },
});
