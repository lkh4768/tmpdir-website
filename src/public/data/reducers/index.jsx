import { combineReducers } from 'redux';

import file from './file';
import modal from './modal';
import uploadedPanel from './uploadedPanel';

export default combineReducers({
  file,
  modal,
  uploadedPanel,
});
