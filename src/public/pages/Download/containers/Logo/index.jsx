import { connect } from 'react-redux';
import actions from '_data/actions';
import Logo from '../../components/Logo';

const mapStateToProps = state => ({
  origin: state.location.origin,
});

const mapDispatchToProps = dispatch => ({
  getOrigin: () => dispatch(actions.getOrigin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logo);
