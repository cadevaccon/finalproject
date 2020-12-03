import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfile } from '../JS/actions'

function Profile() {

    const currentuser = useSelector(state => state.userReducer.user)
    const user = useSelector(state => state.patientReducer.user)
    
    

    const loading = useSelector(state => state.userReducer.loading)
  
    const dispatch = useDispatch()
   

    useEffect(() => {
        dispatch(getProfile()) 
        
          
},[])

            // TO VERIFY






  
//   const starttimer=(e)=>{
//       console.log("test1")
//    setTimeout(() => {
//     console.log("TEST2")
  
//     dispatch(getProfilePatient({"username": e}))
// }, 1000);

 
  
    return ( 
                loading? <h1>Loading ...</h1>:      !currentuser?<Redirect to="/login"/>:
             currentuser.role==="Patient"?
        
            <Redirect to="/PatientProfile"/>:<Redirect to="/DoctorProfile"/>
           
    )
}

export default Profile


