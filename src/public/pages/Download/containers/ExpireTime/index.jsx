import { connect } from 'react-redux';
import actions from '_data/actions';
import ExpireTime from '../../components/ExpireTime';

const mapStateToProps = state => ({
  expireTime: state.file.expireTime.data,
  loading: state.file.expireTime.loading,
});

const mapDispatchToProps = dispatch => ({
  reqFileInfo: regiId => dispatch(actions.reqFileInfo(regiId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpireTime);
