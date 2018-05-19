import { connect } from 'react-redux';
import actions from '_data/actions';
import File from '../../components/File';

const mapStateToProps = state => ({
  error: state.file.error,
});

const mapDispatchToProps = dispatch => ({
  delFile: _filename => dispatch(actions.delFile(_filename)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(File);
