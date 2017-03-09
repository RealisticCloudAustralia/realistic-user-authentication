module.exports = {  
  // Secret key for JWT signing and encryption
  'secret': 'super secret passphrase',
  // Database connection information
  'database': 'mongodb://heroku_jzsq09w7:abcd1234@ds123400.mlab.com:23400/heroku_jzsq09w7',
  // Setting port for server
  'port': process.env.PORT || 3000    
}

