const mock = require("./rules/mock.js");

const allRules = {
  "extra-arrow-initializer": mock,
  "no-console": mock,
  "no-new-error": mock,
  "no-symbol": mock,
  "react-hooks-deps": mock,
  "react-hooks": mock,
  "react-no-useless-fragment": mock,
  "typeof-undefined": mock,
  "cx-concat": mock,
  "flow-readonly-object": mock,
  "no-unsafe-html": mock,
  "no-null-fallback-for-error-boundary": mock,
  "no-unused-catch-bindings": mock, 
  "no-uninitialized-properties": mock,
  "relay-no-coarse-eslint-disable": mock,
  "relay-mutation-input-name": mock,
  "react-no-unused-state-hook": mock,
};

module.exports = {
  rules: allRules,
  configs: {
    recommended: {
      plugins: ["fb-www"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        "fb-www/extra-arrow-initializer": 0,
        "fb-www/no-console": 0,
        "fb-www/no-new-error": 0,
        "fb-www/no-symbol": 0,
        "fb-www/react-hooks-deps": 0,
        "fb-www/react-hooks": 0,
        "fb-www/react-no-useless-fragment": 0,
        "fb-www/typeof-undefined": 0,
        "fb-www/cx-concat": 0,
        "fb-www/flow-readonly-object": 0,
        "fb-www/no-unsafe-html": 0,
        "fb-www/no-null-fallback-for-error-boundary": 0,
        "fb-www/no-unused-catch-bindings": 0,
        "fb-www/no-uninitialized-properties": 0,
        "fb-www/relay-no-coarse-eslint-disable": 0,
        "fb-www/relay-mutation-input-name": 0,
        "fb-www/react-no-unused-state-hook": 0,
      },
    },
    all: {
      plugins: ["fb-www"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
};
