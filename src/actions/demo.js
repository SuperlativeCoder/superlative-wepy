
import {
  INCREMENT,
  DECREMENT,
  TEST,
} from '../constants/demo';
import { MOCK_HOST } from '../constants/host';
import { CALL_API } from '../constants/symbols';

export function incNum() {
  return {
    type: INCREMENT,
    payload: 3,
  };
}

// 直接以常量作为action, 此时payload为null
export const decNum = DECREMENT;

export function requestTest(success, error) {
  return {
    [CALL_API]: {
      url: `${MOCK_HOST}/mock/5bd5520714b346597c3408ba/example/query`,
      type: TEST,
      success,
      error,
    },
  };
}
