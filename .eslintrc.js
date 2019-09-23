module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    'browser': true,
    'jest/globals': true,
    'node': true
  },
  extends: 'eslint:recommended',
  plugins: [
    'html',
    'jest'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'indent': ['error', 2, {'SwitchCase': 1}],
    'eol-last': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': ['error', 'always'],
    'curly': ['error', 'all']
  },
}
