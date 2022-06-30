const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url == '/') {
        res.end('home page');
    } else if (req.url === '/about') {
        
        for (let i = 0; i < 1000; i ++){
            for (let j = 0; j < 1000; j ++){
                console.log(`i is ${i} and j is ${j}`);  
            }
        }
        res.end('About page');
    } else {
        res.end('Error Page');
    }
});

server.listen(5000, () => {
    console.log('server listening on port : 5000');
});