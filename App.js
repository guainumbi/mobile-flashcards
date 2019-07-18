import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import MainNavigation from "./components/MainNavigation";

let store = createStore(reducer);

const AppContainer = createAppContainer(MainNavigation);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
