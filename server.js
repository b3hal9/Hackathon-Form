const express = require('express');
const app = express()
const bodyparser = require('body-parser');
const expressvalidator = require('express-validator');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes/home');




app.use(express.static( './src'));
app.use(bodyparser.urlencoded({extended: false}));
app.set("view engine", "ejs");


const server = http.createServer(app);
const PORT = 5000;






app.use(router);
server.listen(PORT,()=>{
    console.log(`server is running on PORT: ${PORT}.`);
})

