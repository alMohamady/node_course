const express = require('express');
const app = express();
const {users} = require('./my-data');

app.get('/', (req, res) => {
   res.send('<h1> My Home </h1> <a href="/api/users"> get Users </a>');
});


app.get('/api/users', (req, res) => {
   const myUsers = users.map((user) => {
      const  {userId, firstName, emailAddress} = user;
      return {userId, firstName, emailAddress} ;
   });

   res.json(myUsers);
});

app.listen(5000, () =>{
   console.log('server on 5000');
});