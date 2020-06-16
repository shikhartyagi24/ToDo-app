const mongoose=require('mongoose');
// connection with database
mongoose.connect('mongodb://localhost/todo_db');
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('succesfully connected to the database');    
  });
