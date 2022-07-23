const express = require('express');
const app = express();


app.get('/', (req, res) => {

   console.log('User invoke');
   res.status(200).send('Welcome in home page');
});

app.get('/about', (req , res) => {

   console.log('this is about page');
   res.status(200).send('About Our server');
});

app.all('*', (req, res) => {

   res.status(404).send('<h1> No content </h1>');
});

app.listen(5000, () => {

   console.log('server run in port 5000');
});
