import wepy from 'wepy';

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
  // onReady() {   console.log(2222) } onShow() {   console.log(3333) }
  onLoad() {
    console.log(333, this)
    //检测首页是否在当前页面栈中
    let pages = getCurrentPages();
    let showHomeButton = false;
    if (pages.length < 2 && pages[0].route != __wxConfig.pages[0]) {
      showHomeButton = true;
    }
    //导航栏自适应
    let systemInfo = wx.getSystemInfoSync();
    console.log(pages, __wxConfig, wx.getSystemInfoSync())
    let reg = /ios/i;
    let pt = 20; //导航状态栏上内边距
    let h = 44; //导航状态栏高度
    if (reg.test(systemInfo.system)) {
      pt = systemInfo.statusBarHeight;
      h = 44;
    } else {
      pt = systemInfo.statusBarHeight;
      h = 48;
    }
    console.log(h, '2242423', systemInfo.statusBarHeight)
    // this.setData({   height: h,   paddingTop: pt,   showHomeButton:
    // showHomeButton })
    this.height = h;
    this.paddingTop = pt;
    this.$apply();
    console.log(this);
  }
  created() {
    console.log(444)
  }
  attached(option) {
    console.log(11111)
    //检测首页是否在当前页面栈中
    let pages = getCurrentPages();
    let showHomeButton = false;
    if (pages.length < 2 && pages[0].route != __wxConfig.pages[0]) {
      showHomeButton = true;
    }
    //导航栏自适应
    let systemInfo = wx.getSystemInfoSync();
    console.log(pages, __wxConfig, wx.getSystemInfoSync())
    let reg = /ios/i;
    let pt = 20; //导航状态栏上内边距
    let h = 44; //导航状态栏高度
    if (reg.test(systemInfo.system)) {
      pt = systemInfo.statusBarHeight;
      h = 44;
    } else {
      pt = systemInfo.statusBarHeight;
      h = 48;
    }
    this.setData({height: h, paddingTop: pt, showHomeButton: showHomeButton})
    console.log(this);
  }
  events = {}

  methods = {
    // 这里是一个自定义方法
    navigateBack() {
      let pages = getCurrentPages();
      if (pages.length < 2 && pages[0].route != __wxConfig.pages[0]) {
        wx.reLaunch({
          url: '/' + __wxConfig.pages[0]
        })
      } else {
        wx.navigateBack();
      }
    },
    navigateBackHome() {
      wx.reLaunch({
        url: '/' + __wxConfig.pages[0]
      })
    },
    /**
     * 切换导航栏显示
      */
    toggleShow() {
      if (!this.data.show) {
        this.setData({show: true});
      }
    },
    /**
     * 切换导航栏隐藏
      */
    toggleHide() {
      if (this.data.show) {
        this.setData({show: false});
      }
    }
  }
}