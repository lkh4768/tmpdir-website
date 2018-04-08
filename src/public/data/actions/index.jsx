import Contants from '../../utils/constants';

const addFile = _file => ({
  type: Contants.ACTION_TYPES.ADD_FILE,
  file: _file,
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
