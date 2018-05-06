import { connect } from 'react-redux';
import actions from '../../data/actions';
import Result from '../../components/FileExplorer/Result';

const mapStateToProps = state => ({
  modalIsOpen: state.modal.isOpen,
});

const mapDispatchToProps = dispatch => ({
  delAllFile: () => dispatch(actions.delAllFile()),
  toggleModal: () => dispatch(actions.toggleModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result);
