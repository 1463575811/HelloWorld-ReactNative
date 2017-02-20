import React, { PropTypes } from 'react';
import styles from '../styles/style';

import {
    TextInput,
    View
} from 'react-native';

const Expense = ({ Description$, Amount$, index, onChangeDescription, onChangeAmount }) => (
    <View style={styles.inlinedChildren} >
        <TextInput style={{ width: 200 }} onChangeText={(text) => onChangeDescription(text, index)} value={Description$} />
        <TextInput style={{ width: 60 }} onChangeText={(text) => onChangeAmount(text, index)} value={Amount$.toString()} />
    </View>
)

Expense.propTypes = {
    Description$: PropTypes.string,
    Amount$: PropTypes.number.isRequired,
    onChangeDescription: PropTypes.func.isRequired,
    onChangeAmount: PropTypes.func.isRequired
}

export default Expense