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
    navigation.navigate("Dashboard");
  };

  if (data) {
    logIn({ data });
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={{ padding: 20, backgroundColor: "white" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <Text style={styles.mainTitle}>Register</Text>
          </View>

          <View style={{ padding: 15 }}></View>

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
                  <TextInput
                    style={styles.textInput}
                    placeholder="Username*"
                    onChangeText={props.handleChange("username")}
                    value={props.values.username}
                    onBlur={props.handleBlur("username")}
                  ></TextInput>

                  <Text style={styles.errorText}>
                    {props.touched.username && props.errors.username}
                  </Text>

                  <TextInput
                    style={styles.textInput}
                    placeholder="Email*"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                    onBlur={props.handleBlur("email")}
                  ></TextInput>

                  <Text style={styles.errorText}>
                    {props.touched.email && props.errors.email}
                  </Text>

                  <TextInput
                    style={styles.textInput}
                    placeholder="Password*"
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                    onBlur={props.handleBlur("password")}
                  ></TextInput>

                  <Text style={styles.errorText}>
                    {props.touched.password && props.errors.password}
                  </Text>

                  <TextInput
                    style={styles.textInput}
                    placeholder="Confirm Password*"
                    onChangeText={props.handleChange("confirmPassword")}
                    value={props.values.confirmPassword}
                    onBlur={props.handleBlur("confirmPassword")}
                  ></TextInput>

                  <Text style={styles.errorText}>
                    {props.touched.confirmPassword &&
                      props.errors.confirmPassword}
                  </Text>

                  <TextInput
                    style={styles.textInput}
                    placeholder="First Name"
                    onChangeText={props.handleChange("firstName")}
                    value={props.values.firstName}
                    onBlur={props.handleBlur("firstName")}
                  ></TextInput>

                  <Text style={styles.errorText}>
                    {props.touched.firstName && props.errors.firstName}
                  </Text>

                  <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"
                    onChangeText={props.handleChange("lastName")}
                    value={props.values.lastName}
                    onBlur={props.handleBlur("lastName")}
                  ></TextInput>

                  <Text style={styles.errorText}>
                    {" "}
                    {props.touched.lastName && props.errors.lastName}
                  </Text>

                  <View></View>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={props.handleSubmit}
                  >
                    <Text style={styles.text}>Create Account</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>

          <View style={{ padding: 50 }}></View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },

  button: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 70,
    marginRight: 70,
    backgroundColor: "#003FB6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    alignContent: "center",
  },

  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
  },
});
