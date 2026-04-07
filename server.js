const http = require('http');
const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');

const serve = serveStatic(__dirname, { index: ['groupbuy.html'] });
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
}).listen(port, () => {
  console.log(`Serving on port ${port}`);
});
