import { connect } from "react-redux";
import PersonComponent from "../components/Person";
import { addExpense, save, cancel, deleteAllExpenses } from "../actions";
import ControlsComponent from "../components/Controls";

const mapDispatchToProps = dispatch => {
  return {
    onSave: () => {
      dispatch(save());
    },
    onCancel: () => {
      dispatch(cancel());
    },
    onDeleteAll: () => {
      dispatch(deleteAllExpenses());
    },
    onAddNew: () => {
      dispatch(addExpense());
    }
  };
};

const Controls = connect(null, mapDispatchToProps)(ControlsComponent);
export default Controls;
