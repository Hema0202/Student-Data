const userModel = require('./../models/userModel');
const jwt = require('jsonwebtoken');

async function signupController(req,res){
    try {
        let {name, email,password, age,gender, qualification} = req.body;

        if(!name) return res.send({
            status:false,
            message:'name is required'
        })

        if(!email) return res.send({
            status:false,
            message: 'email is required'
        })

        if(!password) return res.send({
            status:false,
            message: 'password is required'
        })
        
        if(!age) return res.send({
            status:false,
            message:'age is required'
        })

        if(!gender) return res.send({
            status:false,
            message:'gender is required'
        })

        if(!qualification) return res.send({
            status:false,
            message: 'qualification is required'
        })
        
        //unique email verification

        let oldEmail = await userModel.findOne({
            email
        })

        if(oldEmail) return res.send({
            status:true,
            message:'This email is already registered'
        })

        //store data in Database

        const user = await userModel.create({
            name,email,password,age,gender,qualification
        })
        
        return res.send({
            status:true,
            message:'Your profile is created successfully',
            data: user
        })

    } catch (error) {
        return res.send({
            status : false,
            message : error.message
        })
    }
}

async function loginController(req,res){
    try {
        let {email,password}=req.body;

        if(!email) return res.send({
            status:false,
            message:'email is required'
        })

        if(!password) return res.send({
            status:false,
            message:'password is required'
        })

        let user = await userModel.findOne({email});

        //Not registered
        if(!user) return res.send({
            status: false,
            message: 'This email id is not registered'
        })

        //Incorrect Password
        if(user.password != password) return res.send({
            status:false,
            message:'Incorrect password'
        })

        //generate token
        let token = jwt.sign({
            _id : user._id,
            email : user.email
        },'signature')
        
        return res.send({
            statu:true,
            message:'You are logged in!',
            data: user,
            token : token
        })
    } catch (error) {
        return res.send({
            status : false,
            message : error.message
        })
    }
}

async function getAllStudentsController(req,res){
    try {
        let users = await userModel.find();
        
        return res.send({
            statu:true,
            data:users
        })
        
    } catch (error) {
        return res.send({
            status : false,
            message : error.message
        })
    }
}

module.exports.signupController = signupController;
module.exports.loginController = loginController;
module.exports.getAllStudentsController = getAllStudentsController;