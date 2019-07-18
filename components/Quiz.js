import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  NativeModules,
  LayoutAnimation
} from "react-native";
import Result from "./Result";
import {
  registerQuizCompleted,
  removeCardFromAsyncStorage
} from "../utils/helpers";
import { removeCard } from "../actions";
import { white, mint, gray, pink, gold, red } from "../utils/colors";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class Quiz extends Component {
  state = {
    answer: "Show Answer",
    score: 0
  };

  handleSubmit(score) {
    const { navigation } = this.props;
    const { deck, cardIndex } = navigation.state.params;
    const card = deck.questions[cardIndex];

    this.setState(
      { answer: "Show Answer", score: this.state.score + score },
      () => {
        if (cardIndex + 1 == deck.questions.length) {
          const score = this.state.score;

          this.setState({ score: 0 });

          registerQuizCompleted();

          navigation.navigate("Result", { deck, score });
        } else {
          navigation.navigate("Quiz", { deck, cardIndex: cardIndex + 1 });
        }
      }
    );
  }

  handleRemoveCard = () => {
    const { deck, cardIndex } = this.props.navigation.state.params;
    const card = deck.questions[cardIndex];

    this.props.dispatch(
      removeCard(deck.id, card),
      removeCardFromAsyncStorage(deck.id, card).then(updatedDeck => {
        this.props.navigation.navigate("Deck", { deck: updatedDeck });
      })
    );
  };

  handleShowCard = () => {
    const { deck, cardIndex } = this.props.navigation.state.params;
    const card = deck.questions[cardIndex];

    this.setState({ answer: card.answer });

    LayoutAnimation.spring();
  };
  render() {
    const { deck, cardIndex } = this.props.navigation.state.params;
    const card = deck.questions[cardIndex];

    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Quiz</Text>
        <Text style={styles.p}>
          {cardIndex + 1}/{deck.questions.length}
        </Text>
        <Text style={styles.p}>{card.question}</Text>
        <TouchableOpacity
          style={styles.answerCard}
          onPress={() => this.handleShowCard()}
        >
          <Text style={{ color: gold, fontSize: 18 }}>{this.state.answer}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleRemoveCard()}>
          <Text style={{ color: red }}>Remove Card</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: mint }]}
            onPress={() => this.handleSubmit(1)}
            disabled={this.state.answer === "Show Answer"}
          >
            <Text style={{ color: gray, fontSize: 18 }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: pink }]}
            onPress={() => this.handleSubmit(0)}
            disabled={this.state.answer === "Show Answer"}
          >
            <Text style={{ color: white, fontSize: 18 }}>False</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(Quiz);

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
