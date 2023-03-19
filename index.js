const express = require('express')
const app = express()
const port = 5000

app.get('/',(req, res) => {
    res.send('<a href = "/auth/google">Authenticate with Google</a>');
});

app.get('/protected', (req, res) => {
   res.send('Hello World'); 
});

app.listen(port, ()=> console.log(`Example app listening on prot ${port}!`));


