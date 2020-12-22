const {check,validationResult} =require("express-validator");

exports.profiledoctorRules=()=>
[
    check('credential','Enter your Credentials Please').notEmpty(),
    check('verification','Enter Your Verification Location').notEmpty(),
   

];

exports.validatorProfiledoctor=(req,res,next)=>{
    const errors=validationResult(req) 
    errors.isEmpty()? next():res.status(400).json({errors:errors.array()})

};
exports.profiledoctorgetprofile=()=>
[
    check('username','Insert a Username').notEmpty(),
   
];

exports.profiledoctorupdateprofile=()=>
[
    check('username','Insert a Username').notEmpty(),
   
];
