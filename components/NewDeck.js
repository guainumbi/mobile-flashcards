import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { addDeckToAsyncStorage, generateID } from "../utils/helpers";
import { addDeck } from "../actions";
import { white, pink, gray } from "../utils/colors";

class NewDeck extends Component {
  state = {
    title: ""
  };

  resetTitle = () => {
    this.setState(() => ({
      title: ""
    }));
  };

  handleSubmit = () => {
    const { title } = this.state;
    const { dispatch } = this.props;

    const newDeck = {
      id: generateID(),
      title,
      questions: []
    };

    this.resetTitle();

    dispatch(
      addDeck(newDeck),
      addDeckToAsyncStorage(newDeck).then(() => {
        this.props.navigation.navigate("Deck", { deck: newDeck });
      })
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Title..."
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit}
          disabled={this.state.title === ""}
        >
          <Text style={styles.p}>Create New Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(NewDeck);

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
  p: {
    color: white,
    fontSize: 18
  },
  button: {
    borderRadius: Platform.OS === "ios" ? 14 : 2,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 60,
    paddingRight: 60,
    marginBottom: 15,
    backgroundColor: pink
  }
});
