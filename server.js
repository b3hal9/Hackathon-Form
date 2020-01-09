const express = require('express');
const app = express()
const bodyparser = require('body-parser');
const expressvalidator = require('express-validator');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes/home');

const Posts = require('./models/user.model');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.static( './src'));
app.use(bodyparser.urlencoded({extended: false}));
app.set("view engine", "ejs");


const server = http.createServer(app);
const PORT = process.env.PORT ||5000;



mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://bsaal:halbistabis@cluster0-2sbsy.mongodb.net/test?retryWrites=true&w=majority' ,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=>console.log('connected to MongoDb'))
    .catch(err=>console.error('disconnected',err));






app.use(router);



server.listen(PORT,()=>{
    console.log(`server is running on PORT: ${PORT}.`);
})

