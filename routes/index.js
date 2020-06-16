const express= require('express');

const router= express.Router();
// storing controller path 
const homecontroller=require('../controllers/home_controller');

console.log('route loded');
// sending data to controller specific modules 
router.get('/',homecontroller.home);
router.post('/todolist',homecontroller.update);
router.post('/delete',homecontroller.delete);

module.exports=router;