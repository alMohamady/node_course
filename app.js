const express = require('express');
const app = express();
let { languages } = require('./my-data');

app.use(express.static('./forms'));
app.use(express.urlencoded({extended: false}));

app.get('/api/langauges', (req, res) => {
   res.status(200).json({success: true, data: languages});

});

app.post('/add-lang', (req, res) => {
  const {langname} = req.body;
  if (langname) {
    return res.status(200).send(`New lang ${langname}`);
  }

  res.status(401).send('can\'t accept an empty value');
});

app.listen(5000, () =>{
   console.log('server on 5000');
});