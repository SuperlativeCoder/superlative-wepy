// import actionTypes from '../../constants/actionTypes';
import { LOADING_STATUS } from '../constants/symbols';
import {
  INCREMENT,
  DECREMENT,
  TEST,
} from '../constants';
import {
  request,
  success,
  failure,
} from '../constants/actionTypes';

const initialState = {
  num: 0,
  testData: null,
  loadingStatus: LOADING_STATUS.DEFAULT,
};

export default (state = initialState, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        num: state.num + payload,
      };
    case DECREMENT:
      return {
        ...state,
        num: state.num - 1,
      };
    case request(TEST):
      return {
        ...state,
        testData: action.payload,
        loadingStatus: LOADING_STATUS.BEGIN,
      };
    case success(TEST):
      return {
        ...state,
        testData: action.payload,
        loadingStatus: LOADING_STATUS.SUCCESS,
      };
    case failure(TEST):
      return {
        ...state,
        testData: action.payload,
        loadingStatus: LOADING_STATUS.FAILURE,
      };
    default:
      return state;
  }
};
