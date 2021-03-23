import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useState, useEffect } from "react";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { cos } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useMutation, gql } from "@apollo/client";

const CREATE_PARKING_SESSION = gql`
  mutation createParkingSession(
    $userId: ID!
    $enterTime: String!
    $exitTime: String
    $enterDate: String!
    $exitDate: String
    $payAmount: String
    $elapsedTime: String
    $hasPaid: Boolean!
  ) {
    createParkingSession(
      userId: $userId
      newSession: {
        enterTime: $enterTime
        exitTime: $exitTime
        enterDate: $enterDate
        exitDate: $exitDate
        payAmount: $payAmount
        elapsedTime: $elapsedTime
        hasPaid: $hasPaid
      }
    ) {
      id
      enterTime
      exitTime
      enterDate
      exitDate
      elapsedTime
      payAmount
      hasPaid
      userId
    }
  }
`;

const END_PARKING_SESSION = gql`
  mutation endParkingSession(
    $id: ID!
    $exitTime: String!
    $exitDate: String!
    $elapsedTime: String!
  ) {
    endParkingSession(
      endSession: {
        id: $id
        exitTime: $exitTime
        exitDate: $exitDate
        elapsedTime: $elapsedTime
      }
    ) {
      id
      enterTime
      exitTime
      enterDate
      exitDate
      elapsedTime
      payAmount
      hasPaid
      userId
    }
  }
`;

