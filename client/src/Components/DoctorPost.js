import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfile, getallnondoneposts } from '../JS/actions'
import Postcard from './DoctorPostCard'
import Accordion from 'react-bootstrap/Accordion'


function Post() {
    const currentuser = useSelector(state => state.doctorReducer.user)
    const post = useSelector(state => state.postpatientReducer.post)
    const loading = useSelector(state => state.userReducer.loading)
   
    
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile()) 
    
          
},[])

useEffect(() => {
    if (currentuser)
        dispatch(getallnondoneposts())
        
        

  }, [currentuser]);
  

    return (
        <div className="container">
          
        
        {loading? <h1>Loading ...</h1>:      !currentuser?<Redirect to="/login"/>:
                currentuser.verified===true?
        <div>
             <h2>{currentuser.username} </h2>
             
             <Accordion >
                 
              {post?  post.length===0?<h4 style={{textAlign:"center",padding:"15px"}}>All Patient have been issued Notes </h4>:
              <>{post.map((e,i)=><Postcard posts={e,i} key={i}/>)}
              </>:null}   
            </Accordion>        
        </div>:<h4 style={{textAlign:"center",padding:"15px"}}>Wait for a Admin to verify your credentials</h4>}
        </div>
       
    )
}

export default Post
