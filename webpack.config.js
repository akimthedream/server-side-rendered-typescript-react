const path = require('path');

const clientConfig = {
  mode: 'production',
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
    path: path.resolve(__dirname, 'assets')
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
    path: path.resolve(__dirname, 'assets')
  }
};


module.exports = [serverConfig, clientConfig];
