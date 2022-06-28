module.exports = {
  env: {
    node: true
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
};
