import { connect } from 'react-redux';
import actions from '../../data/actions';
import Upload from '../../components/Upload/Upload';

const mapDispatchToProps = dispatch => ({
  uploadFiles: () => dispatch(actions.uploadFiles()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Upload);
