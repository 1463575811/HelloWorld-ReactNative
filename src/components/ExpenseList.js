import React, { PropTypes } from "react";
import Expense from "./Expense";

import { Text, View } from "react-native";

const ExpenseList = (
  { Expenses, onExpenseDescriptionChange, onExpenseAmountChange }
) => (
  <View>
    {Expenses.map(function(exp, index) {
      return (
        <Expense
          key={index}
          {...exp.HelloWorld}
          index={index}
          onChangeDescription={onExpenseDescriptionChange}
          onChangeAmount={onExpenseAmountChange}
        />
      );
    })}
  </View>
);

ExpenseList.propTypes = {
  Expenses: PropTypes.array.isRequired,
  onExpenseDescriptionChange: PropTypes.func.isRequired,
  onExpenseAmountChange: PropTypes.func.isRequired
};

export default ExpenseList;
