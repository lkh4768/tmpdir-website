import C from '../../utils/constants';
import F from '../../utils/func';

const initState = {
  list: [],
  regiId: '',
  uploading: false,
  error: '',
};

const getTotalFileSize = files => files.reduce((sum, file) => sum + file.size, 0);

const files = (state = initState, action) => {
  switch (action.type) {
    case C.ACTION_TYPES.ADD_FILES: {
      const newFiles = F.uniqArray(
        [
          ...state.list,
          ...action.files,
        ],
        'name',
      );
      if (C.FILE.SIZE.MAX >= getTotalFileSize(newFiles)) {
        return { ...state, list: newFiles };
      }
      return { ...state, error: '파일 용량 초과' };
    }
    case C.ACTION_TYPES.DEL_FILE: {
      return {
        ...state,
        list: state.list.filter(file => file.name !== action.filename),
      };
    }
    case C.ACTION_TYPES.DEL_ALL_FILE: {
      return initState;
    }
    case C.ACTION_TYPES.UPLOAD_FILES: {
      return {
        list: [],
        regiId: action.data,
        error: action.error,
        uploading: action.uploading,
      };
    }
    case C.ACTION_TYPES.EMPTY_ERROR: {
      return { ...state, error: '' };
    }
    default:
      return state;
  }
};

export default files;
