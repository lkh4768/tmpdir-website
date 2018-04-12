import { connect } from 'react-redux';
import Upload from '../../components/Upload/Upload';

const mapStateToProps = state => ({
  files: state.files,
});

export default connect(
  mapStateToProps,
  null,
)(Upload);
