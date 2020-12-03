import {USER_LOGOUT, GET_ALL_NON_DONE_POSTS, GET_ALL_NON_DONE_POSTS_FAILURE, GET_ALL_NON_DONE_POSTS_SUCESS, GET_PATIENT_POST, GET_PATIENT_POST_FAILURE, GET_PATIENT_POST_SUCESS, PATIENT_INSERT_POST, PATIENT_INSERT_POST_FAILURE, PATIENT_INSERT_POST_SUCESS, UPDATE_PATIENT_POST, UPDATE_PATIENT_POST_FAILURE, UPDATE_PATIENT_POST_SUCESS, GET_INDIVIDUAL_POST_PROFILE_SUCESS, GET_INDIVIDUAL_POST_PROFILE, GET_INDIVIDUAL_POST_PROFILE_FAILURE, CLEAR_INDIVIDUAL_POST_PROFILE } from "../constants/actiontype";


const initialState={
    loading:false,
    post:null,
    errors:null,
    individualpost:null,
    triggeraction:false
};

const patientReducer =(state = initialState,{type,payload})=> 
{
    switch (type) {
        case PATIENT_INSERT_POST: return {...state,loading:true}
        case PATIENT_INSERT_POST_FAILURE: return {...state,loading:false,errors:payload}
        case PATIENT_INSERT_POST_SUCESS:return {...state,loading:false,user:payload,errors:null}
        case GET_PATIENT_POST: return {...state,loading:true}
        case GET_PATIENT_POST_FAILURE: return {...state,loading:false,errors:payload}
        case GET_PATIENT_POST_SUCESS:return {...state,loading:false,post:payload,errors:null}
        case UPDATE_PATIENT_POST: return {...state,loading:true}
        case UPDATE_PATIENT_POST_FAILURE: return {...state,loading:false,errors:payload}
        case UPDATE_PATIENT_POST_SUCESS:return {...state,loading:false,post:payload,errors:null}
        case GET_ALL_NON_DONE_POSTS: return {...state,loading:true}
        case GET_ALL_NON_DONE_POSTS_FAILURE: return {...state,loading:false,errors:payload}
        case GET_ALL_NON_DONE_POSTS_SUCESS:return {...state,loading:false,post:payload,errors:null}
        case USER_LOGOUT:return {...state,post:null}
        case GET_INDIVIDUAL_POST_PROFILE:return {...state,loading:true}
        case GET_INDIVIDUAL_POST_PROFILE_FAILURE:return{...state,errors:payload,loading:false}
        case GET_INDIVIDUAL_POST_PROFILE_SUCESS:return{...state,individualpost:payload,loading:false,triggeraction:true}
        case CLEAR_INDIVIDUAL_POST_PROFILE:return{...state,individualpost:null,triggeraction:false}
        
       
        default: return state;
           
    }
}
export default patientReducer;