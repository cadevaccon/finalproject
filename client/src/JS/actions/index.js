import axios from 'axios'
import { CLEAR_INDIVIDUAL_POST_PROFILE, GET_ALL_NON_DONE_POSTS, GET_ALL_NON_DONE_POSTS_FAILURE, GET_ALL_NON_DONE_POSTS_SUCESS, GET_DOCTOR, GET_DOCTOR_FAILURE, GET_DOCTOR_SUCESS, GET_INDIVIDUAL_POST_PROFILE, GET_INDIVIDUAL_POST_PROFILE_FAILURE, GET_INDIVIDUAL_POST_PROFILE_SUCESS, GET_PATIENT, GET_PATIENT_FAILURE, GET_PATIENT_POST, GET_PATIENT_POST_FAILURE, GET_PATIENT_POST_SUCESS, GET_PATIENT_SUCESS, GET_PROFILE, GET_PROFILE_FAILURE, GET_PROFILE_SUCESS, LOGIN_FAILURE, LOGIN_SUCESS, LOGIN_USER, PATIENT_INSERT_POST, PATIENT_INSERT_POST_FAILURE, PATIENT_INSERT_POST_SUCESS, REGISTER_DOCTOR_PROFILE, REGISTER_DOCTOR_PROFILE_FAILURE, REGISTER_DOCTOR_PROFILE_SUCESS, REGISTER_FAILURE, REGISTER_PATIENT_PROFILE, REGISTER_PATIENT_PROFILE_FAILURE, REGISTER_PATIENT_PROFILE_SUCESS, REGISTER_SUCESS, REGISTER_USER, UPDATE_DOCTOR_PROFILE, UPDATE_DOCTOR_PROFILE_FAILURE, UPDATE_DOCTOR_PROFILE_SUCESS, UPDATE_PATIENT_POST, UPDATE_PATIENT_POST_FAILURE, UPDATE_PATIENT_POST_SUCESS, UPDATE_PATIENT_PROFILE, UPDATE_PATIENT_PROFILE_FAILURE, UPDATE_PATIENT_PROFILE_SUCESS, USER_LOGOUT } from '../constants/actiontype'
export const register=(newUser)=>async dispatch=>{
    dispatch({
        type:REGISTER_USER
    })
    try {
        const addResult= await axios.post('/user/register',newUser)

        dispatch({type:REGISTER_SUCESS})
    } catch (error) {
        dispatch({type:REGISTER_FAILURE,payload: error.response.data});
        
    }
}

export const login=(cred)=>async dispatch=>{
    dispatch({
        type:LOGIN_USER
    })
    try {
        const loginres=await axios.post('/user/login',cred)
        localStorage.setItem('token',loginres.data.token)
        dispatch({
            type:LOGIN_SUCESS,
            payload:loginres.data
        })
        
        
    } catch (error) {
        dispatch({
            type:LOGIN_FAILURE,
            payload: error.response.data
        })
        
    }
}

export const getProfile=()=>async dispatch=>{
    const token =localStorage.getItem('token')
    const config={
        headers:{Authorization:token}
    }
    dispatch({
        type:GET_PROFILE
        
    })
    
    try {
        const currentuser=await axios.get("/user/current",config)
        dispatch({
            type:GET_PROFILE_SUCESS,
            payload:currentuser.data,
        })
        
    } catch (error) {
            dispatch({
                type:GET_PROFILE_FAILURE,
                payload: error.response.data
            })
    }
}

export const registerProfilePatient=(newUser)=>async dispatch=>{
    dispatch({
        type:REGISTER_PATIENT_PROFILE
    })
    try {
        const addResult= await axios.post('/profilepatient/profile_pat/',newUser)

        dispatch({type:REGISTER_PATIENT_PROFILE_SUCESS, payload:addResult.data})
    } catch (error) {
        dispatch({type:REGISTER_PATIENT_PROFILE_FAILURE,payload: error.response.data});
        
    }
}

export const getProfilePatient=(newUser)=>async dispatch=>{
    dispatch({
        type:GET_PATIENT
    })
    try {
        const addResult= await axios.post('/profilepatient/myprofile/',newUser)

        dispatch({type:GET_PATIENT_SUCESS, payload:addResult.data})
    } catch (error) {
        dispatch({type:GET_PATIENT_FAILURE,payload: error.response.data});
        
    }
}
export const getPostProfilePatient=(newUser)=>async dispatch=>{
    dispatch({
        type:GET_INDIVIDUAL_POST_PROFILE
    })
    try {
        const addResult= await axios.post('/profilepatient/myprofile/',newUser)

        dispatch({type:GET_INDIVIDUAL_POST_PROFILE_SUCESS, payload:addResult.data})
    } catch (error) {
        dispatch({type:GET_INDIVIDUAL_POST_PROFILE_FAILURE,payload: error.response.data});
        
    }
}

