let defaultState = {
    Expenses: [],
    FirstName$: 'Omar',
    LastName$: 'Alshaker',
    Save$: 0,
    Cancel$: 0,
    DeleteAll$: 0
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            let Expenses = state.Expenses || [];
            Expenses.push(action.expense);
            return { ...state, Expenses };
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
        case 'RESET_STATE':
            return { ...action.state };
        default:
            return state;
    }
}

export default reducer;