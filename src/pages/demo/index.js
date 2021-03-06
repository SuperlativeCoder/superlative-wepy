import wepy from 'wepy';
import { connect } from 'wepy-redux';

import NavigationBar from 'components/NavigationBar/index';
import testMixin from '../../mixins/test';
import Panel from './components/Panel/index';
import List from './components/List/index';
import Counter from './components/Counter/index';
import { INCREMENT, DECREMENT } from '../../constants/demo';
import { requestTest } from '../../actions';
import { isIphonex, isIOS, isAndroid } from '../../utils/platform';

@connect({
  num (state) {
    return state.demo.num;
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
    'navigation-bar': NavigationBar,
  }
  data = {
    testData: '测试文本内容',
    navigationBarTitle: 'DEMO',
    isNavigationBarNeedBack: false,
  }
  mixins = [testMixin]
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
    toTestPage() {
      wepy.navigateTo({
        url: '/pages/test1/index',
      });
    },
    toggleNavigationBar() {
      this.$invoke('navigation-bar', 'toggleNavigateShow', 1, 2, 3);
    },
    showBasicToast() {
      wx.showToast({
        title: '自定义标题',
        image: '../../public/images/icon-back.svg',
      });
    },
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
    console.log('onShow', isIphonex, isIOS, isAndroid);
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
