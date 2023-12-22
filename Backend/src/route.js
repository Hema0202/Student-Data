const router = require('express').Router();

const {signupController, loginController,getAllStudentsController} = require('./controllers/userController');
const authentication = require('./middlewares/auth');

function testController(req,res){
    return res.send({
        status:true,
        message:'Welcome to the Test Controller!'
    })
}

router.get('/test',testController);

router.post('/signup',signupController);
router.post('/login',loginController);
router.get('/student',authentication,getAllStudentsController);

module.exports=router;
