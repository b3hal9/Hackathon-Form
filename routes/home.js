
const express = require('express');
const router = express.Router();
const app = express();
const Posts = require('../models/user.model');
const {body, validationResult} = require('express-validator');
const {matchedData,sanitizeBody} = require('express-validator');

router.get('/',(req,res)=>{
    res.sendFile('../src/index',{root:__dirname});
})
router.post('/register',[
    body('first', '*invalid username').isLength({min:3, max:12}).not().isEmpty(),
    body('last', '*invalid username').not().isEmpty(),
    body('email', 'invalid email.').isEmail().normalizeEmail().not().isEmpty(),
    body('phone','*invalid phone number').isLength({min:10 , max:10}).not().isEmpty(),
    body('faculty', 'choose your faculty').not().isEmpty(),
    body('sex', 'mention your sex.').not().isEmpty(),
    body('Grade','class is required').not().isEmpty(),
    body('field', 'mention your field.').not().isEmpty(),
    body('agreement', 'check the box.').not().isEmpty(),
   

], (req,res)=>{
   
    const errors = validationResult(req);
    console.log(errors.mapped());
   const data =matchedData(req);

if(!errors.isEmpty()){
    // return res.status(422).json({errors: errors.mapped()});
    
    res.render('../views/index',{title: 'invalid data', error:errors.mapped(),data:data});
    

}else{
    save_data(req,res);

    
}
async function save_data(req, res){
    const first = req.body.first;
    const last = req.body.last;
    const email = req.body.email;
    const phone = req.body.phone;
    const faculty = req.body.phone;
    const field = req.body.field;
    const section = req.body.section;
    const Grade = req.body.Grade;
    const sex = req.body.sex;
    const data =matchedData(req);
    const user_data = new Posts({first,last,email,phone,faculty,field,section,sex,Grade});
    const check_data = Posts.findOne({email: req.body.email})
      .then((user)=>{
        if(!user){
            user_data.save()
            .then(()=>{console.log("data saved")})
            .catch((err)=>console.error(err));
            res.render("../views/contact" , {title: 'Data Saved',
            message: 'Register Successful'});
            console.log(req.body);
        }
        else{
            res.render("../views/index1" , {title: 'Invalid Form ',
            message: 'User already registered.',error:errors.mapped(),data:data});
        }
      })
      .catch(err=>console.error(err));
}
}
);



module.exports = router;
