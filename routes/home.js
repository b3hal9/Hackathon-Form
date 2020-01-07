
const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req,res)=>{
    res.sendFile("../views/index" , {root: __dirname});
})

router.post('/register', async(req, res) => {
    
    await res.render('index', {title: 'Data Saved',
    message: 'Thankyou for your Registration'});
    console.log(req.body);
})

module.exports = router;