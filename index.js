const http = require('http');

const server = http.createServer((req, res) => {
  let avant;
  try {
    avant = performance.now()
    if (req.url === "/") {
      res.writeHead(200, {'content-type':'text/html'});
      res.write('<h1>HOMEPAGE</h1>');
      res.end();
    } else {
      res.writeHead(404, {'content-type':'text/html'});
      res.write('<h1>404 Not Found</h1>');
      res.end()
    }
  } catch (err) {
    res.writeHead(500, {'content-type':'text/html'});
    res.write('<h1>500 Internal Server Error</h1>');
    res.end()
  }

  const apres = performance.now()
  const chrono = apres - avant;
  console.log(chrono)
} );

server.listen(3000);
console.log('Server écoute sur le port 3000');