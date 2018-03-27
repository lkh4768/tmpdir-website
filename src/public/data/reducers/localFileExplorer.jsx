import Constants from '../../utils/constants';

const initState = {
  is: false,
};

const localFileExplorer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case Constants.ACTION_TYPES.SHOW_LOCAL_FILE_EXPLORER: {
      return Object.assign({}, state, {
        is: action.is,
      });
    }
    default:
      return state;
  }
};

export default localFileExplorer;
