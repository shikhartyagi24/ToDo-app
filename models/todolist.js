const mongoose=require('mongoose');
// schema for database
var todolistSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        default:''
    },
    date:{
        type:String,
        default:'Not Define'
    }

});

var Todo=mongoose.model('Todo',todolistSchema);


module.exports=Todo;