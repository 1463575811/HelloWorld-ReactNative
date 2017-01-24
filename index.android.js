/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReactPuppetClient from './puppet/puppetContainer';

import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  TextInput,
  Button,
  View
} from 'react-native';

export default class RNHelloWorld extends Component {
  puppetObj = null;
  stopListening = false;

  listDataSource;
  constructor() {
    super();
    this.listDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { FirstName$: 'Loading...', LastName$: 'Loading', FullName: 'Loading', Expenses: [], AddNewExpense$: 0, CurrentBalance: 0, DeleteAll$: 0, Cancel$: 0 };
  }
  updateHappened(e) {
    this.setState({ ...this.puppetObj });
  }
  componentDidMount() {
    ReactPuppetClient.connect(this);
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
    this.puppet.observer && this.puppet.observer.bump();
  }
  updateExpense(index, field, value) {
    let currentExpenses = this.state.Expenses.slice();
    console.log('currentExpenses', currentExpenses)
    let currentExpense = currentExpenses[index].HelloWorld;
    currentExpense[field] = value;
    this.setState({ Expenses: currentExpenses });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hey {this.state.FullName}!
        </Text>
        <TextInput
          style={{ height: 40, width: 300 }}
          onChangeText={(text) => this.setState({ FirstName$: text })}
          value={this.state.FirstName$}
          />
        <TextInput
          style={{ height: 40, width: 300 }}
          onChangeText={(text) => this.setState({ LastName$: text })}
          value={this.state.LastName$}
          />
        <View style={styles.inlinedChildren}>
          <View style={{ margin: 3 }}>
            <Button
              onPress={() => { this.setState({ Save$: this.state.Save$ + 1 }) } }
              title="Save"
              style={styles.button}
              accessibilityLabel="Click to save"
              />
          </View>
          <View style={{ margin: 3 }}>
            <Button
              onPress={() => { this.setState({ Cancel$: this.state.Cancel$ + 1 }) } }
              title="Cancel"
              style={styles.button}
              accessibilityLabel="Click to cancel"
              />
          </View>
        </View>
        <Text>Current Balance: {this.state.CurrentBalance}</Text>

        <View style={styles.inlinedChildren}>
          <View style={{ margin: 3 }}>
            <Button
              onPress={() => { this.setState({ AddNewExpense$: this.state.AddNewExpense$ + 1 }) } }
              title="Add Expense"
              style={styles.button}
              accessibilityLabel="Click to add expense"
              />
          </View>
          <View style={{ margin: 3 }}>
            <Button
              onPress={() => { this.setState({ DeleteAll$: this.state.DeleteAll$ + 1 }) } }
              title="Delete all"
              style={styles.button}
              accessibilityLabel="Click to delete all"
              />
          </View>
        </View>
        <ListView
          dataSource={this.listDataSource.cloneWithRows(this.state.Expenses)}
          initialListSize={3}
          enableEmptySections={true}
          renderRow={(rowData, sectionId, rowID) =>
            <View style={styles.inlinedChildren}>
              <TextInput onChangeText={function (text) { this.updateExpense(rowID, 'Description$', text) }.bind(this)} placeholder="Description" style={{ width: 150 }}>{rowData.HelloWorld.Description$}</TextInput>
              <TextInput onChangeText={function (text) { this.updateExpense(rowID, 'Amount$', text) }.bind(this)} style={{ width: 50 }} value={rowData.HelloWorld.Amount$ + ""}></TextInput>
            </View>
          }
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    color: '#ff5858'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inlinedChildren: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNHelloWorld', () => RNHelloWorld);
