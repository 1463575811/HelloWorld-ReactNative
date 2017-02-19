import React, { PropTypes } from 'react';
import styles from '../styles/style';


import {
    TextInput,
    View,
    Button
} from 'react-native';

const Person = ({ firstName, lastName }) => (
    <View>
      <TextInput style={{width: 200}}>{firstName}</TextInput>
      <TextInput style={{width: 200}}>{lastName}</TextInput>
    </View>
)

Person.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}

export default Person