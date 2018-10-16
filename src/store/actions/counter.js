import { createAction } from 'redux-actions';
import { ASYNC_INCREMENT } from '../types/counter';

export const asyncInc = createAction(ASYNC_INCREMENT, () => new Promise(resolve => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
}));
