const { Router } = require('express')
const express =require('express');

const { insertmypost,getmyposts, updatemypost, getNonDonePosts } = require('../Controllers/post.controller');
const { validatorpost, postpostRules } = require('../middleware/postvalidator');
const routerposts=express.Router()

routerposts.post('/savemypost',postpostRules(),validatorpost,insertmypost);
routerposts.post("/getmyposts",getmyposts)
routerposts.post('/update',updatemypost)
routerposts.post('/getNonDonePost',getNonDonePosts)


module.exports=routerposts;