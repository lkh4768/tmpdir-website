import { connect } from 'react-redux';
import actions from '../../data/actions';
import FileInput from '../../components/FileExplorer/FileInput';

const mapStateToProps = state => ({
  files: state.files
});

const mapDispatchToProps = dispatch => ({
  showLocalFileExplorer: is => dispatch(actions.showLocalFileExplorer(is)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileExplorerList);
