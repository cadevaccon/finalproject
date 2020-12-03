import { USER_LOGOUT,USER_LOGOUT_FAILURE,USER_LOGOUT_SUCESS, GET_DOCTOR, GET_DOCTOR_FAILURE, GET_DOCTOR_SUCESS, REGISTER_DOCTOR_PROFILE, REGISTER_DOCTOR_PROFILE_FAILURE, REGISTER_DOCTOR_PROFILE_SUCESS, UPDATE_DOCTOR_PROFILE, UPDATE_DOCTOR_PROFILE_FAILURE, UPDATE_DOCTOR_PROFILE_SUCESS, } from "../constants/actiontype";


const initialState={
    loading:false,
    user:null,
    errors:null
};

const doctorReducer =(state = initialState,{type,payload})=> 
{
    switch (type) {
        case GET_DOCTOR: return {...state,loading:true}
        case GET_DOCTOR_FAILURE: return {...state,loading:false,errors:payload}
        case GET_DOCTOR_SUCESS:return {...state,loading:false,user:payload,errors:null}
        case REGISTER_DOCTOR_PROFILE: return {...state,loading:true}
        case REGISTER_DOCTOR_PROFILE_FAILURE: return {...state,loading:false,errors:payload}
        case REGISTER_DOCTOR_PROFILE_SUCESS: return {...state,loading:false,user:payload,errors:null};
        case UPDATE_DOCTOR_PROFILE:return{...state,loading:true}
        case UPDATE_DOCTOR_PROFILE_FAILURE:return{...state,loading:false,errors:payload}
        case UPDATE_DOCTOR_PROFILE_SUCESS:return{...state,user:payload,errors:null}
        case USER_LOGOUT:return {  ...state,user:null}
       
    
        default: return state;
           
    }
}
export default doctorReducer;