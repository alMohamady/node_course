const express = require('express');
const router = express.Router();

let { languages } = require('../my-data');

router.get('/', (req, res) => {
    res.status(200).json({success: true, data: languages});
 });
 
router.post('/', (req, res) => {
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
});
 
router.put('/:id', (req, res) => {
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
 
router.delete('/:id', (req, res) => {
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

module.exports = router;