export const updateProfile=(newProfile)=>async dispatch=>{
    dispatch({
        type:UPDATE_PATIENT_PROFILE
    })
    try {
        const updateResult=await axios.post('/profilepatient/updateprofile',newProfile)
       
        dispatch({
            
            type:UPDATE_PATIENT_PROFILE_SUCESS,payload:updateResult.data
        })
    } catch (error) {
        dispatch({type:UPDATE_PATIENT_PROFILE_FAILURE,payload:error.response.data})
        
    }
}

export const patientinsertpost=(newPost)=>async dispatch=>{
    dispatch({
        type:PATIENT_INSERT_POST
    })
    try {
        const insertionpost=await axios.post('/myposts/savemypost',newPost)
    
        dispatch({
            type:PATIENT_INSERT_POST_SUCESS,payload:insertionpost
        })
    } catch (error) {
        dispatch({type:PATIENT_INSERT_POST_FAILURE,payload:error.response.data})
    }

}
export const patientgetposts=(username)=>async dispatch=>{
    dispatch({
        type:GET_PATIENT_POST
    })
    try {
        const getposts=await axios.post('/myposts/getmyposts',username)
        dispatch({
            type:GET_PATIENT_POST_SUCESS,payload:getposts.data
        })
    } catch (error) {
        dispatch({type:GET_PATIENT_POST_FAILURE,payload:error.response.data})
    }

}

export const updatepost=(newPost)=>async dispatch=>{
    dispatch({
        type:UPDATE_PATIENT_POST
    })
    try {
        const updateResult=await axios.post('/myposts/update',newPost)
       
        dispatch({

            type:UPDATE_PATIENT_POST_SUCESS,payload:updateResult.data
        })
    } catch (error) {
        dispatch({type:UPDATE_PATIENT_POST_FAILURE,payload:error.response.data})
        
    }
}

export const registerProfileDoctor=(newUser)=>async dispatch=>{
    dispatch({
        type:REGISTER_DOCTOR_PROFILE
    })
    try {
        const addResult= await axios.post('/profiledoctor/profile_doc/',newUser)

        dispatch({type:REGISTER_DOCTOR_PROFILE_SUCESS, payload:addResult.data})
    } catch (error) {
        dispatch({type:REGISTER_DOCTOR_PROFILE_FAILURE,payload: error.response.data});
        
    }
}

export const getProfileDoctor=(newUser)=>async dispatch=>{
    dispatch({
        type:GET_DOCTOR
    })
    try {
        const addResult= await axios.post('/profiledoctor/myprofile/',newUser)

        dispatch({type:GET_DOCTOR_SUCESS, payload:addResult.data})
    } catch (error) {
        dispatch({type:GET_DOCTOR_FAILURE,payload: error.response.data});
        
    }
}

export const updateProfileDoctor=(newProfile)=>async dispatch=>{
    dispatch({
        type:UPDATE_DOCTOR_PROFILE
    })
    try {
        const updateResult=await axios.post('/profiledoctor/updateprofile',newProfile)
       
        dispatch({
            
            type:UPDATE_DOCTOR_PROFILE_SUCESS,payload:updateResult.data
        })
    } catch (error) {
        dispatch({type:UPDATE_DOCTOR_PROFILE_FAILURE,payload:error.response.data})
        
    }
}

export const getallnondoneposts=()=>async dispatch=>{
    dispatch({
        type:GET_ALL_NON_DONE_POSTS
    })
    try {
            const posts=await axios.post('/myposts/getNonDonePost')
           
            dispatch({
                type:GET_ALL_NON_DONE_POSTS_SUCESS,payload:posts.data
            })
    } catch (error) {
        dispatch({type:GET_ALL_NON_DONE_POSTS_FAILURE,payload:error.response.data})
    }

}

export const userlogout=()=> dispatch=>{
    dispatch({
        type:USER_LOGOUT
    })
}

export const clearindividualPosts=()=> dispatch=>{
    dispatch({
        type:CLEAR_INDIVIDUAL_POST_PROFILE
    })
}




