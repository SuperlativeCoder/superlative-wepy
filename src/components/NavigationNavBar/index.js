import wepy from 'wepy';
import moduleA from 'module-a' // aliasFields ignore module example

console.log('moduleA ignored: ', moduleA) // => moduleA ignored: {}

export default class NavigationNavBar extends wepy.component {
  props = {
    back: { //是否显示返回
      type: Boolean,
      default: false
    },
    background: { //导航栏背景色
      type: String,
      default: '#ffffff', //默认
    },
    placeholderBg: { //导航栏占位栏背景色
      type: String,
      default: 'transparent', //默认
    },
    color: { //导航栏字体色
      type: String,
      default: '#000000', //默认
    },
    fontSize: { //导航栏字大小
      type: String,
      default: '40rpx', //默认
    },
    title: { //导航栏标题
      type: String,
      default: 'none', //默认
    },
    fixed: { //导航栏是否fixed定位
      type: Boolean,
      default: true, //默认
    }
  }
  data = {
    // 这里是一些组件内部数据
    height: 44, //导航栏高度,
    paddingTop: 20, //导航栏上内边距对应状态栏高度
    showHomeButton: false, //是否显示返回首页
    show: true, //是否显示导航栏
  }
  // onReady() {   console.log(2222) } onShow() {   console.log(3333) }
  onLoad() {
    console.log(333, this)
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
        wx.navigateBack({delta: 1});
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