
const express = require('express');
const router = express.Router();
const app = express();

const {body, validationResult} = require('express-validator/check');
const {matchedData,sanitizeBody} = require('express-validator/filter');

router.get('/',(req,res)=>{
    res.sendFile('../src/index',{root:__dirname});
})
router.post('/register',[
    body('username', 'invalid username').isLength({min:6}).not().isEmpty(),
    body('email', 'invalid email.').isEmail().normalizeEmail().not().isEmpty(),
    body('phone','invalid number').isLength({min:10 , max:10}).not().isEmpty(),
    body('faculty', 'choose your faculty').not().isEmpty(),
    body('sex', 'mention your sex.').not().isEmpty(),
    body('class','class is required').not().isEmpty(),
    body('field', 'mention your field.').not().isEmpty(),
    // body('feedback','feedback is required').not().isEmpty(),
    body('agreement', 'check the box.').not().isEmpty(),
   

], (req,res)=>{
   
    const errors = validationResult(req);
    console.log(errors.mapped());
   const data =matchedData(req);

if(!errors.isEmpty()){
    // return res.status(422).json({errors: errors.mapped()});

    res.render('../views/index',{title: 'inv        alid data', error:errors.mapped(),data:data});
    
}else{
res.render("../views/register" , {title: 'Data Saved',
        message: 'Thanks, Your Registration is Successful.'});
        console.log(req.body);
    }
})



module.exports = router;
