module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-console': ['warn', { allow: ['info', 'error'] }],
    quotes: ['error', 'single'],
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-extra-boolean-cast': 'off',

    'import/prefer-default-export': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
    'import/extensions': 'off',

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'ctx|args|req|res|next|^_',
      },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'object-curly-newline': [
      'off',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    'max-len': ["error", { "code": 140 }],
    "indent": "off",
    "@typescript-eslint/indent": ["error"]
  },
  ignorePatterns: ['.eslintrc.js'],
};
