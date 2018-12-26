import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';

const middlewares = [
  ReduxThunk,
];

const configureStore = (reducer, initState) => {
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  return createStore(reducer, initState, applyMiddleware(...middlewares));
};

export default configureStore;
