import { connect } from 'react-redux';
import actions from '_data/actions';
import UploadedPanel from '../../components/UploadedPanel';

const mapStateToProps = state => ({
  regiId: state.file.regiId,
  expireTime: state.file.expireTime,
  uploading: state.file.uploading,
});

const mapDispatchToProps = dispatch => ({
  emptyRegiId: () => dispatch(actions.emptyRegiId()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadedPanel);
