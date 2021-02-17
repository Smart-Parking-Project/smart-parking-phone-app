import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

//import { useForm } from "../util/hooks";
import { useForm } from "react-hook-form";

export default function RegisterForm({ navigation }) {
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

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
        token
        user {
          id
          username
          email
          firstName
          lastName
        }
      }
    }
  `;

  const [addUser, { loading }] = useMutation(ADD_NEW_USER, {
    update(_, result) {
      navigation.navigation("Dashboard");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={onChange}
          error={!!errors.username}
          value={values.username}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={onChange}
          error={!!errors.email}
          value={values.email}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={onChange}
          error={!!errors.password}
          value={values.password}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          onChangeText={onChange}
          error={!!errors.confirmPassword}
          value={values.confirmPassword}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          onChangeText={onChange}
          error={!!errors.firstName}
          value={values.firstName}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          onChangeText={onChange}
          error={!!errors.lastName}
          value={values.lastName}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  errorText: {
    color: "red",
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 3,
    textAlign: "center",
  },
});
