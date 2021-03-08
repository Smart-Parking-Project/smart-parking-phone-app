import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

export default function ParkingMap() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}> Parking Map </Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.footer}>
          <View style={styles.firstRow}>
            <View
              style={{
                width: 70,
                height: 130,
                backgroundColor: "#0066CC",
                marginLeft: 50,
                justifyContent: "center",
                borderWidth: 1,
              }}
            >
              <Text style={styles.text}>P1</Text>
            </View>
            <View
              style={{
                width: 70,
                height: 130,
                backgroundColor: "white",
                marginRight: 50,
                justifyContent: "center",
                borderWidth: 1,
              }}
            >
              <Text style={styles.text}>P2</Text>
            </View>
          </View>

          <View style={{ padding: 20 }}></View>

          <View style={styles.firstRow}>
            <View
              style={{
                width: 70,
                height: 130,
                backgroundColor: "#0066CC",
                justifyContent: "center",
                borderWidth: 1,
                // marginLeft: 50,
              }}
            >
              <Text style={styles.text}>P3</Text>
            </View>
            <View
              style={{
                width: 70,
                height: 130,
                backgroundColor: "#0066CC",
                justifyContent: "center",
                borderWidth: 1,
              }}
            >
              <Text style={styles.text}>P4</Text>
            </View>

            <View
              style={{
                width: 70,
                height: 130,
                backgroundColor: "white",
                justifyContent: "center",
                borderWidth: 1,
                //marginRight: 50,
              }}
            >
              <Text style={styles.text}>P5</Text>
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              color: "#0066CC",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Blue = full
          </Text>

          <View style={{ padding: 2 }}></View>
          <Text
            style={{
              fontWeight: "bold",
              color: "#0066CC",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            White = empty
          </Text>
        </View>
      </Animatable.View>
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
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});
