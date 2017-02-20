import React, { Component } from "react";
import ExpenseList from "./ExpenseList";
import Person from "./Person";
import Controls from "./Controls";

import styles from "../styles/style";

import { StyleSheet, Text, View, Button } from "react-native";

export default class MainContainer extends Component {
  render() {
    return (
      <View>
        <Person />
        <Controls />
        <ExpenseList />
      </View>
    );
  }
}
