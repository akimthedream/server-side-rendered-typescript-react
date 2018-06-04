const path = require('path');

const clientConfig = {
  mode: 'production',
  target: 'web',
  entry: './src/client.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.client.js',
    path: path.resolve(__dirname, 'dist')
  }
};

const serverConfig = {
  mode: 'production',
  target: 'node',
  entry: './src/app.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.server.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = [serverConfig, clientConfig];
