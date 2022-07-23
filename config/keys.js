if (process.env.NODE_ENV === 'production') {
   console.log('Using production config');
    module.exports = require('./prod');
  } else if (process.env.NODE_ENV === 'ci') {
    console.log('Using ci config');
    module.exports = require('./ci');
  } else {
    console.log('Using development config');
    module.exports = require('./dev');
  }