export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}
export const changeFirstName = (name) => {
    return {
        type: 'CHANGE_FIRST_NAME',
        name
    }
}
export const changeLastName = (name) => {
    return {
        type: 'CHANGE_LAST_NAME',
        name
    }
}
export const resetState = (state) => {
    return {
        type: 'RESET_STATE',
        state
    }
}
export const save = () => {
    return {
        type: 'SAVE'
    }
}
export const cancel = () => {
    return {
        type: 'CANCEL'
    }
}
export const deleteAllExpenses = () => {
    return {
        type: 'DELETE_ALL_EXPENSES'
    }
}
