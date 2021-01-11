import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputBox(props) {
  return (
    <TextInput placeholder={props.name} style={styles.textInput}></TextInput>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
  },
});
