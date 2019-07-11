import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { white, mint, gray, pink, gold } from "../utils/colors";

export default class Quiz extends Component {
  state = {
    answer: "Show Answer"
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    const { deck, cardIndex } = navigation.state.params;
    const card = deck.questions[cardIndex];
    this.setState({ answer: "Show Answer" });
    navigation.navigate("Quiz", { deck, cardIndex: cardIndex + 1 });
  };
  render() {
    const { deck, cardIndex } = this.props.navigation.state.params;
    const card = deck.questions[cardIndex];
    const count = 1;
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Quiz</Text>
        <Text style={styles.p}>
          {cardIndex + 1}/{deck.questions.length}
        </Text>
        <Text style={styles.p}>{card.question}</Text>
        <TouchableOpacity
          style={styles.answerCard}
          onPress={() => this.setState({ answer: card.answer })}
        >
          <Text style={{ color: gold }}>{this.state.answer}</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: mint }]}
            onPress={this.handleSubmit}
          >
            <Text style={{ color: gray }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: pink }]}
            onPress={this.handleSubmit}
          >
            <Text style={{ color: white }}>False</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  h2: {
    fontSize: 24,
    margin: 20,
    color: pink
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
  },
  answerCard: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 60,
    paddingRight: 60,
    borderColor: gold,
    borderWidth: 1
  }
});
