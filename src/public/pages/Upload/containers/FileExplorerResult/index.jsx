import { connect } from 'react-redux';
import actions from '_data/actions';
import FileExplorerResult from '../../components/FileExplorerResult';

const mapStateToProps = state => ({
  modalIsOpen: state.modal.isOpen,
  files: state.file.list,
});

const mapDispatchToProps = dispatch => ({
  delAllFile: () => dispatch(actions.delAllFile()),
  toggleModal: () => dispatch(actions.toggleModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileExplorerResult);
