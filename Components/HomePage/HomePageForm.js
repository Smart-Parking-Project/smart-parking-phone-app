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

const HomePageSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function HomePageForm({ navigation }) {
  return (
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
  );
}

const styles = StyleSheet.create({
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

  errorText: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 3,
    textAlign: "center",
  },
});
