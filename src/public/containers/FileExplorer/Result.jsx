import { connect } from 'react-redux';
import actions from '../../data/actions';
import Result from '../../components/FileExplorer/Result';

const mapDispatchToProps = dispatch => ({
  delAllFile: () => dispatch(actions.delAllFile()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Result);
