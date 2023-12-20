const jwt = require('jsonwebtoken');

function authentication(req,res,next){
    try {

    //get token from header
    let token = req.headers['x-api-key'];

    //if token not available
    if(!token) return res.send({
        status :false,
        message:'You are not logged in!'
    })

    jwt.verify(token, 'signatur',(err, decodedToken)=>{
        if(err) return res.send({
            status:false,
            message:'Invalid token'
        })

        next();
    })
  
    } catch (error) {
        return res.send({
            status: false,
            message:error.message
        })
    }
}

module.exports = authentication;