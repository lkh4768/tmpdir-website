import { connect } from 'react-redux';
import actions from '../../data/actions';
import FileExplorerList from '../../components/FileExplorer/FileExplorerList';

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
