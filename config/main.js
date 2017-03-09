module.exports = {  
  // Secret key for JWT signing and encryption
  'secret': 'super secret passphrase',
  // Database connection information
  'database': 'mongodb://heroku_zhbzbh4l:u25dfj6h9jkha7hcmcaj4pl41u@ds123370.mlab.com:23370/heroku_zhbzbh4l',    
  // Setting port for server
  'port': process.env.PORT || 3000    
}

