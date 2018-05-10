import { connect } from 'react-redux';
import actions from '_data/actions';
import FileExplorerList from '_components/FileExplorerList';

const mapStateToProps = state => ({
  files: state.file.list,
});

const mapDispatchToProps = dispatch => ({
  addFile: _files => dispatch(actions.addFile(_files)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileExplorerList);
