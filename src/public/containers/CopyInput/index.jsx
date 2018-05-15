import { connect } from 'react-redux';
import actions from '_data/actions';
import CopyInput from '_components/CopyInput';

const mapStateToProps = state => ({
  tooltipOpen: state.tooltip.isOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleTooltip: () => dispatch(actions.toggleTooltip()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CopyInput);
