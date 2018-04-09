import Contants from '../../utils/constants';

const addFile = _files => ({
  type: Contants.ACTION_TYPES.ADD_FILES,
  files: _files,
});

const delFile = _filename => ({
  type: Contants.ACTION_TYPES.DEL_FILE,
  filename: _filename,
});

const delAllFile = () => ({
  type: Contants.ACTION_TYPES.DEL_ALL_FILE,
});

export default {
  addFile,
  delFile,
  delAllFile,
};
