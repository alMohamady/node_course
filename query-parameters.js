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

app.get('/api/users/:userId', (req, res) => {
   console.log(req.params);
   const {userId} = req.params;
   const myUser = users.find((user) => user.userId === Number(userId));

    if (!myUser) {
      res.status(404).send('User not here');
    }

   res.json(myUser);
});

app.get('/api/users/:userId/data/:hello', (req, res) => {
   console.log(req.params);

   res.json('Hello world');
});

app.get('/api/v1/query', (req, res) => {
   console.log(req.query);
   const {search, limit} = req.query;
   let sUsers = [...users];
   if (search) {
      sUsers = sUsers.filter((user) => {
        return user.firstName.startsWith(search.toUpperCase());
      });
   }
   if (limit) {
      sUsers = sUsers.slice(0, Number(limit));
   }
   if (sUsers.length < 1) {
     return  res.status(200).json(`No user start with ${search} `);
   } else {
     return res.status(200).json(sUsers);
   } 
   //res.json('Hi query');
});


app.listen(5000, () =>{
   console.log('server on 5000');
});