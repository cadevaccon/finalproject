import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearindividualPosts, getPostProfilePatient, updatepost } from '../JS/actions'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"

function Postcard(props) {
    const {_id,syptome,seriousilness,username,i}=props.posts
    const doctor = useSelector(state => state.userReducer.user)
    const loading2=useSelector(state=>state.postpatientReducer.loading)
    const [gettingProfile, setGettingProfile] = useState(false)
    const individualpost = useSelector(state => state.postpatientReducer.individualpost)
    const triggeraction = useSelector(state => state.postpatientReducer.triggeraction)

    const profileInformation=()=>
    {   if(!triggeraction&&!toupdate)
        {
          
        dispatch(getPostProfilePatient({'username':username}))
        setGettingProfile(!gettingProfile)
        setToupdate(!toupdate)
        }
        else{
            alert("Please Finish the Post or Click Reset")
        }
    }
    const resetupdate=()=>{
        setToupdate(!toupdate)
        setGettingProfile(!gettingProfile)
      dispatch(clearindividualPosts())

    }
   
    
   
    const [note, setNote] = useState()

    const [toupdate, setToupdate] = useState(false)
 

    const dispatch = useDispatch()
    const triggerupdate=()=>{
       
    }

    const updatedpost=(e)=>
    {
        e.preventDefault();
        resetupdate()
        dispatch(updatepost({_id,"doctornote":note,"looked":true,doctor:doctor.username}))
        triggerupdate()
    }
    
    return (
      <Card>
      <Card.Header>
        <Accordion.Toggle as={Button}  eventKey={_id} >
          Post :{i}    {toupdate?<div style={{backgroundColor:"#12d66a"}}>Updating</div>:null}
                 
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={_id}>
        <Card.Body> 
        <div className="row" >
        <div  className="col-5">
        
        <div style={{padding:"10px"}} >
           
       <div>
            
            
       {toupdate?<><input  type="textarea"
        name="note"
        onChange={(e) => setNote(e.target.value)}
        placeholder="Note"
        className="form-control"
        
        ></input>
        
        <button className="btn btn-primary" type="submit" onClick={updatedpost}>Submit</button>
        <button className="btn btn-danger" type="submit" onClick={resetupdate}>Reset</button>
        </>
        : <div className="col-6 secondpost"> <span style={{fontWeight:"bolder"}} >Syptome :</span> {syptome}<br/>
          <span style={{fontWeight:"bolder"}} >Serious Illness :</span> {seriousilness}
           <br/>
           
           
           
           <br/></div>}
         {!triggeraction?  <button onClick={profileInformation}  style={{backgroundColor:"#ec4444",borderRadius:"5px",color:"white",borderColor:"white"}}>Update</button>:null}
           
       </div>
       </div>
       </div>
     {gettingProfile? <div className="col-5 firstpostnote" >
    {individualpost? <div ><span style={{fontWeight:"bolder"}} >Age :</span> {individualpost.age}<br/>
                           <span style={{fontWeight:"bolder"}} > Sexe  :</span> {individualpost.sexe}<br/>
                            <span style={{fontWeight:"bolder"}} > Weight :</span>{individualpost.weight}<br/>
                            <span style={{fontWeight:"bolder"}} >Symptome :</span>{syptome}<br/>
                            <span style={{fontWeight:"bolder"}} >Serious Illness : </span>{seriousilness}<br/>
                            
                            </div>:null}
               </div>:null}  
       </div>
       </Card.Body>
    </Accordion.Collapse>
  </Card>
    )
}

export default Postcard
