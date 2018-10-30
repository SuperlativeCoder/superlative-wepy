import wepy from 'wepy';

export default class navigationBarMixin extends wepy.mixin {
  data = {
    isNavigationBarNeedBack: false,
    isNavigationBarFixed: true,
    navigationBarBackground: '#fff',
    navigationBarColor: '#000',
    navigationBarFontSize: '40rpx',
    navigationBarTitle: '',
    navigationPlaceholderBg: '#fff',
  }
  methods = {
  }

  onShow() {
    console.log('navigationBar mixin onShow');
  }

  onLoad() {
    console.log('navigationBar mixin onLoad');
  }
}
