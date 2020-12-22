const express =require('express');
const routerprofilepdoctor=express.Router()

const { saveprofiledoctor,myprofile, updatemyprofile } = require('../Controllers/profiledoctor.controller');
const { profiledoctorRules, validatorProfiledoctor, profiledoctorgetprofile, profiledoctorupdateprofile } = require('../middleware/profiledoctorvalidator');



routerprofilepdoctor.post('/profile_doc',profiledoctorRules(),validatorProfiledoctor,saveprofiledoctor);
routerprofilepdoctor.post('/myprofile',profiledoctorgetprofile(),validatorProfiledoctor,myprofile)
routerprofilepdoctor.post('/updateprofile',profiledoctorupdateprofile(),validatorProfiledoctor,updatemyprofile)

module.exports=routerprofilepdoctor;