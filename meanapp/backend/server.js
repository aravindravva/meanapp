const express=require('express')
const cors=require("cors")
const router=require("./routes/route")
const bp=require("body-parser")
const mongoose=require("mongoose")
var app=express()
var port=process.env.PORT || 3000
app.use(bp());
app.use(cors());

app.get("/",(req,res)=>{
res.json("reday");
});

mongoose.connect('mongodb+srv://election:3pVEYIIrX6vazw5D@cluster0-ncbf4.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}).then((res)=>{
    console.log("success");
}).catch((err)=>{
    console.log(err);

})

app.use("/",router);

app.listen(port);