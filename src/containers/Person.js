import { connect } from 'react-redux';
import PersonComponent from '../components/Person';
import { changeFirstName, changLastName } from '../actions'

const mapStateToProps = (state) => {
    return {
        firstName: state.FirstName$,
        lastName: state.LastName$,
        fullName: state.Fullname
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFirstNameChange: (name) => {
            dispatch(changeFirstName(name))
        },
        onLastNameChange: (name) => {
            dispatch(changeLastName(name))
        }
    }
}

const Person = connect(mapStateToProps, mapDispatchToProps)(PersonComponent);

export default Person;