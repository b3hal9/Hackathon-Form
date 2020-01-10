
const express = require('express');
const router = express.Router();
router.use(express.static(__dirname + './src'));

router.get('/about',(req, res)=>{
    
    res.render('../views/terms',{});
})

module.exports = router;