export default function Dashboard({ navigation }) {
  const [createParking, { data, loading, error }] = useMutation(
    CREATE_PARKING_SESSION
  );

  const [endParking, { data: endP, loading1, error1 }] = useMutation(
    END_PARKING_SESSION
  );

  const parkingSessionID = async (data) => {
    try {
      await AsyncStorage.setItem("parkingID", data.createParkingSession.id);
      console.log(data.createParkingSession.id);
    } catch (e) {
      // remove error
    }
  };

  if (data) {
    parkingSessionID(data);
    console.log("Parking Session Created");
  }

  if (endP) {
    console.log("PARKING ENDED");
    console.log(endP.endParkingSession.payAmount);
    const payAmount = endP.endParkingSession.payAmount;
    const enterDate = endP.endParkingSession.enterDate;
    const enterTime = endP.endParkingSession.enterTime;
    const exitDate = endP.endParkingSession.exitDate;
    const exitTime = endP.endParkingSession.exitTime;
    const elapsedTime = endP.endParkingSession.elapsedTime;

    navigation.navigate("Payment", {
      payAmount: payAmount,
      enterDate: enterDate,
      enterTime: enterTime,
      exitDate: exitDate,
      exitTime: exitTime,
      elapsedTime: elapsedTime,
    });
  }

  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [start, setStart] = useState(null);
  //const [stopWatchTime, setStopWatchTime] = useState(0);
  const [elapsedParkingTime, setElapsedParkingTime] = useState(null);
  const [time, setTime] = useState(null);

  let stopWatchTime = 0;

  const [userID, setUserID] = useState(null);
  const [pID, setParkingID] = useState(null);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // const saveParkingAmount = async (endP) => {
  //   try {
  //     await AsyncStorage.setItem("payAmount", endP.endParkingSession.payAmount);
  //     console.log("Value Saved");
  //   } catch (e) {
  //     // remove error
  //   }

  //   navigation.navigate("Payment");
  // };

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("token");
    } catch (e) {
      // remove error
    }

    try {
      await AsyncStorage.removeItem("id");
    } catch (e) {
      // remove error
    }

    navigation.navigate("Home");
  };

  useEffect(() => {
    if (userID != null) {
      console.log("IN USE EFFECT");
      console.log(userID);
      var month = new Date().getMonth();
      var date = new Date().getDate();
      var year = new Date().getFullYear();
      var startDate =
        monthNames[month] + " " + date.toString() + ", " + year.toString();
      console.log(startDate);

      var hours = new Date().getHours();
      var min = new Date().getMinutes();
      var sec = new Date().getSeconds();

      var startTime =
        hours.toString() + ":" + min.toString() + ":" + sec.toString();
      console.log(startTime);

      createParking({
        variables: {
          userId: userID,
          enterTime: startTime,
          enterDate: startDate,
          hasPaid: false,
        },
      });
    }
  }, [userID]);

  useEffect(() => {
    if (pID != null) {
      console.log("pID use effect");
      console.log(pID);
      console.log(elapsedParkingTime);
      var month1 = new Date().getMonth();
      var date1 = new Date().getDate();
      var year1 = new Date().getFullYear();
      var endDate =
        monthNames[month1] + " " + date1.toString() + ", " + year1.toString();

      console.log(endDate);

      var hours1 = new Date().getHours();
      var min1 = new Date().getMinutes();
      var sec1 = new Date().getSeconds();

      var endTime =
        hours1.toString() + ":" + min1.toString() + ":" + sec1.toString();
      console.log(endTime);

      console.log(elapsedParkingTime.toString());

      endParking({
        variables: {
          id: pID,
          exitTime: endTime,
          exitDate: endDate,
          elapsedTime: elapsedParkingTime.toString(),
        },
      });
    }
  }, [pID, elapsedParkingTime]);

  const getUserID = () => {
    AsyncStorage.getItem("id").then((id1) => {
      setUserID(id1);
    });
  };

  const getParkingID = () => {
    AsyncStorage.getItem("parkingID").then((pID) => {
      setParkingID(pID);
    });
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
      <View style={{ padding:35 }}></View>
      <Text style={styles.text4}>Press the button below to enter the lot</Text>
      <View style={{ padding: 5 }}></View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!isStopwatchStart) {
            setIsStopwatchStart(!isStopwatchStart);
            console.log("ENTER PRESSED");
            console.log(stopWatchTime);
            var month = new Date().getMonth();
            var date = new Date().getDate();
            var year = new Date().getFullYear();
            var startDate =
              monthNames[month] +
              " " +
              date.toString() +
              ", " +
              year.toString();

            console.log(startDate);

            var hours = new Date().getHours();
            var min = new Date().getMinutes();
            var sec = new Date().getSeconds();

            var startTime =
              hours.toString() + ":" + min.toString() + ":" + sec.toString();
            console.log(startTime);

            setStart(startDate);
            setTime(startTime);

            getUserID();

            //console.log({ token2 });

            //console.log({ tokenValue });
          } else {
            setIsStopwatchStart(!isStopwatchStart);
            console.log("EXIT PRESSED");
            console.log(stopWatchTime);

            //setElapsedParkingTime(stopWatchTime);
            var month1 = new Date().getMonth();
            var date1 = new Date().getDate();
            var year1 = new Date().getFullYear();
            var endDate =
              monthNames[month1] +
              " " +
              date1.toString() +
              ", " +
              year1.toString();

            console.log(endDate);

            var hours1 = new Date().getHours();
            var min1 = new Date().getMinutes();
            var sec1 = new Date().getSeconds();

            var endTime =
              hours1.toString() + ":" + min1.toString() + ":" + sec1.toString();
            console.log(endTime);

            getParkingID();
            setElapsedParkingTime(stopWatchTime);
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

      <View style={{ padding: 5 }}></View>
      <Text style={styles.text5}> {start}</Text>

      <View style={{ padding: 2 }}></View>
      <Text style={styles.text5}> {time}</Text>
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

  text5: {
    fontSize: 20,
    textAlign: "center",
    color: "#0066CC",
  },
  enterText: {
    fontSize: 30,
    color: "#0066CC",
    textAlign: "center",
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
  container: {
    alignContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0066CC",
    marginLeft: 86,
    marginRight: 86,
  },
  text: {
    fontSize: 30,
    color: "#0066CC",
    marginLeft: 7,
    textAlign: "center",
  },
};
