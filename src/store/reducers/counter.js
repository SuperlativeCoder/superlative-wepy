import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter';

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
}, {
  num: 0,
  asyncNum: 0,
});
