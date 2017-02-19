import React, { PropTypes } from 'react';
import Expense from './Expense';

import {
    Text,
    View
} from 'react-native';

const ExpensesList = (expenses) => {
    let returnVal = [];
    expenses.forEach((exp, index) => {
        returnVal.push(<Expense key={index} {...exp.HelloWorld} />);
    });
    return returnVal;
}
const ExpenseList = ({ Expenses }) => (
    <View>
        { ExpensesList(Expenses) }
    </View>
)

ExpenseList.propTypes = {
    Expenses: PropTypes.array.isRequired
}

export default ExpenseList