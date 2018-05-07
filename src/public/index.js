import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '_components/App';
import createStore from '_data/store';

const initState = window.INITIAL_STATE;
const store = createStore(initState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
