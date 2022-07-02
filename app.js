const http = require('http');

const server = http.createServer( (req, res) => {

   res.writeHead(200, {'content-type' : 'text/plain'});
   res.write('<h1> Welcome in the home page </h1>');
   res.end();
});

server.listen(5000);