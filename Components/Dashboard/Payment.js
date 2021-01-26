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
  name: yup.string(),
  cardNumber: yup.string(),
  expiryDateMonth: yup.string(),
  expiryDateYear: yup.string(),
  securityCode: yup.string(),
});

export default function Payment() {
  return (
    <View style={{ padding: 10 }}>
      <View>
        <Text style={styles.mainTitle}>Payment</Text>
      </View>

      <View style={{ padding: 15 }}>
        <Text style={styles.text}>Time: {"\n"}Total:</Text>
      </View>

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
          //onSubmit={onSubmit}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
            addUser({
              variables: {
                name: values.name,
                cardNumber: values.cardNumber,
                expiryDateMonth: values.expiryDateMonth,
                expiryDateYear: values.expiryDateYear,
                securityCode: values.securityCode,
              },
            });
          }}
        >
          {(props) => (
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Name"
                onChangeText={props.handleChange("name")}
                //value={props.values.name}
                onBlur={props.handleBlur("name")}
              ></TextInput>

              <Text style={styles.errorText}>
                {props.touched.name && props.errors.name}
              </Text>

              <TextInput
                style={styles.textInput}
                placeholder="Card Number"
                onChangeText={props.handleChange("cardNumber")}
                //value={props.values.cardNumber}
                onBlur={props.handleBlur("cardNumber")}
              ></TextInput>

              <Text style={styles.errorText}>
                {props.touched.cardNumber && props.errors.cardNumber}
              </Text>

              <TextInput
                style={styles.textInput}
                placeholder="Expiry Date (Month)"
                onChangeText={props.handleChange("expiryDateMonth")}
                //value={props.values.expiryDateMonth}
                onBlur={props.handleBlur("expiryDateMonth")}
              ></TextInput>

              <Text style={styles.errorText}>
                {props.touched.expiryDateMonth && props.errors.expiryDateMonth}
              </Text>

              <TextInput
                style={styles.textInput}
                placeholder="Expiry Date (Year)"
                onChangeText={props.handleChange("expiryDateYear")}
                //value={props.values.expiryDateYear}
                onBlur={props.handleBlur("expiryDateYear")}
              ></TextInput>

              <Text style={styles.errorText}>
                {props.touched.expiryDateYear && props.errors.expiryDateYear}
              </Text>

              <TextInput
                style={styles.textInput}
                placeholder="Security Code"
                onChangeText={props.handleChange("securityCode")}
                //value={props.values.securityCode}
                onBlur={props.handleBlur("securityCode")}
              ></TextInput>

              <Text style={styles.errorText}>
                {props.touched.securityCode && props.errors.securityCode}
              </Text>

              <View></View>

              <TouchableOpacity
                style={styles.button}
                onPress={props.handleSubmit}
              >
                <Text style={styles.text}>Pay</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
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
});
