const express = require('express');
const app = express();
let { languages } = require('./my-data');

app.use(express.static('./forms'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/langauges', (req, res) => {
   res.status(200).json({success: true, data: languages});
});

app.post('/api/langauges', (req, res) => {
  const {name} = req.body;
  if (!name) {
    return res.status(400).json({
      success: false, 
      msg:'ca\'t accept an empty name'
    });
  }
  res.status(200).json({
    success:true, 
    lang: name 
  });
}) 

app.post('/add-lang', (req, res) => {
  const {langname} = req.body;
  if (langname) {
    return res.status(200).send(`New lang ${langname}`);
  }

  res.status(401).send('can\'t accept an empty value');
});

app.put('/api/langauges/:id', (req, res) => {
   const { id } = req.params;
   const { name } = req.body;

   const lang = languages.find((l) => l.id === Number(id));
   if (!lang) {
    return res.status(404).json(
      {
        success:false, 
        msg: `id ${id} no there` 
      }
    );
   }
   const newList = languages.map((l) => {
      if ( l.id === Number(id)) {
        l.name = name;
      }
      return l;
   });

   res.status(200).json({success: true, data: newList});
});

app.delete('/api/langauges/:id', (req, res) => {
  const { id } = req.params;
  const lang = languages.find((l) => l.id === Number(id));
  if (!lang) {
   return res.status(404).json(
     {
       success:false, 
       msg: `id ${id} no there` 
     }
   );
  }

  const newList = languages.filter((l) => l.id !== Number(id));
  return res.status(200).json({success: true, data: newList});
});

app.listen(5000, () =>{
   console.log('server on 5000');
});