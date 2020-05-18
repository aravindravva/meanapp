const express=require('express')
const Candidates=require("../candidateschema")

const router=express.Router();
router.get("/checking",(req,res)=>{
  res.json("yaa im working")
})

router.post("/add", (req,res)=>{
    var candidate=new Candidates({candidatename:req.body.name,
     candidateage:req.body.age,
     affiliatedparty:req.body.party,
      assets:req.body.assets,
      educationqualification:req.body.qualification,
      constituency:req.body.constituency,
      district:req.body.district
    });

     candidate.save().then((product)=>{
      console.log(product);
      res.json("success");
    })
    .catch((err)=>{
    console.log(err);
    res.json("failure")
    });
})


router.get("/display",(req,res)=>{
  Candidates.find((err,documents)=>{
    console.log(documents);  
    res.json(documents);
  });  
})

router.get("/delete/:id",(req,res)=>{
  Candidates.deleteOne({_id:req.params.id}).then((value)=>{
    console.log(value)
    if(value.n>0)
    res.json("success");
    else
    res.json("fail")
  }).catch(
    (err)=>{
      console.log(err);
      res.json("fail");

    }
  )
  
})

router.get("/getcandidate/:id",(req,res)=>{

  Candidates.findOne({_id:req.params.id}).then((value)=>{
    console.log(value);
    res.json(value);
  })

});

router.post("/update/:id",(req,res)=>{
  console.log(req.body);
  var candidate=new Candidates({
    _id:req.params.id,
    candidatename:req.body.name,
    candidateage:req.body.age,
    affiliatedparty:req.body.party,
     assets:req.body.assets,
     educationqualification:req.body.qualification,
     constituency:req.body.constituency,
     district:req.body.district
   });

  Candidates.updateOne({_id:req.params.id},candidate).then((product)=>{
    res.json("success");
  })
  .catch((err)=>{
  console.log(err);
  res.json("failure")
  });
})

module.exports=router