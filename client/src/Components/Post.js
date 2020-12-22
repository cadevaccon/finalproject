import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfile, patientgetposts,patientinsertpost } from '../JS/actions'
import Postcard from './Postcard'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"
import './Postpatientcss.css'

function Post() {
    const currentuser = useSelector(state => state.userReducer.user)
    const post = useSelector(state => state.postpatientReducer.post)
    const loading = useSelector(state => state.userReducer.loading)
    const [syptome, setSyptome] = useState()
    const [seriousilness, setSeriousilness] = useState()
    const [newPost, setNewPost] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile()) 
    
          
},[])

useEffect(() => {
    const timer = setTimeout(() => {
        dispatch(patientgetposts({"username":currentuser.username
        // currentuser.username
    }))
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const newPoster=()=>{
      setNewPost(!newPost)
  }
  const insertnewpost=(e)=>{
   
        e.preventDefault(); 
           
              dispatch(patientinsertpost({username:currentuser.username,syptome,seriousilness})) 
              
              dispatch(patientgetposts({"username":currentuser.username}))
              setNewPost(!newPost)
  }
    return (
        <div className="container">
        {loading? <h1>Loading ...</h1>:      !currentuser?<Redirect to="/login"/>:
       
        <div>
             <div style={{textAlign:"center",color:"#8064A2",fontSize:"25px"}}>{currentuser.username} </div>
            
             
              <span style={{textAlign:"center",fontSize:"22px",color:"#421c70"}} onClick={newPoster}>NewPost</span>
             {newPost?<>
            <input  type="textarea"
             name="syptome"
             onChange={(e) => setSyptome(e.target.value)}
             placeholder="syptome"
             className="form-control"
             ></input>
             <input type="textarea"
             name="seriousilness"
             onChange={(e) => setSeriousilness(e.target.value)}
             placeholder="seriousilness"
             className="form-control"
             ></input>
             <button className="btn btn-primary" type="submit" onClick={insertnewpost}>Submit</button>
             </>:null}
             <Accordion>
             {post? <>{post.map((e,i)=><>  
                
  <Postcard posts={e,i} key={e._id}/>
                
            
               
             </>)}
             </>:null}
            </Accordion>
           
        </div>}
        </div>
    )
}

export default Post
