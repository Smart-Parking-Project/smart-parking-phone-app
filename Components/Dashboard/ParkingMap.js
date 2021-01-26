import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ParkingMap() {
  return (
    <View style={{ padding: 20 }}>
      <View>
        <Text style={styles.mainTitle}>Parking Map</Text>
      </View>

      <View style={{ padding: 50 }}></View>

      <View style={styles.firstRow}>
        <View
          style={{
            width: 65,
            height: 100,
            backgroundColor: "green",
            marginLeft: 50,
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>P1</Text>
        </View>
        <View
          style={{
            width: 65,
            height: 100,
            backgroundColor: "green",
            marginRight: 50,
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>P2</Text>
        </View>
      </View>

      <View style={{ padding: 70 }}></View>

      <View style={styles.firstRow}>
        <View
          style={{
            width: 65,
            height: 100,
            backgroundColor: "green",
            justifyContent: "center",
            // marginLeft: 50,
          }}
        >
          <Text style={styles.text}>P3</Text>
        </View>
        <View
          style={{
            width: 65,
            height: 100,
            backgroundColor: "green",
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>P4</Text>
        </View>

        <View
          style={{
            width: 65,
            height: 100,
            backgroundColor: "green",
            justifyContent: "center",
            //marginRight: 50,
          }}
        >
          <Text style={styles.text}>P5</Text>
        </View>
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

  firstRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
