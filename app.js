const {createReadStream} = require('fs');

const stream = createReadStream('./content/bidDataasda.txt', {highWaterMark: 1000000 , encoding: 'utf-8' });

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => console.log(err));