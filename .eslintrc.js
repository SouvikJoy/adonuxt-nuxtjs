module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [

  ],
  // add your custom rules here
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 2
  },
  globals: {
    'use': true
  }
}
