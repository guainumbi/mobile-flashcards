import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  FlatList
} from "react-native";
import { yellow, gray, pink } from "../utils/colors";
import { fetchDecks } from "../utils/helpers";
import { initializeDecks } from "../actions";

class DeckList extends Component {
  componentDidMount() {
    // AsyncStorage.clear();
    fetchDecks().then(decks => {
      this.props.dispatch(initializeDecks(decks));
    });
  }

  render() {
    const { decks } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Deck List</Text>
        {decks && (
          <FlatList
            data={Object.values(decks)}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{ margin: 5 }}
                  key={item.id}
                  onPress={() =>
                    this.props.navigation.navigate("Deck", { deck: item })
                  }
                >
                  <View style={styles.deck}>
                    <Text style={styles.p}>{item.title}</Text>
                    <Text style={styles.p}>{item.questions.length} cards</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps)(DeckList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  h2: {
    fontSize: 24,
    margin: 40,
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
  }
});
