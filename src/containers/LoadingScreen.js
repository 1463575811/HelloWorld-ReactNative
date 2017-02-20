import React, { Component } from "react";
import styles from "../styles/style";

import { Text, View } from "react-native";

/* just a loading screen */
export default class MainContainer extends Component {
  render() {
    return (
      <View style={styles.alignedContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
}
