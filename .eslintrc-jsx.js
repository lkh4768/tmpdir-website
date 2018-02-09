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
      2,
      { 
        'forbidDefaultForRequired': true 
      }
    ],
    'react/jsx-filename-extension': [
      2,
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      } 
    ]
  },
  'plugins': [
    'react'
  ]
};
