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

const RegisterSchema = yup.object({
  name: yup.string(),
  cardNumber: yup.string(),
  expiryDateMonth: yup.string(),
  expiryDateYear: yup.string(),
  securityCode: yup.string(),
});

export default function Payment() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}> Payment </Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.insideFooter}>
          <View>
            <Text style={styles.total}> Total : </Text>
          </View>

          <View style={{ padding: 5 }}></View>
          <View>
            <Formik
              initialValues={{
                name: " ",
                cardNumber: " ",
                expiryDateMonth: " ",
                expiryDateYear: " ",
                securityCode: " ",
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values, actions) => {
                console.log(values);
                actions.resetForm();
                //navigation.navigate("Dashboard");
              }}
            >
              {(props) => (
                <View>
                  <View>
                    <Text style={styles.text_footer}>Name</Text>

                    <View style={styles.action}>
                      <Feather name="user" color="black" size={20} />

                      <TextInput
                        style={styles.textInput1}
                        placeholder="Name"
                        placeholderTextColor="black"
                        onChangeText={props.handleChange("name")}
                        value={props.values.name}
                        onBlur={props.handleBlur("name")}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ padding: 3 }}></View>

                  <View>
                    <Text style={styles.text_footer}>Card Number</Text>

                    <View style={styles.action}>
                      <TextInput
                        style={styles.textInput1}
                        placeholder="Card Number"
                        onChangeText={props.handleChange("cardNumber")}
                        value={props.values.cardNumber}
                        onBlur={props.handleBlur("cardNumber")}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ padding: 3 }}></View>

                  <View>
                    <Text style={styles.text_footer}>Expiry Date (Month)</Text>
                    <View style={styles.action}>
                      <TextInput
                        style={styles.textInput1}
                        placeholder="Expiry Date (Month)"
                        placeholderTextColor="black"
                        onChangeText={props.handleChange("expiryDateMonth")}
                        value={props.values.expiryDateMonth}
                        onBlur={props.handleBlur("expiryDateMonth")}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ padding: 3 }}></View>

                  <View>
                    <Text style={styles.text_footer}>Expiry Date (Year)</Text>
                    <View style={styles.action}>
                      <TextInput
                        style={styles.textInput1}
                        placeholder="Expiry Date (Year)"
                        onChangeText={props.handleChange("expiryDateYear")}
                        value={props.values.expiryDateYear}
                        onBlur={props.handleBlur("expiryDateYear")}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ padding: 3 }}></View>

                  <View>
                    <Text style={styles.text_footer}>Security Code</Text>
                    <View style={styles.action}>
                      <Feather name="lock" color="black" size={20} />
                      <TextInput
                        style={styles.textInput1}
                        placeholder="Security Code"
                        onChangeText={props.handleChange("securityCode")}
                        value={props.values.securityCode}
                        onBlur={props.handleBlur("securityCode")}
                        secureTextEntry={true}
                      ></TextInput>
                    </View>
                  </View>

                  <View style={{ padding: 3 }}></View>
                  <View style={{ padding: 3 }}></View>

                  <View>
                    <TouchableOpacity
                      style={styles.buttonLogin}
                      onPress={props.handleSubmit}
                    >
                      <Text style={styles.text}>Pay</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
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
    fontSize: 18,
    textAlign: "center",
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
