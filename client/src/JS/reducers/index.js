import {combineReducers} from "redux"
import userReducer from "./userReducer.js"
import patientReducer from "./patientReducer"
import postpatientReducer from './postpatientReducer'
import doctorReducer     from "./doctorReducer"


export default combineReducers({

    userReducer,patientReducer,postpatientReducer,doctorReducer
})
