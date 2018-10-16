import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';

const middlewares = [promiseMiddleware];
middlewares.push(createLogger({
  collapsed: true,
  diff: true,
}));

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
