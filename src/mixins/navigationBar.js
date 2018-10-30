import wepy from 'wepy';

export default class navigationBarMixin extends wepy.mixin {
  data = {
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
