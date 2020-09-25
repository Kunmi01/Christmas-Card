module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // allow .js files, instead of .jsx
    'no-underscore-dangle': ['error', { allow: ['__REDUX_DEVTOOLS_EXTENSION__'] }], // allow redux dev tools
    'no-use-before-define': ['error', { functions: false }], // due to function hoisting, it's safe to turn this rule off,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
};
