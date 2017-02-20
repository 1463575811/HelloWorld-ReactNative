import { connect } from 'react-redux';
import PersonComponent from '../components/Person';
import { changeExpenseDescription, changeExpenseAmount } from '../actions'
import ExpenseListComponent from '../components/ExpenseList';

const mapStateToProps = (state) => {
    return {
        Expenses: state.Expenses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onExpenseDescriptionChange: (desc, index) => {
            dispatch(changeExpenseDescription(desc, index))
        },
        onExpenseAmountChange: (amount, index) => {
             dispatch(changeExpenseAmount(amount, index))
        }
    }
}

const ExpenseList = connect(mapStateToProps, mapDispatchToProps)(ExpenseListComponent);

export default ExpenseList;