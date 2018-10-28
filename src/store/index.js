import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';
import api from '../middlewares/api';

const middlewares = [api, promiseMiddleware];

if (global['__ENV__'] === 'development') {
  middlewares.push(require('redux-logger').createLogger({
    collapsed: true,
    diff: true,
  }));
}

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
