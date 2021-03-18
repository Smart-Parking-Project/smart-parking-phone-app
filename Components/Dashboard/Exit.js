import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Exit({ navigation, route }) {
  const {
    payAmount,
    enterDate,
    enterTime,
    exitDate,
    exitTime,
    elapsedTime,
  } = route.params;
  return (
    <View>
      <View
        style={{
          width: 375,
          height: 65,
          backgroundColor: "#0066CC",
        }}
      ></View>

      <View style={{ padding: 30 }}>
        <Text style={styles.mainTitle}>Thank you for using Smart Parking!</Text>
      </View>

      <View style={{ padding: 5 }}>
        <Text style={styles.summaryText}> Parking Summary:</Text>
      </View>

      <View style={{ padding: 3 }}>
        <Text style={styles.summaryInfo}> Enter Date: {enterDate}</Text>
      </View>
      <View style={{ padding: 3 }}>
        <Text style={styles.summaryInfo}> Enter Time: {enterTime}</Text>
      </View>
      <View style={{ padding: 3 }}>
        <Text style={styles.summaryInfo}> Exit Date: {exitDate}</Text>
      </View>
      <View style={{ padding: 3 }}>
        <Text style={styles.summaryInfo}> Exit Time: {exitTime}</Text>
      </View>
      <View style={{ padding: 3 }}>
        <Text style={styles.summaryInfo}> Total Time: {elapsedTime}</Text>
      </View>
      <View style={{ padding: 3 }}>
        <Text style={styles.summaryInfo}> Amount Paid: {payAmount}</Text>
      </View>

      <View style={{ padding: 30 }}></View>
      <Text style={styles.text4}>Press the button below to exit the lot</Text>
      <View style={{ padding: 5 }}></View>

      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text2}>Exit</Text>
      </TouchableOpacity>

      <View style={{ padding: 20 }}></View>
      <View
        style={{
          width: 375,
          height: 65,
          backgroundColor: "#0066CC",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
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

  summaryText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#0066CC",
  },
  summaryInfo: {
    fontSize: 20,
    textAlign: "center",
    color: "#0066CC",
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
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0066CC",
  },
  container: {
    flex: 1,
    backgroundColor: "#0066CC",
  },
  text4: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#0066CC",
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
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
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
  text2: {
    fontSize: 27,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
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
