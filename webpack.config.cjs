const path = require('path');

module.exports = {
  mode: 'production',
  entry: './server/index.cjs',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'server.cjs',
  },
  target: 'node',
};