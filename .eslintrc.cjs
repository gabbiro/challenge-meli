module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['*.test.js', 'jest.config.cjs', 'dist', '.eslintrc.cjs', 'server', 'webpack.config.cjs', 'babel.config.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'prettier/prettier': ['error', {
      singleQuote: true
    }],
    'react/prop-types': 'off',
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true
      },
    ],
  },
}