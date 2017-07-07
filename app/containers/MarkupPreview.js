import { connect } from 'react-redux';
import Preview from '../components/Preview';

function mapStateToProps(state) {
  return {
    preview: state.input
  }
}

const MarkupPreview = connect(
  mapStateToProps
)(Preview);

export default MarkupPreview;
