import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfile, getProfileDoctor, registerProfileDoctor, updateProfileDoctor } from '../JS/actions'
import "./profilecss.css"

function DoctorProfile() {
    const dispatch = useDispatch()
    const currentuser = useSelector(state => state.userReducer.user)
    const user = useSelector(state => state.doctorReducer.user)
    const [verification, setVerification] = useState()
    const [credential, setCredential] = useState()
    const loading = useSelector(state => state.userReducer.loading)
    
    const [showing, setShowing] = useState(user)
    const show=()=>setShowing(!showing)

  
    
    useEffect(()=>{
        if(currentuser)
        dispatch(getProfileDoctor({"username":
        currentuser.username
    }))
       },[])
       useEffect(() => {
        dispatch(getProfile())     
},[])
    const addProfilerOrUpdate = (e) => {
        e.preventDefault(); 
        setShowing(!showing);
            if(!user)
    {            dispatch(registerProfileDoctor({username:currentuser.username,verification,credential})) 
    dispatch(getProfileDoctor({"username": currentuser.username}))
    
     }
    else
    
              {  const verif= verification?verification:user.verification
                const cred= credential?credential:user.credential
               
                 dispatch(updateProfileDoctor({username:user.username,verification:verif,credential:cred}))
    }};
    return (<>
            <div className="container">
            <div className="row">
            {loading? <h1>Loading ...</h1>:      !currentuser?<Redirect to="/login"/>:
        <div className="container">
               
                <div className="row">
               <div className="col-12 secondplop" style={{color:"rgba(142, 43, 182, 0.774)"}}>Welcome {currentuser.username}</div>
        <div className="col-4"></div>
        {user?<div className="col-4 thirdplop"> 
        
    Credential : {user.credential}<br/>
    Verification : {user.verification}<br/>
    Verified : {user.verified? <span style={{backgroundColor:"#40e477c9"}}>True</span>:<span style={{backgroundColor:"#c41d6b"}}>False</span>}</div>:
    null
    }
    </div>


            <h5 onClick={show}>{!user?<>Insert Profile Info</>:null}</h5>
            {user?null:<>
             <input  type="text"
             name="verification"
             onChange={(e) => setVerification(e.target.value)}
             placeholder="verification"
             className="form-control"
             ></input>
             <input type="text"
             name="crendential"
             onChange={(e) => setCredential(e.target.value)}
             placeholder="credential"
             className="form-control"
             ></input>
            
              <button className="btn btn-primary" type="submit" onClick={addProfilerOrUpdate}>Submit</button>
              </>}
             
        </div>}
        </div>
        </div>
        </>
    )
}

export default DoctorProfile
