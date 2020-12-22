import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProfilePatient, patientgetposts, updatepost } from '../JS/actions'
import './Postpatientcss.css'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"
import './profilecss.css'
import notification from "./notification.jpg"

function Postcard(props) {
    const {_id,syptome,seriousilness,username,looked,checked,doctornote,i}=props.posts
   
    
    const [toupdate, setToupdate] = useState(false)
    const [syptomeupdate, setSyptomeupdate] = useState()
    const [seriousilnessupdate, setSeriousilnessupdate] = useState()
    const dispatch = useDispatch()
    const triggerupdate=()=>{
        setToupdate(!toupdate)
    }
    const starttimer=(e)=>{
        console.log("test1")
     setTimeout(() => {
      console.log("TEST2")
    
      dispatch(patientgetposts({"username": e}))
  }, 1000);
    clearTimeout(e);
}

    const updatedpost=(e)=>
    {
        e.preventDefault()
        
        dispatch(updatepost({_id,"username":username,"syptome":syptomeupdate,"seriousilness":seriousilnessupdate}))
        triggerupdate()
        starttimer(username)




    }
        const checking=(e)=>
        { e.preventDefault()
            dispatch(updatepost({_id,"checked":true}))
            alert(doctornote)
            starttimer(username)


        }
       

    return (<>
      
                        
      <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="" eventKey={_id} >
          <div className="firstposttitel">
        Post :{i}   {looked&&!checked? 
                <img src={notification} width="25px"  onClick=
                {checking}/>:null}
                {looked? <span style={{backgroundColor:"blueviolet",padding:"3px",color:"white"}}>Noted</span>:null}</div>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={_id}>
      <Card.Body> 
        <div style={{padding:"10px"}} className="container secondgeneralwriting" key={_id}>
       <div style={{backgroundColor:""}}>
           
       {toupdate&&!looked?<><input  type="textarea"
        name="syptome"
        onChange={(e) => setSyptomeupdate(e.target.value)}
        placeholder={syptome}
        className="form-control"
        
        ></input>
        <input type="textarea"
        name="seriousilness"
        onChange={(e) => setSeriousilnessupdate(e.target.value)}
        placeholder={seriousilness}
        className="form-control"
        ></input>
        <button className="btn btn-primary" type="submit" onClick={updatedpost}>Update Post</button></>
        : <div className="container">
            <div className="row">
                <div className="col-3 secondpost"> Syptome : {syptome}</div>
                
          <div className="col-3 secondpost"> Serious Illness : {seriousilness}</div>
                
           
          {looked? <div className="col-4 firstpostnote">Note : {doctornote}</div>:null} 
           </div></div>}
    
    {!looked? <><br/><span onClick={triggerupdate} className="btn btn-outline-primary" >Toggle Update Post</span></>:null }
       </div>
       </div>
       </Card.Body>
    </Accordion.Collapse>
  </Card>
    </>)
}

export default Postcard
