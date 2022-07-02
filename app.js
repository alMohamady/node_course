const http = require('http');
const {readFileSync} = require('fs');

const hp = readFileSync('./headers-css-master/header-1.html');

const hpStyleMain = readFileSync('./headers-css-master/styles/reset.min.css');
const hpStyle = readFileSync('./headers-css-master/styles/style.css');
const hpHederCss = readFileSync('./headers-css-master/styles/header-1.css');
const hpJs = readFileSync('./headers-css-master/js/header-1.js');

const server = http.createServer( (req, res) => {

   //console.log(req.method, req.url);
   const url = req.url;
   console.log(url);
   if (url === "/") {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write(hp);
    res.end();
   } else  if (url === "/styles/reset.min.css") {
    res.writeHead(200, {'content-type' : 'text/css'});
    res.write(hpStyleMain);
    res.end();
   }else  if (url === "/styles/style.css") {
    res.writeHead(200, {'content-type' : 'text/css'});
    res.write(hpStyle);
    res.end();
   }else  if (url === "/styles/header-1.css") {
    res.writeHead(200, {'content-type' : 'text/css'});
    res.write(hpHederCss);
    res.end();
   } else  if (url === "/js/header-1.js") {
    res.writeHead(200, {'content-type' : 'text/javascript'});
    res.write(hpJs);
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