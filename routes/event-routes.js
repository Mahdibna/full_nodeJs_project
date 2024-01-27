const express=require("express")
const router=express.Router();
router.get('/',(req , res)=>{
    res.render('../views/events/index')
})
router.get('/:id',(req , res)=>{
    res.render('../views/events/show')
})
module.exports=router;