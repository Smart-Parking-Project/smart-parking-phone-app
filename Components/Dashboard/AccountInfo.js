import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AccountInfo() {
  return (
    <View style={{ padding: 20 }}>
      <View>
        <Text style={styles.mainTitle}>Account Info</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
