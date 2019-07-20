# mobile-flashcards

React native app for ios and android

Create study cards and test yourself in a quiz.
You can manage cards in decks, each card holds a question and a concealed answer.

To get started run:

- `npm install`
- `npm start`

OR

- `yarn install`
- `yarn start`

This app was created using [Create React Native App](https://github.com/react-community/create-react-native-app) and [Expo](https://github.com/expo/expo).

```bash
...
├── actions
    └── index.js
├──components
   ├── Deck.js #Deck Component shows deck details
   ├── DeckList.js #Displays list of all decks including their title and number of cards
   ├── MainNavigation.js #Defines MainNavigation including stackNavigation and tabNavigation
   ├── NewCard.js #Holds input form to add new card to deck
   ├── NewDeck.js #Holds input form to add a new deck
   ├── Quiz.js #Navigates through deck card questions and lets the user mark answers as correct or false
   └── Result.js #Displays quiz result with number of correct answers
├── reducers
    └── index.js
├── utils
    ├── colors.js #Holds the color variables
    └──  helpers.js #Supplies the function calls for initial data collection and all AsyncStorage operations
├── App.js
├── app.json
...
└── README.md - This file.
```
