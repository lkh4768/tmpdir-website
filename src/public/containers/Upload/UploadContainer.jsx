import { connect } from 'react-redux';
import actions from '../../data/actions';
import Upload from '../../components/Upload/Upload';

const mapStateToProps = state => ({
  files: state.file.list,
  uploading: state.file.uploading,
});

const mapDispatchToProps = dispath => ({
  reqUploadFiles: files => dispath(actions.reqUploadFiles(files)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Upload);
