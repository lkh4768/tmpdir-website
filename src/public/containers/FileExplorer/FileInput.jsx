import { connect } from 'react-redux';
import actions from '../../data/actions';
import FileInput from '../../components/FileExplorer/FileInput';

const mapStateToProps = state => ({
  isShowLocalFileExplorer: state.localFileExplorer.isShowLocalFileExplorer,
});

const mapDispatchToProps = dispatch => ({
  addFile: file => dispatch(actions.addFile(file)),
  hideLocalFileExplorer: () => dispatch(actions.hideLocalFileExplorer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileInput);
