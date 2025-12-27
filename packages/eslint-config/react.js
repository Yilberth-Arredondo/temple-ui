/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['./base.js'],
  rules: {
    // Additional React-specific rules for apps
    'react/jsx-no-target-blank': 'error',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
  },
};