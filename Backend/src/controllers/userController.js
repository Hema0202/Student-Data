const {genHash, matchPassword} = require('../security/bcrypt')
const userModel = require('./../models/userModel');
const jwt = require('jsonwebtoken');

async function signupController(req,res){
    try {
        let {name, email,password, age,gender, qualification} = req.body;

        if(!name) return res.status(400).send({
            status:false,
            message:'name is required'
        })

        if(!email) return res.status(400).send({
            status:false,
            message: 'email is required'
        })

        if(!password) return res.status(400).send({
            status:false,
            message: 'password is required'
        })
        
        if(!age) return res.status(400).send({
            status:false,
            message:'age is required'
        })

        if(!gender) return res.status(400).send({
            status:false,
            message:'gender is required'
        })

        if(!qualification) return res.status(400).send({
            status:false,
            message: 'qualification is required'
        })
        
        //unique email verification

        let oldEmail = await userModel.findOne({
            email
        })

        if(oldEmail) return res.status(400).send({
            status:true,
            message:'This email is already registered'
        })

        //Hash password

        let hash = await genHash(password);

        //store data in Database

        const user = await userModel.create({
            name,email,password,age,gender,qualification
        })
        
        return res.status(201).send({
            status:true,
            message:'Your profile is created successfully',
            
        })

    } catch (error) {
        return res.status(500).send({
            status : false,
            message : error.message
        })
    }
}

async function loginController(req,res){
    try {
        let {email,password}=req.body;

        if(!email) return res.status(400).send({
            status:false,
            message:'email is required'
        })

        if(!password) return res.status(400).send({
            status:false,
            message:'password is required'
        })

        let user = await userModel.findOne({email});

        //Not registered
        if(!user) return res.status(400).send({
            status: false,
            message: 'This email id is not registered'
        })

        //Incorrect Password
        let isMatch = await matchPassword(password,user.password);
        if(!isMatch) return res.status(400).send({
            status:false,
            message:'Incorrect password'
        })

        //generate token
        let token = jwt.sign({
            _id : user._id,
            email : user.email
        },'signature',
        { expiresIn: "1h"});
        
        return res.status(200).send({
            statu:true,
            message:'You are logged in!',
            data: user,
            token : token
        })
    } catch (error) {
        return res.status(500).send({
            status : false,
            message : error.message
        })
    }
}

async function getAllStudentsController(req,res){
    try {
        let users = await userModel.find({
            name: 1,
            age:1,
            email:1,
            gender:1,
            qualification:1
        });
        
        return res.status(200).send({
            statu:true,
            data:users
        })
        
    } catch (error) {
        return res.status(500).send({
            status : false,
            message : error.message
        })
    }
}

module.exports.signupController = signupController;
module.exports.loginController = loginController;
module.exports.getAllStudentsController = getAllStudentsController;