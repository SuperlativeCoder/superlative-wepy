import wepy from 'wepy';
import { connect } from 'wepy-redux';
import { incNum, decNum } from '../../../../actions';

@connect({
  stateNum (state) {
    return state.demo.num;
  },
}, {
  incNum,
  decNum,
})

export default class Counter extends wepy.component {
  props = {
    num: {
      type: [Number, String],
      default: 50,
    },
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
      console.log(`旧值：${oldVal}，新值：${curVal}`);
    },
  }

  methods = {
    plus () {
      this.num = this.num + 1;
      this.$emit('some-event', 1, 2, 3);
    },
    minus () {
      this.num = this.num - 1;
      // console.log(this.$name + ' minus tap');
    },
  }
}
