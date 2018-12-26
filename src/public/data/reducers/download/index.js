import { combineReducers } from 'redux';

import file from './file';
import location from './location';

export default combineReducers({
  file,
  location,
});
