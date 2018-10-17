import wepy from 'wepy';
import { connect } from 'wepy-redux'
import moduleA from 'module-a' // aliasFields ignore module example
import testMixin from '../../mixins/test'

console.log('moduleA ignored: ', moduleA) // => moduleA ignored: {}

export default class NavigationNavBar extends wepy.component {
  config = {
  }

  mixins = [testMixin]

  data = {
  }

  computed = {
    now () {
      return +new Date()
    }
  }

  methods = {
    
  }

  events = {
    'index-emit': (...args) => {
      let $event = args[args.length - 1]
      console.log(`${this.$name} receive ${$event.name} from ${$event.source.$name}`)
    }
  }

  onLoad() {
    
  }
  onShow() {

    wx.showToast();
  }
}