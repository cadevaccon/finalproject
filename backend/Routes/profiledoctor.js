const express =require('express');
const routerprofilepdoctor=express.Router()

const { saveprofiledoctor,myprofile, updatemyprofile } = require('../Controllers/profiledoctor.controller');



routerprofilepdoctor.post('/profile_doc',saveprofiledoctor);
routerprofilepdoctor.post('/myprofile',myprofile)
routerprofilepdoctor.post('/updateprofile',updatemyprofile)

module.exports=routerprofilepdoctor;