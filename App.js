import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckList from "./components/DeckList";
import NewDeck from "./components/NewDeck";

export default class App extends Component {
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
  render() {
    return (
      <View style={styles.container}>
        <DeckList decks={this.decks} />
        <NewDeck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
