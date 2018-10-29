import wepy from 'wepy';
import 'wepy-async-function';

import { setStore } from 'wepy-redux';
import configStore from './store';

const store = configStore();

setStore(store);

export default class extends wepy.app {
  config = {
    pages: [
      'pages/demo/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      navigationStyle: 'custom',
    },
    // 网络超时时间最大15s
    networkTimeout: {
      request: 15000,
    },
  }

  globalData = {
    userInfo: null,
  }

  constructor () {
    super();
    // 修复request最大并发不能超过5的问题, 默认最大可支持到10
    this.use('requestfix');
    // 使之支持promise
    this.use('promisify');
  }
  // 生命周期改异步写法
  async onShow() {
    await wepy.setStorage({ key: 'y', data: '2222' });
  }
  // promise test
  sleep (s) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise resolved');
      }, s * 1000);
    });
  }
  // async test
  async testAsync () {
    await this.sleep(3);
  }
}
