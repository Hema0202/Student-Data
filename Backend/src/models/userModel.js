const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: String,
    age:Number,
    password :String,
    email : String , 
    qualification : String,
    gender : String,
},
{
    timestamps : true //creates createdAt and updatedAt fields
})

module.exports = mongoose.model('user',userSchema);