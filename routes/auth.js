const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const {langname} = req.body;
    if (langname) {
      return res.status(200).send(`New lang ${langname}`);
    }
  
    res.status(401).send('can\'t accept an empty value');
  });

module.exports = router;