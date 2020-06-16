const express=require('express');
const app= express();
const port=3333;
const expresslayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
// for using req.bdosy
app.use(express.urlencoded({ extended: true }));
// for view part 
app.use(express.static('./assets'));
app.use(expresslayouts);

//extract style and script form sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
// router connection 
app.use('/',require('./routes'));



app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log(`Eroor in running the server: ${err}`);
        return;
    }
    console.log(`server is running on ${port}`);
});