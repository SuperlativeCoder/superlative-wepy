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
      default: '#fff',
    },
    // 导航栏占位栏背景色
    placeholderBg: {
      type: String,
      default: '#fff',
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
    navigateBackType: {
      type: Number,
      default: 1,
    },
    navigateBackModalTitle: {
      type: String,
      default: '',
    },
    navigateBackModalContent: {
      type: String,
      default: '确定要返回吗?',
    },
  }
  data = {
    height: isIOS ? IOS_NAVBAR_HEIGHT : ANDROID_NAVHAR_HEIGHT,
    paddingTop: statusBarHeight,
    showHomeButton: false,
    isNavigateBarShow: true,
  }
  computed = {
    totalHeight() {
      return `-${this.height + this.paddingTop}px`;
    },
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
    handleNavigate(param) {
      const that = this;
      if (!param.navigateBackType && this.navigateBackType === 1) {
        this.methods.navigateBack();
      } else if ((param && param.navigateBackType === 2) || this.navigateBackType === 2) {
        this.methods.navigateBackHome();
      } else if (param && param.navigateBackType === 3 && param.content) {
        wx.showModal({
          title: param.title || '',
          content: param.content,
          success(res) {
            if (res.confirm) {
              that.methods.navigateBack();
            }
          },
        });
      } else if (this.navigateBackType === 3 && this.navigateBackModalContent) {
        wx.showModal({
          title: this.navigateBackModalTitle,
          content: this.navigateBackModalContent,
          success(res) {
            if (res.confirm) {
              that.methods.navigateBack();
            }
          },
        });
      } else {
        wx.showToast({
          title: 'param error',
          icon: 'loading',
        });
      }
    },
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
      this.isNavigateBarShow = !this.isNavigateBarShow;
    },
  }
}
