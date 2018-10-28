const path = require('path');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  target: prod ? 'dist_release' : 'dist',
  cliLogs: !prod,
  build: {
    web: {
      htmlTemplate: path.join('public', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js'),
    },
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src'),
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules'],
  },
  compilers: {
    sass: {
      outputStyle: 'expanded',
    },
    babel: {
      sourceMap: !prod,
      presets: [
        'env',
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
        ['global-define', {
          __ENV__: process.env.NODE_ENV,
        }],
      ],
    },
  },
  plugins: {
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery'],
  },
};

if (prod) {
  // 压缩sass
  module.exports.compilers.sass = { outputStyle: 'compressed' };

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      },
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80,
        },
        png: {
          quality: 80,
        },
      },
    },
  };
}
