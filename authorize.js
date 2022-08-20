const authorize = (req, res, next) => {
   const {user} = req.query; 
   
   if (user === 'ahmed') {
        req.user = {name: 'ahmed', id: 3};
        next(); 
   } else {
        res.status(401).send('Unauthorized');
   }
}

module.exports = authorize;