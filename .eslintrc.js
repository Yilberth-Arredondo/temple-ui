/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@temple-ui/eslint-config/base',
  ],
  ignorePatterns: [
    'node_modules',
    'dist',
    'build',
    '.next',
    'coverage',
    '*.d.ts'
  ],
};