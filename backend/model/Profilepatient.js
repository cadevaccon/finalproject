const mongoose=require("mongoose")

const profilepatientShema=mongoose.Schema({
    username:{type:String,require:true},
    age:Number,
    sexe:String,
    weight:Number,
 
})


module.exports =ProfilePatient =mongoose.model('profilepatient',profilepatientShema);