const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

require('./controllers/authController')(app);

app.listen(3000, ()=>{console.log("Servidor esta rodando na porta 3000")});



/*
app.get('/api/user', (req, res) =>{
    res.send('ok');
})

#comandos
    npm init -y
    npm i express
    npm install body-parser
    npm i mongoose

*/