import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { addCardToDeck } from "../utils/helpers";
import { pink, mint, gray } from "../utils/colors";

class NewCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleSubmit = () => {
    const { deck } = this.props.navigation.state.params;
    const card = { question: this.state.question, answer: this.state.answer };
    addCardToDeck(deck.title, card);
    this.props.navigation.navigate("Deck", { deck });
    // rerender Deck to show new question included
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Question..."
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Answer..."
          onChangeText={answer => this.setState({ answer })}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={{ color: gray, fontSize: 18 }}>Create New Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NewCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  textInput: {
    fontSize: 20,
    margin: 20,
    color: gray
  },
  button: {
    borderRadius: Platform.OS === "ios" ? 14 : 2,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 60,
    paddingRight: 60,
    marginBottom: 15,
    backgroundColor: mint
  }
});
