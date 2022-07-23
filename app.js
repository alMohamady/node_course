const express = require('express');
const app = express();


app.get('/', (req, res) => {
   res.json([{name: "ahmed"}, {name: "mohamed"} ]);
})

app.listen(5000, () =>{
   console.log('server on 5000');
})