import wepy from 'wepy';

import { connect } from 'wepy-redux';
import Panel from '@/components/panel';
import { INCREMENT } from '../../constants/counter';
import { requestTest } from '../../actions';
// @connect({
//   num (state) {
//     return state.counter.num,
//   }
// })
@connect({
  num (state) {
    console.log(state, 'state');
    return state.counter.num;
  },
}, {
  incNum() {
    console.log(arguments, 'arguments')
    return {
      type: INCREMENT,
      // 修正一般情况下的参数 一般支持只传一个参数
      // 如果真的是多个参数的话 那么 payload 就是参数组成的数组
      payload: 3
    };
  },
  requestTest,

})
export default class Index extends wepy.page {
  config = {
  }
  components = {
    panel: Panel,
  }

  data = {
  }

  computed = {
  }

  methods = {
    onAddNumClick() {
      // console.log(1, '111', this.num++)
      this.num = this.num + 1;
      this.$apply();
    },
    toIndexPage() {
      wepy.navigateTo({
        url: '/pages/index/index',
      });
    },
  }

  events = {
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
    console.log('onShow111');
    console.log(this.incNum, 'incNum', this.methods.incNum());

    this.methods.requestTest();
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
