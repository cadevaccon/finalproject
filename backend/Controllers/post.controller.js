
const config=require('config');

const Post=require('../model/Post')





exports.insertmypost=async(req,res)=>{
    const {username,syptome,seriousilness} =req.body
try {   
    const begindate=Date.now()
    const post=new Post({username,syptome,seriousilness,begindate,"looked":false,"checked":false,"doctor":null,"doctornote":null})
        await post.save()
        return res.status(201).json(post)
} catch (error) {
    console.log(error)  
    res.status(500).json({errors:error})
}

}
exports.getmyposts=async(req,res)=>{
    const {username} =req.body
    try{
        const user=await Post.find({username})
        return res.status(201).json(user)
    }catch{error}
    {
        res.status(500).json({errors:error})
    }
}

exports.getNonDonePosts=async(req,res)=>{
    try {
            const post=await Post.find({looked:false})
            return res.status(201).json(post)
    } catch (error) {
        res.status(500).json({errors:error})
        
    }
}



exports.updatemypost=async (req,res)=>{
    const {_id,syptome,seriousilness,begindate,checked,looked,doctor,doctornote} = req.body
    try {
        var updater={};
        doctor?updater={...updater,doctor}:updater=updater;
        doctornote?updater={...updater,doctornote}:updater=updater;
        syptome?updater={...updater,syptome}:updater=updater;
        seriousilness?updater={...updater,seriousilness}:updater=updater;
        begindate?updater={...updater,begindate}:updater=updater;
        checked?updater={...updater,checked}:updater=updater;
        looked?updater={...updater,looked}:updater=updater;
        
        const updated=await Post.updateOne({_id},{$set:updater})
        var post
        doctor?
        
             post=await Post.find({"looked":false}): post=await Post.find({"_id":_id})
        
      
        return res.status(201).json(post)
    } catch (error) {
        res.status(500).json({errors:error})
    }
}