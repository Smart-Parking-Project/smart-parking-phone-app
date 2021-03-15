import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import moment from "moment";
import { useState } from "react";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

export default function Dashboard({ navigation }) {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  //const [stopWatchTime, setStopWatchTime] = useState(0);

  let stopWatchTime = 0;

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("token");
    } catch (e) {
      // remove error
    }
    navigation.navigate("Home");
  };

  return (
    <View>
      <View
        style={{
          width: 375,
          height: 65,
          backgroundColor: "#0066CC",
        }}
      >
        {/* <View style={{ padding: 20 }}>
          <View style={{ padding: 2 }}></View>
          <Text style={styles.text}>Home</Text>
        </View> */}

        <View>
          <TouchableOpacity style={styles.buttonLogout} onPress={removeToken}>
            <Text style={styles.text3}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ padding: 30 }}>
        <Text style={styles.mainTitle}>Welcome to Smart Parking!</Text>
      </View>

      {/* <View style={{ padding: 10 }}>
        <Image source={require("../../assets/1.png")}></Image>
      </View> */}

      <View style={{ padding: 50 }}></View>
      <View style={{ padding: 50 }}></View>
      <View style={{ padding: 10 }}></View>
      {/* <View style={{ padding: 50 }}>
        <Text style={{ color: "#0066CC", textAlign: "center" }}>
          Press the button below to enter the lot
        </Text>

        <View style={{ padding: 5 }}>
          <View>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.text2}>ENTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}

      <Text style={styles.text4}>Press the button below to enter the lot</Text>

      <View style={{ padding: 5 }}></View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!isStopwatchStart) {
            setIsStopwatchStart(!isStopwatchStart);
            console.log(stopWatchTime);
          } else {
            setIsStopwatchStart(!isStopwatchStart);
            console.log(stopWatchTime);
          }
          // setIsStopwatchStart(!isStopwatchStart);
          // setResetStopwatch(false);
        }}
      >
        <Text style={styles.text2}>{!isStopwatchStart ? "ENTER" : "STOP"}</Text>
      </TouchableOpacity>

      <View style={{ padding: 5 }}></View>

      <Stopwatch
        laps
        msecs
        start={isStopwatchStart}
        // To start
        reset={resetStopwatch}
        // To reset
        options={options}
        getTime={(time) => {
          stopWatchTime = time;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 4,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 120,
    marginRight: 120,
    backgroundColor: "#0066CC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    alignContent: "center",
  },
  text: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0066CC",
  },
  timer: {
    fontSize: 30,
    textAlign: "center",
    color: "#0066CC",
  },

  text2: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  text3: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },

  text4: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "#0066CC",
  },

  buttonLogout: {
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 150,
    marginRight: 150,
    backgroundColor: "#0066CC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
});

const options = {
  // container: {
  //   padding: 5,
  //   borderRadius: 5,
  //   width: 220,
  //   alignContent: "center",
  // },
  text: {
    fontSize: 30,
    color: "#0066CC",
    marginLeft: 7,
    textAlign: "center",
  },
};
