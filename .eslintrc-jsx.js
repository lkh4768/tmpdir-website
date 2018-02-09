module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true
  },
  'extends': [
    'airbnb' 
  ],
  'rules': {
    'react/require-default-props': [
      'error',
      { 
        'forbidDefaultForRequired': true 
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      } 
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true
      }
    ]
  },
  'plugins': [
    'react'
  ]
};
