import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Formik } from "formik";
import * as yup from "yup";
import { useMutation, gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

import RegisterForm1 from "./RegisterForm1";
import RegisterForm from "./RegisterForm";
import { useEffect } from "react";

const ADD_NEW_USER = gql`
  mutation createNewUser(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $firstName: String
    $lastName: String
  ) {
    createNewUser(
      newUser: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      id
      email
      username
      firstName
      lastName
      token
    }
  }
`;
const RegisterSchema = yup.object({
  username: yup.string(),
  email: yup.string(),
  password: yup.string(),
  confirmPassword: yup.string(),
  firstName: yup.string(),
  lastName: yup.string(),
});

export default function RegisterPage({ navigation }) {
  const [addUser, { data, loading, error }] = useMutation(ADD_NEW_USER);

  const logIn = async (data) => {
    try {
      await AsyncStorage.setItem("token", data.token);
    } catch (e) {
      // remove error
    }
    navigation.navigate("DashboardHome");
  };

  if (data) {
    logIn({ data });
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}> Sign Up </Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.insideFooter}>
          <View>
            <Formik
              initialValues={{
                username: " ",
                email: " ",
                password: " ",
                confirmPassword: " ",
                firstName: " ",
                lastName: " ",
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values, actions) => {
                console.log(values);
                addUser({
                  variables: {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                    firstName: values.firstName,
                    lastName: values.lastName,
                  },
                });
                actions.resetForm();
                //navigation.navigate("Dashboard");
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

                  <View style={{ padding: 3 }}></View>

                  <View>
                    <Text style={styles.text_footer}>Email</Text>

                    <View style={styles.action}>
                      <Feather name="mail" color="black" size={20} />
                      <TextInput
                        style={styles.textInput1}
                        placeholder="Email*"
                        onChangeText={props.handleChange("email")}
                        value={props.values.email}
                        onBlur={props.handleBlur("email")}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ padding: 3 }}></View>

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

                  <View style={{ padding: 3 }}></View>

                  <View>
                    <Text style={styles.text_footer}>Confirm Password</Text>
                    <View style={styles.action}>
                      <Feather name="lock" color="black" size={20} />
                      <TextInput
                        style={styles.textInput1}
                        placeholder="Confirm Password*"
                        secureTextEntry={true}
                        onChangeText={props.handleChange("confirmPassword")}
                        value={props.values.confirmPassword}
                        onBlur={props.handleBlur("confirmPassword")}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ padding: 3 }}></View>

                  <View>
                    <Text style={styles.text_footer}>First Name</Text>
                    <View style={styles.action}>
                      <Feather name="user" color="black" size={20} />
                      <TextInput
                        style={styles.textInput1}
                        placeholder="First Name"
                        onChangeText={props.handleChange("firstName")}
                        value={props.values.firstName}
                        onBlur={props.handleBlur("firstName")}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ padding: 3 }}></View>

                  <View>
                    <Text style={styles.text_footer}>Last Name</Text>
                    <View style={styles.action}>
                      <Feather name="user" color="black" size={20} />
                      <TextInput
                        style={styles.textInput1}
                        placeholder="Last Name"
                        onChangeText={props.handleChange("lastName")}
                        value={props.values.lastName}
                        onBlur={props.handleBlur("lastName")}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ padding: 1 }}></View>

                  <View>
                    <TouchableOpacity
                      style={styles.buttonLogin}
                      onPress={props.handleSubmit}
                    >
                      <Text style={styles.text}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ padding: 3 }}></View>
                  <View>
                    <TouchableOpacity
                      style={styles.buttonSignUp}
                      onPress={() => navigation.navigate("LogIn")}
                    >
                      <Text style={styles.textSign}>Sign In</Text>
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
    paddingBottom: 40,
  },
  footer: {
    flex: 6,
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
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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

  insideFooter: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 1,
  },
});
