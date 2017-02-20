import React, { PropTypes } from "react";
import styles from "../styles/style";

import { TextInput, Text, View, Button } from "react-native";

const Person = (
  { firstName, lastName, fullName, onFirstNameChange, onLastNameChange }
) => (
  <View style={{ margin: 10 }}>
    <Text style={{ marginTop: 10, fontSize: 15 }}>{fullName}</Text>
    <TextInput style={{ width: 240 }} onChangeText={onFirstNameChange}>
      {firstName}
    </TextInput>
    <TextInput style={{ width: 240 }} onChangeText={onLastNameChange}>
      {lastName}
    </TextInput>
  </View>
);

Person.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired
};

export default Person;
