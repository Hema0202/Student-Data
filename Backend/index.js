const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/route');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/BackendStudy').then(()=>console.log('Connected with Database')).catch((err)=>console.log(err.message));

app.use(express.json());

app.use('/',router);

app.listen(3000,function(err){
    if(err) console.log(err.message);
    else console.log('server started on port',3000);
})
