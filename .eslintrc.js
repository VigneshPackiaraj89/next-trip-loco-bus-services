module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "overrides": [
        {
          "files": [
            "**/*.spec.js",
            "**/*.spec.jsx"
          ],
          "env": {
            "jest": true
          }
        }
      ],
      "globals": {
          "React": true,
          "beforeAll": true,
          "global": true,
          "jest": true
      }
};
