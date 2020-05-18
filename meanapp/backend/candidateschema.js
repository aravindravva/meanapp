
const mongoose=require("mongoose")
var schema=mongoose.Schema;

var candidateschema=new schema({

    candidatename:String,
    candidateage:Number,
    affiliatedparty:String,
    educationqualification:String,
    assets:Number,
    district:String,
    constituency:String
});

var Candidates=mongoose.model("Candidates",candidateschema)

module.exports=Candidates;