import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config[]} */
export default [
  importPlugin.flatConfigs.recommended,
  {
    files: ["*/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module"
    },
    plugins: {
      jest: jestPlugin
    },
    rules: {
      'import/no-deprecated': [
        'warn'
      ],
      'brace-style': [
        'warn',
        '1tbs',
        {
          'allowSingleLine': true
        }
      ],
      'capitalized-comments': [
        'off',
        'never'
      ],
      'comma-dangle': 'error',
      'default-case': 'error',
      'dot-notation': 'off',
      'id-denylist': [
        'error',
        'String',
        'string',
        'Boolean',
        'boolean',
        'Undefined',
        'undefined'
      ],

      'indent': [
        'warn',
        4
      ],
      'no-empty': 'error',
      'no-empty-function': 'off',
      'no-redeclare': 'error',
      'no-shadow': 'off',
      'no-unused-expressions': 'warn',
      'no-use-before-define': 'off',
      'semi': 'error',

      // Jest rules
      "jest/no-disabled-tests": "off",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "warn",
      "jest/prefer-spy-on": "warn",
      "jest/prefer-to-be": "warn",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error"
    }
  },
  {
    ignores: ["dist/", "docs/"]
  },
  {
    settings: {
      "import/ignore": [
        "vitest"
      ],
    },
  }
];
