const express = require('express');
const router = express.Router();
const {
    getLanguages,
    createLanguage,
    updateLanguage,
    deleteLanguage
} = require('../controllers/languages');

//router.get('/', getLanguages); 
//router.post('/',createLanguage ); 
//router.put('/:id', updateLanguage); 
//router.delete('/:id', deleteLanguage);

router.route('/').get(getLanguages).post(createLanguage);
router.route('/:id').put(updateLanguage).delete(deleteLanguage);


module.exports = router;