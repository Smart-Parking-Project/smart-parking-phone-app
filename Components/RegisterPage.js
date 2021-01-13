import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <View style={{ padding: 20, backgroundColor: "white" }}>
      <View>
        <Text style={styles.mainTitle}>Register</Text>
      </View>

      <View style={{ padding: 20 }}></View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(username) => setUsername(username)}
        ></TextInput>
      </View>

      <View style={{ padding: 5 }}></View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        ></TextInput>
      </View>

      <View style={{ padding: 5 }}></View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
      </View>

      <View style={{ padding: 5 }}></View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          onChangeText={(firstName) => setFirstName(firstName)}
        ></TextInput>
      </View>

      <View style={{ padding: 5 }}></View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          onChangeText={(lastName) => setLastName(lastName)}
        ></TextInput>
      </View>

      <View style={{ padding: 15 }}></View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Create Account</Text>
      </TouchableOpacity>

      <View style={{ padding: 65 }}></View>
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
