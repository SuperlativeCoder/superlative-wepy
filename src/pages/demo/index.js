import wepy from 'wepy';
import { connect } from 'wepy-redux';

import Panel from './components/Panel/index';
import List from './components/List/index';
import Counter from './components/Counter/index';
import { INCREMENT, DECREMENT } from '../../constants/counter';
import { requestTest } from '../../actions';

@connect({
  num (state) {
    console.log(state, 'state');
    return state.counter.num;
  },
}, {
  incNum() {
    return {
      type: INCREMENT,
      payload: 3,
    };
  },
  // 允许直接写的写法, payload默认为undefined
  decNum: DECREMENT,
  requestTest,

})
export default class Index extends wepy.page {
  config = {
  }
  components = {
    panel: Panel,
    counter1: Counter,
    counter2: Counter,
    list: List,
  }

  data = {
    testData: '测试文本内容',
  }

  computed = {
  }

  methods = {
    onAddNumClick() {
      this.methods.incNum();
      this.methods.decNum();
      // 父向子传递事件
      this.$broadcast('some-event', 1, 2, 3);
      // 调用子组件的事件, 但不能直接调用events中的事件
      this.$invoke('counter1', 'plus', 1, 2, 3);

      this.testData = '我又变了';
    },
    // toIndexPage() {
    //   wepy.navigateTo({
    //     url: '/pages/index/index',
    //   });
    // },
  }

  events = {
    'some-event': (...args) => {
      // 最后一个参数默认为该event对象
      const $event = args.pop();
      console.log(`${this.$name} receive ${$event.name} from ${$event.source.$name}`, this, args);
    },
  }

  onLoad() {
    console.log('onLoad');
  }
  onReady() {
    // Do something when page ready.
    console.log('onReady');
  }
  onShow() {
    // Do so  mething when page show.
    console.log('onShow');
    this.methods.incNum();
    this.methods.requestTest();
    this.testData = '我变了';
  }
  onHide() {
    // Do something when page hide.
    console.log('onHide');
  }
  onUnload() {
    // Do something when page close.
    console.log('onUnload');
  }
  onPullDownRefresh() {
    // Do something when pull down.
    console.log('onPullDownRefresh');
  }
  onReachBottom() {
    // Do something when page reach bottom.
    console.log('onReachBottom');
  }
  onShareAppMessage () {
    // return custom share data when user share.
    console.log('onShareAppMessage');
  }
  onPageScroll() {
    // Do something when page scroll
    console.log('onPageScroll');
  }
}
