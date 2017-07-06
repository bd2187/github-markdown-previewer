import { connect } from 'react-redux';
import { changeInput } from '../actions/actions';
import Form from '../components/Form';

function mapStateToProps(state) {
  return {
    input: state.input
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: function() {
      return dispatch(changeInput)
    }
  }
}

const Input = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default Input;
