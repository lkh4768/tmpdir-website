import C from '_utils/constants';
import F from '_utils/func';

export const initState = {
  list: [],
  regiId: '',
  expireTime: 0,
  uploading: false,
  totalSize: 0,
  uploadedSize: 0,
  error: '',
};

const file = (state = initState, action = { type: C.ACTION_TYPES.NONE }) => {
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
        list: state.list.filter(f => f.name !== action.filename),
      };
    }
    case C.ACTION_TYPES.DEL_ALL_FILE: {
      return {
        ...state,
        list: [],
      };
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

export default file;
