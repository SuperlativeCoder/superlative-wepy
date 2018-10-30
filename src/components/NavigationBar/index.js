import wepy from 'wepy';

import { isIOS, statusBarHeight } from '../../utils/platform';

const ANDROID_NAVHAR_HEIGHT = 48;
const IOS_NAVBAR_HEIGHT = 44;

export default class NavigationNavBar extends wepy.component {
  props = {
    // 是否显示返回
    isNavigationBarNeedBack: {
      type: Boolean,
      default: true,
    },
    // 导航栏背景色
    navigationBarBackground: {
      type: String,
      default: '#ffffff',
    },
    // 导航栏占位栏背景色
    placeholderBg: {
      type: String,
      default: 'transparent',
    },
    // 导航栏字体色
    navigationBarColor: {
      type: String,
      default: '#000000',
    },
    // 导航栏字大小
    navigationBarFontSize: {
      type: String,
      default: '40rpx',
    },
    // 导航栏标题
    navigationBarTitle: {
      type: String,
      default: '',
    },
    // 导航栏是否fixed定位
    isNavigationBarFixed: {
      type: Boolean,
      default: true,
    },
  }
  data = {
    height: isIOS ? IOS_NAVBAR_HEIGHT : ANDROID_NAVHAR_HEIGHT,
    paddingTop: statusBarHeight,
    showHomeButton: false,
  }
  onLoad() {
    const pages = getCurrentPages();
    if (pages.length < 2 && pages[0].route !== __wxConfig.pages[0]) {
      this.showHomeButton = true;
    }
    this.$apply();
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
    toggleNavigateShow() {
      this.show = !this.show;
    },
  }
}
