const router=require("express").Router();

router.get("/cargetting",(req,res)=>
{
    res.send("car getting");
}

)
module.exports=router;