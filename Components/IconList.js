import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default function iconList(navigation) {

  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View>
        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Register Page")}>
          <Text style={{ fontSize: 20 }}>Register</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 20 }}>Home</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 20 }}>FAQ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "grey",
    borderWidth: 1,
    alignContent: "center",
    backgroundColor: "grey",
    padding: 10,
  },
});
