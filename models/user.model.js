const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema =new Schema({
    first:{
        type: String,
        required: true,
    },
    last:{
        type: String,
        required: true,
    },
   field: {
       type: String,
       required: true
   },
    email:{
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    feedback:{
        type: String,
    
    },
    faculty:{
        type: String,
        required: true,
    },
    section:{
        type: String,
        
    },
    Grade:{
        type:String,
        required: true,
    },
    sex:{
        type: String,
        required: true,

    },
    level:{
        type: String,
        required: true,
    }
},

);




const Posts = mongoose.model('user',userSchema);
module.exports=Posts;