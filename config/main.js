module.exports = {  
  // Secret key for JWT signing and encryption
  'secret': 'super secret passphrase',
  // Database connection information
  'database': 'mongodb://heroku_jsgfv3wj:tctof8mku69t2bnepcgb5vvt0k@ds123370.mlab.com:23370/heroku_jsgfv3wj',
  // Setting port for server
  'port': process.env.PORT || 3000    
}