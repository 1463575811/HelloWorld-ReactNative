import React, { PropTypes } from 'react';
import styles from '../styles/style';

import {
    TextInput,
    View
} from 'react-native';

const Expense = ({ Description$, Amount$ }) => (
    <View style={styles.inlinedChildren} >
        <TextInput style={{width: 200}} value={Description$} />
        <TextInput style={{width: 200}} value={Amount$.toString()} />
    </View>
)

Expense.propTypes = {
    Description$: PropTypes.string.isRequired,
    Amount$: PropTypes.number.isRequired,
}

export default Expense