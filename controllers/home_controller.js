const Todo=require('../models/todolist');
// getting into page 
module.exports.home=function(req,res){
    // return res.end('<h1>Express is up for codial</h1>');
    Todo.find({},function(err,todos){
        if(err){
            console.log('error in fetching contact from db');
            return;
        }
        return res.render('home',{
            title:"TODO APP",
            todolist:todos
          })

    })
    
}
// updating the list 
module.exports.update=function(req, res){
    console.log(req.body);
    Todo.create({
        
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newTodo){
        if(err){
            console.log('error in creating the Todo');
            return;
        }
        console.log('*********',newTodo);
        return res.redirect('back');
    })
}
// deleting the list 
module.exports.delete=function(req,res){
    let id=(req.body.iddd);
    Todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deleting list');
             return;
         }
        return res.redirect('back');
     })
}
