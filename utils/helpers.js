import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

export const DECKS_STORAGE_KEY = "mobile-flashcards:decks";
export const REMINDER_STORAGE_KEY = "mobile-flashcards:reminder";

starterDecks = {
  "1": {
    id: "1",
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
  "2": {
    id: "2",
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

export function generateID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

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

fetchDate = () => {
  return AsyncStorage.getItem(DATE_STORAGE_KEY).then(date => {
    const lastQuiz = JSON.parse(date);
    return lastQuiz;
  });
};

clearLocalNotifications = () => {
  return AsyncStorage.removeItem(REMINDER_STORAGE_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
};

createNotification = () => {
  return {
    title: "Take a quiz!",
    body: "📚 Don't forget to study today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
};

setLocalNotification = () => {
  AsyncStorage.getItem(REMINDER_STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(18);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(REMINDER_STORAGE_KEY, JSON.stringify(true));
          }
        });
      }
    });
};

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(checkDecksResults);
}

export function addCardToAsyncStorage(id, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
    const data = JSON.parse(decks);
    data[id].questions.push(card);
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  });
}

export function fetchDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
    const data = JSON.parse(decks);
    return data[id];
  });
}

export function addDeckToAsyncStorage(deck) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
    const data = JSON.parse(decks);
    data[deck.id] = deck;
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  });
}

export function removeCardFromAsyncStorage(id, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
    let data = JSON.parse(decks);
    const deckQuestions = data[id].questions.filter(
      question =>
        question.question !== card.question && question.answer !== card.answer
    );
    data[id].questions = deckQuestions;
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    return data[id];
  });
}

export function removeDeckFromAsyncStorage(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
    const data = JSON.parse(decks);
    data[id] = undefined;
    delete data[id];
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    return data;
  });
}

export function registerQuizCompleted() {
  clearLocalNotifications().then(() => {
    setLocalNotification();
  });
}
