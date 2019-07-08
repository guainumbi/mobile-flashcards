import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";

class NewDeck extends Component {
  state = {
    title: ""
  };

  handleSubmit = () => {
    console.log("hi");
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Title..."
          onChangeText={title => this.setState({ title })}
        />
        <Button onPress={this.handleSubmit} title="Create New Deck" />
      </View>
    );
  }
}

export default NewDeck;
