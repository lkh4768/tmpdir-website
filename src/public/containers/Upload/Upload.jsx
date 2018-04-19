import { connect } from 'react-redux';
import Upload from '../../components/Upload/Upload';

const mapStateToProps = state => ({
  files: state.files,
});

const mapDispatchToProps = dispatch => ({
  uploadFile: () => dispatch(actions.uploadFile()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Upload);
