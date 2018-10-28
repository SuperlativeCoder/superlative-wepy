import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, TEST } from '../constants/counter';

export default handleActions({
  [INCREMENT] (state, action) {
    console.log(state, 'state', arguments)
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
  [TEST] (state, action) {
    console.log(state, action, '11111')
    console.log('state', state)
    console.log('after state', state)
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload,
    }
  }
}, {
  num: 0,
  asyncNum: 0,
  testData: null,
});
