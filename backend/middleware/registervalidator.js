const {check,validationResult} =require("express-validator");

exports.registerRules=()=>
[
    check('username','USERNAME is Required').notEmpty(),
    check('email','Email should be in email Format').isEmail(),
    check('email','Email is Required').notEmpty(),
    check('password',"Password should be at least 4 chars").isLength({min:4}),
    check('phonenumber',"PhoneNumber should be a number").isNumeric(),

];

exports.validator=(req,res,next)=>{
    const errors=validationResult(req) 
    errors.isEmpty()? next():res.status(400).json({errors:errors.array()})

};

exports.loginrules=()=>
[
    check('username','this field USERNAME is Required').notEmpty(),
    check('password','This Field PassWord is Required').notEmpty(),
  

];