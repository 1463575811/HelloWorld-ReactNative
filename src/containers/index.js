import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import MainContainer from "./MainContainer";
import reducers from "../reducers";
import styles from "../styles/style";
import PuppetContainer from "../puppet/PuppetContainer";
import LoadingScreen from "./LoadingScreen";

import { StyleSheet, Text, View, Button } from "react-native";

let defaultState = {
  Expenses: [],
  FirstName$: "Omar",
  LastName$: "Alshaker",
  FullName: "Omar Alshaker",
  Save$: 0,
  Cancel$: 0,
  DeleteAll$: 0
};
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.store = createStore(reducers, defaultState);
  }
  componentDidMount() {
    PuppetContainer(this.store, () => {
      this.setState({ puppetConnected: true });
    });
  }
  render() {
    return (
      <Provider store={this.store}>
        {this.state.puppetConnected ? <MainContainer /> : <LoadingScreen />}
      </Provider>
    );
  }
}
