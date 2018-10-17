module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: "airbnb-base",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // required to lint *.wpy files
  plugins: [
    "html",
  ],
  settings: {
    "html/html-extensions": [".html", ".wpy"]
  },
  // add your custom rules here
  "rules": {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "space-before-function-paren": 0,
    "strict": 0,
    "max-len": ["error", 200, 4, {"ignoreUrls": true}],
    "global-require": 0,
    "no-param-reassign": 0,
    "generator-star-spacing": 0,
    "no-console": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}],
    "class-methods-use-this": 0,
    "dot-notation": 0,
  }
}
