import { connect } from 'react-redux';
import Backdrop from '_components/Backdrop';
import F from '_utils/func';

const progressText = (totalSize, uploadedSize) => [
  Math.round((uploadedSize * 100) / totalSize),
  '% (',
  F.convertFileSize(uploadedSize),
  '/',
  F.convertFileSize(totalSize),
  ')',
].join('');

const mapStateToProps = state => ({
  width: Math.round((state.file.uploadedSize * 100) / state.file.totalSize),
  text: progressText(state.file.totalSize, state.file.uploadedSize),
});

export default connect(
  mapStateToProps,
  null,
)(Backdrop);
