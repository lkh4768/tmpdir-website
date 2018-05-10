import { connect } from 'react-redux';
import UploadedPanel from '_components/UploadedPanel';

const mapStateToProps = state => ({
  regiId: state.file.regiId,
});

export default connect(
  mapStateToProps,
  null,
)(UploadedPanel);
