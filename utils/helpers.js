import { AsyncStorage } from "react-native";

export const DECKS_STORAGE_KEY = "mobile-flashcards:decks";

starterDecks = {
  "Deck 1": {
    title: "Deck 1",
    questions: [
      {
        question: "Question 1",
        answer:
          "Answer 1 is the very long answer to the first question from the first deck of questions. I hope this helps."
      },
      {
        question: "Question 2",
        answer: "Answer 2"
      },
      {
        question: "Question 3",
        answer: "Answer 3"
      }
    ]
  },
  "Deck 2": {
    title: "Deck 2",
    questions: [
      {
        question: "Question 1",
        answer: "Answer 1"
      },
      {
        question: "Question 2",
        answer: "Answer 2"
      }
    ]
  }
};

setStarterDecks = () => {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(starterDecks));

  return starterDecks;
};

getDecks = decks => {
  return decks;
};

checkDecksResults = results => {
  return results === null ? setStarterDecks() : getDecks(JSON.parse(results));
};

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(checkDecksResults);
}

export function addCardToDeck(title, card) {
  AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
    const data = JSON.parse(decks);
    data[title].questions.push(card);
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  });
}
