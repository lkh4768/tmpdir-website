import { connect } from 'react-redux';
import actions from '../../data/actions';
import File from '../../components/FileExplorer/File';

const mapDispatchToProps = dispatch => ({
  delFile: _filename => dispatch(actions.delFile(_filename)),
});

export default connect(
  null,
  mapDispatchToProps,
)(File);
