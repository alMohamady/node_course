const http = require('http');

const server = http.createServer( (req, res) => {

   //console.log(req.method, req.url);
   const url = req.url;
   if (url === "/") {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<h1> Welcome in the home page </h1>');
    res.end();
   } else if (url === "/about") {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<h1> it\'s about us </h1>');
    res.end();
   } else {
    res.writeHead(404, {'content-type' : 'text/html'});
    res.write('<h2> 404 Error </h2>  <h1> sorry no content </h1>');
    res.end();
   }
});

server.listen(5000);