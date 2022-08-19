const express = require('express');
const app = express();

const logger = (req, res, next) => {
   const method = req.method;
   const url = req.url;
   const time = new Date().getFullYear();
   console.log(method, url, time);
   //res.send('m w function test');
   next();
}

app.get('/', logger, (req,res) => {

   res.send('Home');
});

app.get('/about',logger, (req,res) => {
   res.send('about');
});

app.listen(5000, () =>{
   console.log('server on 5000');
});