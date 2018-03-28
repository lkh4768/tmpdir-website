import Constants from '../../utils/constants';

const initState = {
  isShowLocalFileExplorer: false,
};

const localFileExplorer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case Constants.ACTION_TYPES.SHOW_LOCAL_FILE_EXPLORER: {
      return Object.assign({}, state, {
        isShowLocalFileExplorer: true,
      });
    }
    case Constants.ACTION_TYPES.HIDE_LOCAL_FILE_EXPLORER: {
      return Object.assign({}, state, {
        isShowLocalFileExplorer: false,
      });
    }
    default:
      return state;
  }
};

export default localFileExplorer;
