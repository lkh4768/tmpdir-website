module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017
  },
  'env': {
    'browser': true
  },
  'extends': [
    'eslint:recommended',
    'airbnb',
  ],
  'rules': {
    'react/require-default-props': [
      'error',
      { 'forbidDefaultForRequired': true }
    ],
    'react/jsx-filename-extension': [
      'error',
      { 'extensions': ['.js', '.jsx'] }
    ],
    'import/no-extraneous-dependencies': [
      'error', 
      { 'devDependencies': true }
    ]
  },
  'plugins': [
    'react',
    'import',
  ],
  'settings': { 
    'import/resolver': {
      'webpack': {
        'config': 'webpack.config.dev.js'
      },
    }
  },
};
