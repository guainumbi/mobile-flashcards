import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { removeDeckFromAsyncStorage } from "../utils/helpers";
import { removeDeck } from "../actions";
import { white, yellow, pink, gray, red } from "../utils/colors";

class Deck extends Component {
  handleRemoveDeck = () => {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;
    this.props.dispatch(
      removeDeck(deck.id),
      removeDeckFromAsyncStorage(deck.id).then(() => {
        navigation.navigate("DeckList");
      })
    );
  };

  render() {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Deck View</Text>
        <View style={styles.deck}>
          <Text style={styles.p}>{deck.title}</Text>
          <Text style={styles.p}>{deck.questions.length} cards</Text>
        </View>
        <TouchableOpacity onPress={() => this.handleRemoveDeck()}>
          <Text style={{ color: red }}>Remove Deck</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={[styles.button, { borderColor: pink, borderWidth: 1 }]}
            onPress={() => navigation.navigate("Quiz", { deck, cardIndex: 0 })}
            disabled={deck.questions[0] === undefined}
          >
            <Text style={{ color: pink, fontSize: 18 }}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: pink }]}
            onPress={() => navigation.navigate("NewCard", { deck })}
          >
            <Text style={{ color: white, fontSize: 18 }}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(Deck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  h2: {
    fontSize: 24,
    margin: 20,
    color: pink
  },
  deck: {
    backgroundColor: yellow,
    borderRadius: Platform.OS === "ios" ? 14 : 2,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 80,
    paddingRight: 80
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
