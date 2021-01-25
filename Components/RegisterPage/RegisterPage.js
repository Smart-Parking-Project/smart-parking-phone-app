import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <View style={{ padding: 20, backgroundColor: "white" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <Text style={styles.mainTitle}>Register</Text>
          </View>

          <View style={{ padding: 15 }}></View>

          <RegisterForm></RegisterForm>

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
