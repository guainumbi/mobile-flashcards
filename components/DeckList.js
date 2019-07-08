import React from "react";
import { Text, View } from "react-native";

export default function DeckList(props) {
  return (
    <View>
      <Text>Deck List</Text>
      {Object.values(props.decks).map(deck => (
        <View key={deck.title}>
          <Text>{deck.title}</Text>
          <Text>{deck.questions.length} cards</Text>
        </View>
      ))}
    </View>
  );
}
