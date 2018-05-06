import { connect } from 'react-redux';
import actions from '../../data/actions';
import FileExplorerList from '../../components/FileExplorer/FileExplorerList';

const mapStateToProps = state => ({
  files: state.file.list,
  error: state.file.error,
});

const mapDispatchToProps = dispatch => ({
  addFile: _files => dispatch(actions.addFile(_files)),
  emptyError: () => dispatch(actions.emptyError()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileExplorerList);
