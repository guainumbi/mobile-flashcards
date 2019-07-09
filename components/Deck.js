import React from "react";
import { Text, View, Platform, StyleSheet } from "react-native";
import { white, rose } from "../colors";

export default function Deck(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Deck View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  h2: {
    fontSize: 24,
    margin: 20
  }
});
