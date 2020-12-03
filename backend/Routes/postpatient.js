const { Router } = require('express')
const express =require('express');

const { insertmypost,getmyposts, updatemypost, getNonDonePosts } = require('../Controllers/post.controller');
const routerposts=express.Router()

routerposts.post('/savemypost',insertmypost);
routerposts.post("/getmyposts",getmyposts)
routerposts.post('/update',updatemypost)
routerposts.post('/getNonDonePost',getNonDonePosts)


module.exports=routerposts;