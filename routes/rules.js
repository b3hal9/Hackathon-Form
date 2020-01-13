
const express = require('express');
const router = express.Router();
router.use(express.static(__dirname + './src'));

router.get('/rules',(req, res)=>{
    
    res.render('terms',{});
})

module.exports = router;