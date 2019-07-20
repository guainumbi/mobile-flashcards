import {
  ADD_DECKS,
  ADD_DECK,
  ADD_CARD,
  REMOVE_DECK,
  REMOVE_CARD
} from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECKS:
      return action.decks;
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: {
          ...action.deck
        }
      };
    case ADD_CARD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          questions: state[action.id].questions.concat([action.card])
        }
      };
    case REMOVE_DECK:
      const newState = {};
      Object.assign(newState, state);
      delete newState[action.id];
      return newState;
    case REMOVE_CARD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          questions: state[action.id].questions.filter(
            card =>
              card.question !== action.card.question &&
              card.answer !== action.card.answer
          )
        }
      };
    default:
      return state;
  }
}

export default decks;
