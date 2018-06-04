const express = require('express');
const app = require('./dist/bundle.server.js').default;
const {renderToString} = require('react-dom/server');

const port = 5000;
const server = express();

server.use(express.static('dist'));

server.get('*', (req, res) => {
  preloadedState = {counter: 50};
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <script>window.__PRELOADED_STATE__=${JSON.stringify(preloadedState)};</script>
    </head>
    <body>
      <div id="mount">${renderToString(app(preloadedState))}</div>
      <script src="bundle.client.js"></script>
    </body>
    </html>`
  )}
);

server.listen(port, () => console.log(`Server up on ${port}`));
