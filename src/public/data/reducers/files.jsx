import C from '../../utils/constants';
import File from '../../entities/File';

const initState = new Set();

function inputFilesToFileEntities(files) {
  const fileEntities = [];
  const len = files.length;
  for (let i = 0; i < len; i += 1) {
    fileEntities.push(new File(files[i].name, files[i].size));
  }
  return fileEntities;
}

const files = (state = initState, action) => {
  switch (action.type) {
    case C.ACTION_TYPES.ADD_FILES: {
      return new Set([
        ...state,
        ...inputFilesToFileEntities(action.files),
      ]);
    }
    case C.ACTION_TYPES.DEL_FILE: {
      return new Set([...state].filter(file => file.name !== action.filename));
    }
    case C.ACTION_TYPES.DEL_ALL_FILE: {
      return initState;
    }
    default:
      return state;
  }
};

export default files;
