const mock = require('./rules/mock.js')

const allRules = {
  'react-hooks': mock,
  'react-no-useless-fragment': mock,
  'react-hooks-deps': mock,
  'no-console': mock,
  'no-symbol': mock,
  'extra-arrow-initializer': mock,
}

module.exports = {
  rules: allRules,
  configs: {
    recommended: {
      plugins: [
        'fb-www'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'fb-www/react-hooks': 0,
        'fb-www/react-no-useless-fragment': 0,
        'fb-www/react-hooks-deps': 0,
        'fb-www/no-console': 0,
        'fb-www/no-symbol': 0,
        'fb-www/extra-arrow-initializer': 0
      }
    },
    all: {
      plugins: [
        'fb-www'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  }
};
