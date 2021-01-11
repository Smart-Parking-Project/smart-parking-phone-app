import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import InputBox from "./InputBox";

export default function RegisterPage() {
  return (
    <View style={{ padding: 20, backgroundColor: "white" }}>
      <View>
        <Text style={styles.mainTitle}>Register</Text>
      </View>

      <View style={{ padding: 20 }}></View>

      <View>
        <InputBox name="First Name"></InputBox>
      </View>

      <View style={{ padding: 5 }}></View>

      <View>
        <InputBox name="Last Name"></InputBox>
      </View>

      <View style={{ padding: 5 }}></View>

      <View>
        <InputBox name="Username"></InputBox>
      </View>

      <View style={{ padding: 5 }}></View>

      <View>
        <InputBox name="Address"></InputBox>
      </View>

      <View style={{ padding: 5 }}></View>

      <View>
        <InputBox name="License Plate"></InputBox>
      </View>

      <View style={{ padding: 5 }}></View>

      <View>
        <InputBox name="Email"></InputBox>
      </View>

      <View style={{ padding: 5 }}></View>

      <View>
        <InputBox name="Password"></InputBox>
      </View>

      <View style={{ padding: 10 }}></View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Create Account</Text>
      </TouchableOpacity>

      <View style={{ padding: 20 }}></View>
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
    backgroundColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    alignContent: "center",
  },
});
