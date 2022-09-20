module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'arrow-parens': 'off',
    'import/no-unresolved': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: [2, 'never'],
    'react/no-unstable-nested-components': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-debugger': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-bind': 'off',
  },
}
