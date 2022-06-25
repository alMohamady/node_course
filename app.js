const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome in the home page');
    }
    else if (req.url === '/about') {
        res.end('hi there it about us');
    } else { 

        res.end (`
            <h1> no content here </h1>
            <p> sorry there's no content here <p/>
            <a href="/"> to home </a> 
        `);
    }
});

server.listen(5000);