import React from "react";
import { View, Text, StyleSheet, ClippingRectangle } from "react-native";
import * as Animatable from "react-native-animatable";
import { gql, useQuery } from "@apollo/client";

export default function ParkingMap() {
  const GET_PARKINGSPACE = gql`
    query ParkingSpace {
      getAllParkingSpace {
        id
        spaceNumber
        parkingLotIdentifier
        isOccupied
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PARKINGSPACE, {
    pollInterval: 500,
  });

  if (loading) {
    return <Text>loading</Text>;
  }
  if (error) {
    console.log(console.error());
  }

  if (data) {
    const spaces = data["getAllParkingSpace"];

    console.log(spaces[0]["isOccupied"]);
    // for (const space of spaces) {
    //   console.log(
    //     `current state og parking number ${space.spaceNumber} is ${space.isOccupied}`
    //   );
    // }

    let p1Status = spaces[0]["isOccupied"];
    let p2Status = spaces[1]["isOccupied"];
    let p3Status = spaces[2]["isOccupied"];

    let p1Color = p1Status ? "#0066CC" : "white";
    let p2Color = p2Status ? "#0066CC" : "white";
    let p3Color = p3Status ? "#0066CC" : "white";

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
                  backgroundColor: p1Color,
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
                  backgroundColor: p2Color,
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
                  backgroundColor: p3Color,
                  justifyContent: "center",
                  borderWidth: 1,
                  marginLeft: 50,
                }}
              >
                <Text style={styles.text}>P3</Text>
              </View>
              <View
                style={{
                  width: 70,
                  height: 130,
                  backgroundColor: "white",
                  justifyContent: "center",
                  borderWidth: 1,
                  marginRight: 50,
                }}
              >
                <Text style={styles.text}>P4</Text>
              </View>

              {/* <View
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
              </View> */}
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

  // let p1Status = data.getAllParkingSpace[0].isOccupied;
  // let p2Status = data.getAllParkingSpace[1].isOccupied;
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
