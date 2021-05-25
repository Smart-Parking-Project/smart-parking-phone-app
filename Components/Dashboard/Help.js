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
        <View style={styles.insideFooter}>
          <View>
            <View style={{ padding: 5 }}></View>
            <Text style={styles.text}>
              1. Press the enter button to enter the lot. This will start the
              timer.
            </Text>

            <View style={{ padding: 5 }}></View>

            <View style={{ padding: 1 }}>
              <Text style={styles.text}>
                2. Use the parking map to find an empty spot. A blue spot means
                it is full while a white spot is empty.
              </Text>
            </View>

            


            <View style={{ padding: 5 }}></View>

            <View style={{ padding: 1 }}>
              <Text style={styles.text}>
                3. Once you are done parking, press the stop button on the
                dashboard. This will stop the timer and redirect to payment.
              </Text>
            </View>

            <View style={{ padding: 5 }}></View>
            <View style={{ padding: 1 }}>
              <Text style={styles.text}>4. Pay for parking.</Text>
            </View>

            <View style={{ padding: 5 }}></View>
            <View style={{ padding: 1 }}>
              <Text style={styles.text}>
                5. Press the exit button to leave the lot.
              </Text>
            </View>
          </View>
        </View>
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
    color: "#0066CC",
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

  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },

  button: {
    alignItems: "center",
    marginTop: 50,
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
