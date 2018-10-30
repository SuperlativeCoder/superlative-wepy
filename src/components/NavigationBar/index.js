import wepy from 'wepy';

import { isIOS, statusBarHeight } from '../../utils/platform';

const ANDROID_NAVHAR_HEIGHT = 48;
const IOS_NAVBAR_HEIGHT = 44;

export default class NavigationNavBar extends wepy.component {
  props = {
    // 是否显示返回
    back: {
      type: Boolean,
      default: false,
    },
    // 导航栏背景色
    background: {
      type: String,
      default: '#ffffff',
    },
    // 导航栏占位栏背景色
    placeholderBg: {
      type: String,
      default: 'transparent',
    },
    // 导航栏字体色
    color: {
      type: String,
      default: '#000000',
    },
    // 导航栏字大小
    fontSize: {
      type: String,
      default: '40rpx',
    },
    // 导航栏标题
    title: {
      type: String,
      default: 'none',
    },
    // 导航栏是否fixed定位
    fixed: {
      type: Boolean,
      default: true,
    },
  }
  data = {
    height: 44,
    paddingTop: 20,
    showHomeButton: false,
    show: true,
  }
  onLoad() {
    const pages = getCurrentPages();
    if (pages.length < 2 && pages[0].route !== __wxConfig.pages[0]) {
      this.showHomeButton = true;
    }
    this.height = isIOS ? IOS_NAVBAR_HEIGHT : ANDROID_NAVHAR_HEIGHT;
    this.paddingTop = statusBarHeight;
  }
  events = {}

  methods = {
    navigateBack() {
      const pages = getCurrentPages();
      if (pages.length < 2 && pages[0].route !== __wxConfig.pages[0]) {
        wx.reLaunch({
          url: `/${__wxConfig.pages[0]}`,
        });
      } else {
        wx.navigateBack();
      }
    },
    navigateBackHome() {
      wx.reLaunch({
        url: `/${__wxConfig.pages[0]}`,
      });
    },
    toggleShow() {
      this.show = !this.show;
    },
  }
}
