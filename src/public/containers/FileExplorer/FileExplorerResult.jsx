import { connect } from 'react-redux';
import FileExplorerResult from '../../components/FileExplorer/FileExplorerResult';

const mapStateToProps = state => ({
  files: state.files,
});

export default connect(
  mapStateToProps,
  null,
)(FileExplorerResult);
