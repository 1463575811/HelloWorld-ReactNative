import { connect } from 'react-redux';
import PersonComponent from '../components/Person';
import { save, cancel, deleteAllExpenses } from '../actions'
import ExpenseListComponent from '../components/ExpenseList';

const mapStateToProps = (state) => {
    return {
        Expenses: state.Expenses
    }
}

const ExpenseList = connect(mapStateToProps, null)(ExpenseListComponent);

export default ExpenseList;