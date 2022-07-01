var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    const fileStram = fs.createReadStream('./content/bidData.txt', 'utf-8');

    fileStram.on('open', () => {
        fileStram.pipe(res);
    });

    fileStram.on('error', (err) => {
        res.end(err);
    });

}).listen(5000);