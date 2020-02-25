const express=require('express');
const router=express.Router();
const Employee=require('../models/employe')


router.get('/',async(req,res)=>{
    let employees =await Employee.find();
    try{
        res.status(200).json({
            error:false,
            data:employees
        })
    }catch(err){
        res.status(400).json({
            error:true,
            message:"Error"
        })
    }
});
router.get('/:id',(req,res)=>{
    let id=req.params.id;
    console.log(id);
    res.status(200).json({
        error:false,
        message:'get employees:'+id
    });

});
router.post("/",async(req,res)=>{
    let emp=req.body;
    console.log(emp);
    let doc=await Employee.create(emp)
    try{
        res.status(201).json({
            error:false,
            data:doc
        })
    }catch(err){
        res.status(400).json({
            error:true,
            message:err.message
        })
    }



//    res.status(201).json({
  //      erroe:false,
    //    message:'create new employees'
    //});
});
router.put('/:id',async(req,res)=>{
    const employee= await Employee.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    if(!employee){
        res.status(400).json({
            error:true,
            message:"employee id does not exist"
        })
    }
    try{
        res.status(200).json({
            error:false,
            data:employee
        })
    }catch(err){
        res.status(400).json({
            error:true,
            message:err.message

        })

    }
    
    });
    router.delete("/:id",async(req,res)=>{
let id=req.param.id;
console.log(id);
        let del= await Employee.findByIdAndDelete(id);
            
        if(!del){
            res.status(400).json({
                error:true,
                message:"employee id does not exist"
            })
        }
        try{
            res.status(200).json({
                error:false,
                message:"deletion successful"
            })
        }catch(error){
            res.status(400).json({
                error:true,
                message:"Error"
    
            })
    
        }
        
        });
    

module.exports=router;

