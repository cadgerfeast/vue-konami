module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    'jest/globals': true,
    'browser': true,
    'node': true
  },
  extends: 'eslint:recommended',
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'indent': ['error', 2, {'SwitchCase': 1}],
    'eol-last': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': ['error', 'always'],
    'curly': ['error', 'all']
  },
}
