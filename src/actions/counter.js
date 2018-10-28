
import { createAction } from 'redux-actions';
import {
  ASYNC_INCREMENT,
  TEST,
} from '../constants';
import { CALL_API } from '../constants/symbols';

export const asyncInc = createAction(ASYNC_INCREMENT, () => new Promise(resolve => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
}));

export function requestTest(success, error) {
  return {
    [CALL_API]: {
      url: 'http://mock.changerhe.cn/mock/5bd5520714b346597c3408ba/example/query',
      type: TEST,
      success,
      error,
    },
  };
}
