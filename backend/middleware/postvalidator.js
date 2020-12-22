const {check,validationResult} =require("express-validator");

exports.postpostRules=()=>
[
    check('syptome','Enter your Credentials Please').notEmpty(),
    

];

exports.validatorpost=(req,res,next)=>{
    const errors=validationResult(req) 
    errors.isEmpty()? next():res.status(400).json({errors:errors.array()})

};