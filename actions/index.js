export const ADD_DECK = "ADD_DECK";
export const ADD_DECKS = "ADD_DECKS";
export const ADD_CARD = "ADD_CARD";
export const REMOVE_DECK = "REMOVE_DECK";
export const REMOVE_CARD = "REMOVE_CARD";

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}

export function addCard(id, card) {
  return {
    type: ADD_CARD,
    id,
    card
  };
}

export function initializeDecks(decks) {
  return {
    type: ADD_DECKS,
    decks
  };
}

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    id
  };
}

export function removeCard(id, card) {
  return {
    type: REMOVE_CARD,
    id,
    card
  };
}
