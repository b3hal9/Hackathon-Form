
const express = require('express');
const router = express.Router();
router.use(express.static(__dirname + './src'));

router.get('/about',(req, res)=>{
    
    res.render('team',{});
})

module.exports = router;