const express = require('express');
const app = express();
const logger = require('./logger');
const auth = require('./authorize');

app.use([auth, logger]);

app.get('/', (req,res) => {
   console.log(req.user);
   res.send('Home');
});

app.get('/about', (req,res) => {
   res.send('about');
});

app.get('/api/products', (req,res) => {
   res.send('products');
});

app.get('/api/items',(req,res) => {
   res.send('items');
});

app.get('/v1/lists', (req,res) => {
   res.send('lists');
});

app.listen(5000, () =>{
   console.log('server on 5000');
});