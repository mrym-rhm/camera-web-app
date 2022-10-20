module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', 'eslint:recommended'],
  plugins: [],
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        printWidth: 130,
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'auto',
        tabWidth: 2,
      },
    ],
  },
};
