const { Router } = require('express')
const express =require('express');

const isAuth=require('../middleware/passport-setup');
const { saveprofilepatient, myprofile, updatemyprofile } = require('../Controllers/profilepatient.controller');
const { profilepatientRules,validatorProfilepatient,profilepatientgetprofile,profilepatientupdateprofile } = require('../middleware/profilepatientvalidator');
const routerprofilepatient=express.Router()

routerprofilepatient.post('/profile_pat',profilepatientRules(),validatorProfilepatient,saveprofilepatient);
routerprofilepatient.post('/myprofile',profilepatientgetprofile(),validatorProfilepatient,myprofile)
routerprofilepatient.post('/updateprofile',profilepatientupdateprofile(),validatorProfilepatient,updatemyprofile)

// Ajouter la update
// router.post('/login',login)
// router.get('/current',isAuth(),(req,res)=>res.json(req.user));

module.exports=routerprofilepatient;