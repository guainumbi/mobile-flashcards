import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { white, rose } from "../utils/colors";
import { fetchDecks } from "../utils/helpers";

export default class DeckList extends Component {
  state = {
    decks: null
  };

  componentDidMount() {
    fetchDecks().then(decks =>
      this.setState(() => ({
        decks
      }))
    );
  }

  render() {
    const { decks } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Deck List</Text>
        {decks &&
          Object.values(decks).map(deck => (
            <TouchableOpacity
              key={deck.title}
              onPress={() => this.props.navigation.navigate("Deck")}
            >
              <View style={styles.deck}>
                <Text style={styles.p}>{deck.title}</Text>
                <Text style={styles.p}>{deck.questions.length} cards</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    );
  }
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
