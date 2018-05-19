import { connect } from 'react-redux';
import actions from '_data/actions';
import Upload from '../../components/Upload';

const mapStateToProps = state => ({
  files: state.file.list,
  uploading: state.file.uploading,
});

const mapDispatchToProps = dispatch => ({
  reqUploadFiles: files => dispatch(actions.reqUploadFiles(files)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Upload);
