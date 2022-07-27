module.exports = {
    extends: ['@vfuk/ts', 'prettier'],
    rules: {
      curly: 'off',
      '@vfuk/rules/js-lodash-prefer-toLower': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'jsx-control-statements/jsx-jcs-no-undef': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      'import/extensions': [
        'error',
        {
          mock: 'ignorePackages',
          d: 'ignorePackages',
          svg: 'ignorePackages',
        },
      ],
    },
}
  