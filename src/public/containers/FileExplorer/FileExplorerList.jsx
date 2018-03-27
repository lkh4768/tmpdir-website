import { connect } from 'react-redux';
import actions from '../../data/actions';
import FileExplorerList from '../../components/FileExplorer/FileExplorerList';

const mapStateToProps = {};

const mapDispatchToProps = dispatch => ({
  showLocalFileExplorer: show => dispatch(actions.showLocalFileExplorer(show)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileExplorerList);
