import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const RegisterSchema = yup.object({
  username: yup.string().required().min(8),
  email: yup.string().required(),
  password: yup.string().required().min(8),
  firstName: yup.string(),
  lastName: yup.string(),
});

export default function RegisterForm() {
  return (
    <View>
      <Formik
        initialValues={{
          username: " ",
          email: " ",
          password: " ",
          firstName: " ",
          lastName: " ",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Username*"
              onChangeText={props.handleChange("username")}
              //value={props.values.username}
              onBlur={props.handleBlur("username")}
            ></TextInput>

            <Text style={styles.errorText}>
              {props.touched.username && props.errors.username}
            </Text>

            <TextInput
              style={styles.textInput}
              placeholder="Email*"
              onChangeText={props.handleChange("email")}
              //value={props.values.email}
              onBlur={props.handleBlur("email")}
            ></TextInput>

            <Text style={styles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>

            <TextInput
              style={styles.textInput}
              placeholder="Password*"
              onChangeText={props.handleChange("password")}
              //value={props.values.password}
              onBlur={props.handleBlur("password")}
            ></TextInput>

            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>

            <TextInput
              style={styles.textInput}
              placeholder="First Name"
              onChangeText={props.handleChange("firstName")}
              //value={props.values.firstName}
              onBlur={props.handleBlur("firstName")}
            ></TextInput>

            <Text style={styles.errorText}>
              {props.touched.firstName && props.errors.firstName}
            </Text>

            <TextInput
              style={styles.textInput}
              placeholder="Last Name"
              onChangeText={props.handleChange("lastName")}
              //value={props.values.lastName}
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
