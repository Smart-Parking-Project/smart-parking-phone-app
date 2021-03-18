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
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

export default function Help() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}> Info </Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.insideFooter}></View>
      </Animatable.View>
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
  mainTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
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
    flex: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  insideFooter: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 1,
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

  total: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
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
});
