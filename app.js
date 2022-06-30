/*const {readFile} = require('fs');
console.log('Start the first Task');

readFile('./content/almohamady.txt', 'utf-8',(err, result) => {

    if (err) {
        console.log(err);
        return;
    } 
    console.log(result);
    console.log('Complete first task');
});

console.log('End system set the new task');

setInterval(() => {
    console.log('hi there');
}, 2000);

console.log('secound task => :)');*/

const http = require('http');

const server = http.createServer((req, res) => {

    console.log('request event');
    res.end('Hello World');
});

server.listen(5000, () => {
    console.log('server listening on port : 5000');
});
