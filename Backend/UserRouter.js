const router=require("express").Router();
const postModel=require("./postModel");
const appMasterModel=require("./appMasterModel");
const integrationModel=require("./IntegrationModel");
const { updateOne } = require("./postModel");
const express=require("express")
const app=express();
// const cors=require("cors");

// router.use(cors());
//get routes
app.use(express.json())
router.use(express.json());
router.get("/getting",(req,res)=>{
    res.send("This is official router");
})
router.get("/getall",(req,res)=>{
    res.send("User exist");
})
//get all AppMaster Routes

router.get("/getappMaster",async(req,res)=>{
    try{
const GetallappMaster=await appMasterModel.find();
res.json(GetallappMaster);
    }
    catch(error){
        res.status(500).send(error);
    }
})
//get single AppMasterRoutes
router.get("/:id",async(req,res)=>{
    const {id}=req.params;
    try{
const getSingleAppMaster=await appMasterModel.findById(id);
res.json(getSingleAppMaster);
    }
    catch(error){
        res.status(500).send(error);
    }
})

//Post AppMaster Routes
router.post('/appMasterPost',async(req,res)=>{
    console.log("POST REQUEST");
const{Internal_Purchased,Portfolio,SubApplication_Area,SubApplication_Acronym,Application_Name,Notes}=req.body;
try{
const newappMasterPost=await appMasterModel.create({Internal_Purchased,Portfolio,SubApplication_Area,SubApplication_Acronym,Application_Name,Notes});
res.send(newappMasterPost);
}
catch(error){ 
res.status(500).send(error);
console.log(error);
}
});
//update appimasterrequest Request
router.put('/:id/updateappmaster',async(req,res)=>{
    const{id}=req.params;
    const{Internal_Purchased,Portfolio,SubApplication_Area,SubApplication_Acronym,Application_Name,Notes}=req.body;
    try{
const UpdateAppMaster=await appMasterModel.findByIdAndUpdate(id,{Internal_Purchased,Portfolio,SubApplication_Area,SubApplication_Acronym,Application_Name,Notes})
res.send(UpdateAppMaster);
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})
//delete appmaster

router.delete("/:id",async(req,res)=>{
    const{id}=req.params;
    try{
        const DeleteAppMaster=await appMasterModel.findByIdAndDelete(req.params.id);
        res.json(DeleteAppMaster);
        
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})



//get Integration all routes
router.get('/integrationsroutes',async(req,res)=>{
    try{
const getIntegrations=await integrationModel.find();
res.json(getIntegrations);
res.send(getIntegrations);

    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})

//get single integration by id
// router.get("/:id",async(req,res)=>{
//     const {id}=req.params;
//     try{
// const getSingleIntegration=await integrationModel.findById(id);
// res.json(getSingleIntegration);
//     }
//     catch(error){
//         res.status(500).send(error);
//     }
// })


//Post Integration Routes
router.post('/integrationPost',async(req,res)=>{
    console.log("POST REQUEST");
   
    
const{App1,App2,Direction,Typeofdata_involved,Notes}=req.body;
try{
const newintegrationPost=await integrationModel.create({App1,App2,Direction,Typeofdata_involved,Notes});
res.send(newintegrationPost);
console.log(newintegrationPost);
}
catch(error){ 
res.status(500).send(error);
console.log(error);
}
});
//update integration Routes
router.put('/:id/updateIntegration',async(req,res)=>{
    const{id}=req.params;
    const{App1,App2,Direction,Typeofdata_involved,Notes}=req.body;
    try{
const updateIntegrations=await integrationModel.findByIdAndUpdate(id,{App1,App2,Direction,Typeofdata_involved,Notes})
res.send(updateIntegrations);
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})

//delete integration routes
router.delete("/:id",async(req,res)=>{
    const{id}=req.params;
    try{
        const DeleteIntegrationMaster=await integrationModel.findByIdAndDelete(req.params.id);
        res.json(DeleteIntegrationMaster);
        
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports=router;