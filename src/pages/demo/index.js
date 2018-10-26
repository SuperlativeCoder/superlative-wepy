import wepy from 'wepy';

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: 'test'
  }
  components = {
  }

  data = {
  }

  computed = {
  }

  methods = {
  }

  events = {
  }

  onLoad() {
  }
  onShow() {
    wepy.showToast('222');
  }
}