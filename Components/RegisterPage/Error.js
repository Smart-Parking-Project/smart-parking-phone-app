import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Error({ route }) {
  const { error } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}> Error: {error}</Text>
    </View>
  );
}
