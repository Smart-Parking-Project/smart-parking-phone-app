import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Dashboard({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Parking Map")}
        >
          <Text style={styles.text}>Parking Map</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 10 }}></View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={styles.text}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10 }}></View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AccountInfo")}
        >
          <Text style={styles.text}>Account Info</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10 }}></View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 60,
    marginRight: 60,
    backgroundColor: "#003FB6",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "black",
    alignContent: "center",
  },
  text: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});