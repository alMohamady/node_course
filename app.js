const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'))

app.get('/', (req, res) => {

   res.sendFile(path.resolve(__dirname, './headers-css-master/header-1.html'));

});

app.all('*', (req, res) => {

   res.status(404).send('<h1> No content </h1>');
});

app.listen(5000, () => {

   console.log('server run in port 5000');
});
