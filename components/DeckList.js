import React from "react";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { white, rose } from "../colors";

decks = {
  "Deck 1": {
    title: "Deck 1",
    questions: [
      {
        question: "Question 1",
        answer: "Answer 1"
      },
      {
        question: "Question 2",
        answer: "Answer 2"
      }
    ]
  },
  "Deck 2": {
    title: "Deck 2",
    questions: [
      {
        question: "Question 1",
        answer: "Answer 1"
      },
      {
        question: "Question 2",
        answer: "Answer 2"
      }
    ]
  }
};
export default function DeckList(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Deck List</Text>
      {Object.values(decks).map(deck => (
        <TouchableOpacity onPress={() => props.navigation.navigate("Deck")}>
          <View key={deck.title} style={styles.deck}>
            <Text style={styles.p}>{deck.title}</Text>
            <Text style={styles.p}>{deck.questions.length} cards</Text>
          </View>
        </TouchableOpacity>
      ))}
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
  },
  deck: {
    backgroundColor: rose,
    borderRadius: Platform.OS === "ios" ? 14 : 2,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 80,
    paddingRight: 80
  },
  p: {
    color: white,
    fontSize: 18
  }
});
