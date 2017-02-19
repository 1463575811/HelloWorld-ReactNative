import { connect } from 'react-redux';
import PersonComponent from '../components/Person';
import { save, cancel, deleteAllExpenses } from '../actions'
import ControlsComponent from '../components/Controls';

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: () => {
            dispatch(save())
        },
        onCancel: () => {
            dispatch(cancel(name))
        },
        onDeleteAll: () => {
            dispatch(deleteAllExpenses())
        }
    }
}

const Controls = connect(null, mapDispatchToProps)(ControlsComponent);
export default Controls;