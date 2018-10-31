import wepy from 'wepy';

export default class Panel extends wepy.component {

  data = {
    reveal: false,
    img: '',
    animationData: '',
    imgClassName: '',
    imgMode: 'scaleToFill',
    title: '载入中...',
    titleClassName: '',
  };

  methods = {};

  onLoad () {
    this.hasPromise = (typeof Promise !== undefined);
  }

  show (data = {}) {
    this.reveal = true;
    for (const k in data) {
      this[k] = data[k];
    }
    this.$apply();

    clearTimeout(this.__timeout);

    setTimeout(() => {
      const animation = wx.createAnimation();
      animation.opacity(1).step();
      this.animationData = animation.export();
      this.reveal = true;
      this.$apply();
    }, 30);


    if (data.duration === 0) {
            // success callback after toast showed
      if (this.hasPromise) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(data);
          }, 430);
        });
      }
      setTimeout(() => (typeof data.success === 'function') ? data.success(data) : data, 430);
    } else {
      if (this.hasPromise) {
        return new Promise((resolve, reject) => {
          this.__timeout = setTimeout(() => {
            this.toast();
            resolve(data);
          }, (data.duration || 1500) + 400);
        });
      }
      this.__timeout = setTimeout(() => {
        this.toast();

                    // success callback
        typeof data.success === 'function' && data.success(data);
      }, (data.duration || 1500) + 400);
    }
  }

  toast (data) {
    let err = false;
    try {
      if (!data) {
        this.hide();
      } else {
        this.show(data);
      }
    } catch (e) {
      err = e;
    }

    if (this.hasPromise) {
      return new Promise((resolve, reject) => {
        if (!err) {
          resolve(data);
        } else { reject(data); }
      });
    }
    if (err) {
      typeof data.fail === 'function' && data.fail(data);
    } else {
      typeof data.success === 'function' && data.success(data);
    }
  }

  hide () {
    clearTimeout(this.__timeout);
    this.reveal = false;

    const animation = wx.createAnimation();
    animation.opacity(0).step();
    this.animationData = animation.export();

    this.$apply();

    if (this.hasPromise) {
      return new Promise((resolve, reject) => {
        resolve();
      });
    }
    if (typeof data.success === 'function') {
      return data.success(data);
    }
  }
}
