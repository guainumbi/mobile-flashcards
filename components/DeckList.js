import React from "react";
import { Text, View, Platform, StyleSheet } from "react-native";

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
        <View key={deck.title}>
          <Text>{deck.title}</Text>
          <Text>{deck.questions.length} cards</Text>
        </View>
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
  }
});
