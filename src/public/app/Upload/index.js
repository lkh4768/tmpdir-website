import React from 'react';

import Utils from '_common/Utils';
import reducer from '_data/reducers/upload';

import App from './App';
import locale from './locale';

Utils.render(<App />, reducer, locale)();
