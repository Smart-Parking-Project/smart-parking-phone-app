import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import RegisterPage from "./RegisterPage";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  {
    getAllUsers {
      username
    }
  }
`;

function HomePage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground source={require("../assets/2.png")} style={styles.main}>
      <View>
        <Text style={styles.mainTitle}>Smart Parking </Text>
      </View>

      <View style={{ padding: 80 }}></View>

      <>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(email) => setEmail(email)}
          ></TextInput>
        </View>
      </>

      <View style={{ padding: 5 }}></View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>

      <View style={{ padding: 58 }}></View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 30 }}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  button: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 90,
    marginRight: 90,
    backgroundColor: "#003FB6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    alignContent: "center",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },

  textInput: {
    borderColor: "white",
    borderWidth: 1,
    padding: 15,
  },

  main: {
    padding: 50,
    flex: 1,
  },
});

const Stack = createStackNavigator();

function AppNavigator() {
  const { loading, error, data } = useQuery(GET_USERS);
  //console.log(data);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Hello() {
  const { loading, error, data } = useQuery(GET_USERS);
  //console.log();

  if (loading) {
    console.log("data2222");
    return <Text> 'Loading...'</Text>;
  }
  if (error) {
    console.log(33333333333333333333);
    console.log(error);
    return <Text>Error! error </Text>;
  }

  // if (data) {
  console.log(data);
  //   return (
  //     <View>
  //       <Text style={{ color: "red", fontSize: "50" }}> Hello</Text>
  //     </View>
  //   );
  // }

  return (
    <View>
      <Text style={{ color: "red", fontSize: "50" }}>
        {" "}
        {data.getAllUsers[0].username}
      </Text>
    </View>
  );
}

//export default Hello;
export default AppNavigator;
