import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Platform,
  StyleSheet
} from "react-native";
import { white, pink } from "../utils/colors";

class NewDeck extends Component {
  state = {
    title: ""
  };

  handleSubmit = () => {
    console.log("hi");
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Title..."
          onChangeText={title => this.setState({ title })}
        />
        <Button onPress={this.handleSubmit} title="Create New Deck" />
      </View>
    );
  }
}

export default NewDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  textInput: {
    fontSize: 20,
    margin: 20
  }
});
