
/* Change the state according to every action taken */

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            let AddNewExpense = state.AddNewExpense$ || 0;
            return { ...state, AddNewExpense$: AddNewExpense + 1 };
        case 'CHANGE_FIRST_NAME':
            return { ...state, FirstName$: action.name };
        case 'CHANGE_LAST_NAME':
            return { ...state, LastName$: action.name };
        case 'SAVE':
            let Save = state.Save$ || 0;
            return { ...state, Save$: Save + 1 };
        case 'CANCEL':
            let Cancel = state.Cancel$ || 0;
            return { ...state, Cancel$: Cancel + 1 };
        case 'DELETE_ALL_EXPENSES':
            let DeleteAll = state.DeleteAll$ || 0;
            return { ...state, DeleteAll$: DeleteAll + 1 };
        case 'CHANGE_EXPENSE_DESC':
            var newExpenses = state.Expenses.slice();
            newExpenses[action.index].HelloWorld['Description$'] = action.desc;
            return { ...state, Expenses: newExpenses };
        case 'CHANGE_EXPENSE_AMOUNT':
            var newExpenses = state.Expenses.slice();
            newExpenses[action.index].HelloWorld['Amount$'] = action.amount;
            return { ...state, Expenses: newExpenses };
        case 'RESET_STATE':
            return JSON.parse(JSON.stringify(action.state));
        default:
            return state;
    }
}

export default reducer;