import C from '_utils/constants';
import F from '_utils/func';

const initState = {
  list: [],
  regiId: '',
  expireTime: 0,
  uploading: false,
  totalSize: 0,
  upladedSize: 0,
  error: '',
};

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
      if (C.FILE.SIZE.MAX >= F.getTotalFileSize(newFiles)) {
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
    case C.ACTION_TYPES.UPLOAD_FILES_SUCCESS: {
      return {
        ...state,
        list: [],
        regiId: action.payload.regiId,
        expireTime: action.payload.expireTime,
        uploading: false,
      };
    }
    case C.ACTION_TYPES.UPLOAD_FILES_FAILURE: {
      return {
        ...state,
        list: [],
        error: action.error,
        uploading: false,
      };
    }
    case C.ACTION_TYPES.UPLOAD_FILES_PENDING: {
      return {
        ...state,
        uploading: true,
        totalSize: action.totalSize,
        uploadedSize: action.uploadedSize,
      };
    }
    case C.ACTION_TYPES.EMPTY_ERROR: {
      return { ...state, error: '' };
    }
    case C.ACTION_TYPES.EMPTY_REGI_ID: {
      return { ...state, regiId: '' };
    }
    default:
      return state;
  }
};

export default files;
