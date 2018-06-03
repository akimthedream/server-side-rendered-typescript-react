const express = require('express');
const app = require('./assets/bundle.server.js').component;
const {renderToString} = require('react-dom/server');

const port = 5000;
const server = express();

server.use(express.static('assets'));

server.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="mount">${renderToString(app)}</div>
  <script src="bundle.client.js"></script>
</body>
</html>
`));

server.listen(port, () => console.log(`Server up on ${port}`));
