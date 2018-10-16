import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'

const middlewares = [promiseMiddleware]
middlewares.push(createLogger({
  collapsed: true,
  diff: true
}))

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
};
