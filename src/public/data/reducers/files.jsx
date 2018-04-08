import Constants from '../../utils/constants';
import File from '../../entities/File';

const initState = [];

const files = (state = initState, action) => {
  switch (action.type) {
    case Constants.ACTION_TYPES.ADD_FILE: {
      const exist = state.some(file => file.name === action.file.name);
      return (exist) ? [
        ...state,
      ] : [
        ...state,
        new File(action.file.name, action.file.size),
      ];
    }
    case Constants.ACTION_TYPES.DEL_FILE: {
      return state.filter(file => file.name !== action.filename);
    }
    case Constants.ACTION_TYPES.DEL_ALL_FILE: {
      return initState;
    }
    default:
      return state;
  }
};

export default files;
