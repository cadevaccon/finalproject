import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfile,getProfilePatient,registerProfilePatient,updateProfile } from '../JS/actions'
import "./profilecss.css"


function PatientProfile() {
    const currentuser = useSelector(state => state.userReducer.user)
    const user = useSelector(state => state.patientReducer.user)
    const [weight, setWeight] = useState(null)
    const [age, setAge] = useState(null)
    const [sexe, setSexe] = useState(null)
    const [showing, setShowing] = useState(user)
    const show=()=>setShowing(!showing)

    const loading = useSelector(state => state.userReducer.loading)
  
    const dispatch = useDispatch()
   

    useEffect(() => {
        dispatch(getProfile()) 
        
          
},[])


            useEffect(()=>{
                if(currentuser)
                dispatch(getProfilePatient({"username":
                currentuser.username
            }))
                    
                
            },[])



const addProfilerOrUpdate = (e) => {
    e.preventDefault(); 
    setShowing(!showing);
        if(!user)
{            dispatch(registerProfilePatient({username:currentuser.username,age,weight,sexe})) 
dispatch(getProfilePatient({"username": currentuser.username}))

 }
else

          {  const aging= age?age:user.age
            const weighting= weight?weight:user.weight
            const sex=sexe?sexe:user.sexe
             dispatch(updateProfile({username:user.username,age:aging,weight:weighting,sexe:sex}))
}};
    return (<div className="container generalwriting">
       

      
        
        {loading? <h1>Loading ...</h1>:      !currentuser?<Redirect to="/login"/>:
        <> <div className="row">
        
               <div className="col-12 plop">
               <h2 style={{color:"rgba(142, 43, 182, 0.774)"}} >Welcome {currentuser.username}</h2>
               </div>
            </div>
            <div className="row">
                <div className="col-4"></div>
                
               
               <>
        {user?<div className="col-4 thirdplop"> 
        
    Age : {user.age}<br/>
    Weight : {user.weight}<br/>
    Sexe : {user.sexe}</div>:
    null
    }
    </>
    </div>
    <div className="row" ></div>
            <div className="row" style={{fontSize:"20px",paddingTop:"15px"}}>
                <div className="col-4"></div>
                <div className="col-4 secondplop">
            <button className="btn btn-outline-primary" onClick={show}>{!user?<>Insert Profile Info</>:<>Update Profile</>}<br/></button>
            {showing?null:<>
             <input  type="text"
             name="weight"
             onChange={(e) => setWeight(e.target.value)}
             placeholder="Weight"
             className="form-control"
             ></input>
             <input type="text"
             name="age"
             onChange={(e) => setAge(e.target.value)}
             placeholder="age"
             className="form-control"
             ></input>
             <div onChange={(e) => setSexe(e.target.value)}>
                <input type="radio" value="Male" name="sexe" /> Male
                <input type="radio" value="Female" name="sexe" /> Female
              </div>
              <button className="btn btn-primary" type="submit" onClick={addProfilerOrUpdate}>Submit</button>
              </>}
              </div>
              </div>
              
            
        </>
        }
        </div>
    )
}

export default PatientProfile;
