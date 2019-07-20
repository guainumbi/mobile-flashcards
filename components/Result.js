import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import { pink, white, gray } from "../utils/colors";

export default class Result extends Component {
  render() {
    const { navigation } = this.props;
    const { deck, score } = navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Quiz Result</Text>
        <Text style={styles.p}>
          You got {score} out of {deck.questions.length} answers right!
        </Text>
        <View>
          <TouchableOpacity
            style={[styles.button, { borderColor: pink, borderWidth: 1 }]}
            onPress={() =>
              navigation.navigate("Quiz", {
                deck,
                cardIndex: 0
              })
            }
          >
            <Text style={{ color: pink, fontSize: 18 }}>
              Take this quiz again!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: pink }]}
            onPress={() => navigation.navigate("Deck", { deck })}
          >
            <Text style={{ color: white, fontSize: 18 }}>
              Back to Deck View
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  h2: {
    fontSize: 24,
    margin: 20,
    color: pink
  },
  p: {
    color: gray,
    fontSize: 18
  },
  button: {
    borderRadius: Platform.OS === "ios" ? 14 : 2,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 60,
    paddingRight: 60,
    marginBottom: 15
  }
});
