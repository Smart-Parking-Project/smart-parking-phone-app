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
      <View style={{ padding: 15 }}></View>
      <View style={{ padding: 50 }}>
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
  mainTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0066CC",
  },
  buttonLogin: {
    marginTop: 4,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: "#0066CC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    alignContent: "center",
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
});
