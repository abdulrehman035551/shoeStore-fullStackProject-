let express=require('express');
let router=express.Router()
router.get('/',(rq,res)=>
{
    
    res.send("heloo server route")
  
})
router.post('regiter',(req,res)=>
{
    console.log(req.body)
    // res.send("hello jee")
})
module.exports=router;