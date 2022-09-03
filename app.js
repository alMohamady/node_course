const express = require('express');
const app = express();
const langRouter = require('./routes/langauges');
const authRouter = require('./routes/auth');

app.use(express.static('./forms'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/langauges', langRouter); 
app.use('/add-lang', authRouter); 


app.listen(5000, () =>{
   console.log('server on 5000');
});