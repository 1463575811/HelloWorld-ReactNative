/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReactPuppetClient from './puppet/puppetContainer';
import PersonComponent from './components/personComponent';
import ExpensesListComponent from './components/expensesListComponent';
import { styles } from './components/styles';

import {
  AppRegistry,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';

export default class RNHelloWorld extends Component {

  constructor() {
    super();
    this.state = { Expenses: [] };
  }
  updateHappened(e) {
    this.setState({ ...this.puppetObj });
  }
  onConnect()
  {
    this.setState({connected: true})
  }
  componentDidMount() {
    ReactPuppetClient.connect(this, this.onConnect.bind(this));
  }
  componentDidUpdate() {
    if (!this.puppetObj) {
      return;
    }
    for (let key in this.state) {
      if (this.state.hasOwnProperty(key)) {
        this.puppetObj[key] = this.state[key];
      }
    }
    this.puppet.observer && this.puppet.observer.touch();
  }
  updateExpense(index, field, value) {
    let currentExpenses = this.state.Expenses.slice();
    let currentExpense = currentExpenses[index].HelloWorld;
    currentExpense[field] = value;
    this.setState({ Expenses: currentExpenses });
  }
  personUpdate(change) {
    this.setState(change);
  }
  render() {
    if (!this.state.connected) {
      return <View style={styles.container}>
        <Text style={styles.welcome}>
          Connecting...
          </Text>
      </View>
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Hey {this.state.FullName}!
          </Text>
          <PersonComponent
            firstName={this.state.FirstName$}
            onUpdate={this.personUpdate.bind(this)}
            lastName={this.state.LastName$}
            onSaveClick={() => this.setState({ Save$: this.state.Save$ + 1 })}
            onCancelClick={() => this.setState({ Cancel$: this.state.Cancel$ + 1 })}
            />
          <Text>Current Balance: {this.state.CurrentBalance}</Text>
          <ExpensesListComponent
            expenses={this.state.Expenses}
            onDeleteAllClick={() => { this.setState({ DeleteAll$: this.state.DeleteAll$ + 1 }) } }
            onUpdateExpense={this.updateExpense.bind(this)}
            onAddNewPress={() => { this.setState({ AddNewExpense$: this.state.AddNewExpense$ + 1 }) } } />

        </View>
      );
    }
  }
}
AppRegistry.registerComponent('RNHelloWorld', () => RNHelloWorld);
