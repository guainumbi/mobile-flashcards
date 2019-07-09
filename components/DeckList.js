import React from "react";
import { Text, View } from "react-native";
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
    <View>
      <Text>Deck List</Text>
      {Object.values(decks).map(deck => (
        <View key={deck.title}>
          <Text>{deck.title}</Text>
          <Text>{deck.questions.length} cards</Text>
        </View>
      ))}
    </View>
  );
}
