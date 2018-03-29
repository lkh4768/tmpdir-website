import { connect } from 'react-redux';
import actions from '../../data/actions';
import FileExplorerList from '../../components/FileExplorer/FileExplorerList';

const mapStateToProps = state => ({
  files: state.files.files,
  isShowLocalFileExplorer: state.localFileExplorer.isShowLocalFileExplorer,
});

const mapDispatchToProps = dispatch => ({
  showLocalFileExplorer: () => dispatch(actions.showLocalFileExplorer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileExplorerList);
