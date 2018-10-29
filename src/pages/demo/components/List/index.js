import wepy from 'wepy'

export default class List extends wepy.component {
  data = {
    list: [
      {
        id: '0',
        title: 'loading'
      }
    ]
  }

  events = {
    'index-broadcast': (...args) => {
      let $event = args[args.length - 1]
      // console.log(`${this.$name} receive ${$event.name} from ${$event.source.name}`)
    }
  }

  methods = {
    tap () {
      // this.num = this.num + 1
      // console.log(this.$name + ' tap')
    },
    add () {
      let len = this.list.length
      this.list.push({id: len + 1, title: 'title_' + len})
    }
  }

  onLoad () {
  }
}