import { connect } from 'react-redux';
import Preview from '../components/Preview';
import marked from 'marked';

function mapStateToProps(state) {
  return {
    preview: state.input
  }
}

const MarkupPreview = connect(
  mapStateToProps
)(Preview);

export default MarkupPreview;
