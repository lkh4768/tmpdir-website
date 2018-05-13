import { connect } from 'react-redux';
import actions from '_data/actions';
import UploadedPanel from '_components/UploadedPanel';

const mapStateToProps = state => ({
  regiId: state.file.regiId,
  isOpen: state.uploadedPanel.isOpen,
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(actions.toggleUploadedPanel()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadedPanel);
