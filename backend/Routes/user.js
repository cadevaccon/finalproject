const { Router } = require('express')
const express =require('express');
const { register, login } = require('../Controllers/user.controller');
const { registerRules,validator,loginrules } = require('../middleware/registervalidator')
const isAuth=require('../middleware/passport-setup')
const router=express.Router()

router.post('/register',registerRules(),validator,register);
router.post('/login',loginrules(),validator,login)
router.get('/current',isAuth(),(req,res)=>res.json(req.user));

module.exports=router;