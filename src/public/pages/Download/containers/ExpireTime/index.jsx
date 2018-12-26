import { connect } from 'react-redux';
import actions from '_data/actions';
import ExpireTime from '../../components/ExpireTime';

const mapStateToProps = state => ({
  expireTime: state.file.expireTime,
  download: state.file.download,
});

const mapDispatchToProps = dispatch => ({
  reqFileInfo: regiId => dispatch(actions.reqFileInfo(regiId)),
  reqDownloadFile: regiId => dispatch(actions.reqDownloadFile(regiId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpireTime);
