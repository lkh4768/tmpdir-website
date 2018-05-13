import { connect } from 'react-redux';
import Backdrop from '_components/Backdrop';

const mapStateToProps = state => ({
  uploadedSize: state.file.uploadedSize,
  totalSize: state.file.totalSize,
});

export default connect(
  mapStateToProps,
  null,
)(Backdrop);
