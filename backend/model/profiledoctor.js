const mongoose=require("mongoose")

const profiledoctorShema=mongoose.Schema({
    username:{type:String,require:true},
    verified:Boolean,
    verification:{type:String,require:true},
    credential:{type:String,require:true}
})


module.exports =profiledoctor =mongoose.model('profiledoctor',profiledoctorShema);