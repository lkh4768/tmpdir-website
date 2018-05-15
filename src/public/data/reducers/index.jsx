import { combineReducers } from 'redux';

import file from './file';
import modal from './modal';
import tooltip from './tooltip';

export default combineReducers({
  file,
  modal,
  tooltip,
});
