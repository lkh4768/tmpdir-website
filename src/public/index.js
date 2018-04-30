import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import reducer from './data/reducers';
import Const from './utils/constants';

const initState = window.INITIAL_STATE;
const store = createStore(reducer, initState);
Const(window.CONST);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
