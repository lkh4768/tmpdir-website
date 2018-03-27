import { combineReducers } from 'redux';

import files from './files';
import localFileExplorer from './localFileExplorer';

export default combineReducers({
  files,
  localFileExplorer,
});
