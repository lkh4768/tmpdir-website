import { connect } from 'react-redux';
import actions from '../../data/actions';
import FileExplorerList from '../../components/FileExplorer/FileExplorerList';

const mapStateToProps = state => ({
  files: state.files,
});

const mapDispatchToProps = dispatch => ({
  addFile: _file => dispatch(actions.addFile(_file)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileExplorerList);
