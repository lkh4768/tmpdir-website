import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '_data/store';
import reducer from '_data/reducers/download';
import App from './App';

const initState = window.INITIAL_STATE;
const store = configureStore(reducer, initState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
