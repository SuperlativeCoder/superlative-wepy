import wepy from 'wepy';
import { connect } from 'wepy-redux';
import { INCREMENT, DECREMENT } from '../../../../constants/counter';
import { asyncInc } from '../../../../actions';

@connect({
  stateNum (state) {
    return state.counter.num;
  },
  asyncNum (state) {
    return state.counter.asyncNum;
  }
}, {
  incNum() {
    return {
      type: INCREMENT,
      // 修正一般情况下的参数 一般支持只传一个参数
      // 如果真的是多个参数的话 那么 payload 就是参数组成的数组
      payload: 3
    }
  },
  decNum: DECREMENT,
  asyncInc
})

export default class Counter extends wepy.component {
  props = {
    num: {
      type: [Number, String],
      coerce: function (v) {
        return +v
      },
      default: 50
    }
  }

  data = {
  }
  events = {
    'some-event': (...args) => {
      // 最后一个参数默认为该event对象
      const $event = args.pop();
      console.log(`${this.$name} receive ${$event.name} from ${$event.source.$name}`, this, args);
    },
  }

  watch = {
    num (curVal, oldVal) {
      console.log(`旧值：${oldVal}，新值：${curVal}`)
    }
  }

  methods = {
    plus () {
      this.num = this.num + 1
      this.$emit('some-event', 1, 2, 3);
    },
    minus () {
      this.num = this.num - 1
      console.log(this.$name + ' minus tap')
    },
    'test-invoke': (...args) => {
      console.log(args, 'test-invoke')
    }
  }
}