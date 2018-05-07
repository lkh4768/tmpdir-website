import { connect } from 'react-redux';
import actions from '_data/actions';
import File from '_components/File';

const mapDispatchToProps = dispatch => ({
  delFile: _filename => dispatch(actions.delFile(_filename)),
});

export default connect(
  null,
  mapDispatchToProps,
)(File);
