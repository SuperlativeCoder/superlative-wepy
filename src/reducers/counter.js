import { handleActions } from 'redux-actions';
import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  TEST,
} from '../constants';

import {
  request,
  success,
  failure,
} from '../constants/actionTypes';

export default handleActions({
  [INCREMENT] (state, action) {
    return {
      ...state,
      num: state.num + action.payload,
    };
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1,
    };
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload,
    };
  },
  [success(TEST)] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum,
      testData: action.payload,
    }
  }
}, {
  num: 0,
  asyncNum: 0,
  testData: null,
});
