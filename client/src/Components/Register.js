import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { register, userlogout } from "../JS/actions/index";
import { Redirect } from "react-router-dom";
import "./Registercss.css"

function Register() {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const errors = useSelector(state => state.userReducer.errors)
  // need
  // const [usernameErr, setUsernameErr] = useState()
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [role, setRole] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const registering = useSelector(state => state.userReducer.register)
  // to Check1
  // errors.onChange(errors.errors.filter(e=>e.param==="username"?setUsernameErr(e.msg):null))
    
  const addUser = (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password, role, phonenumber }));
  
  };

  if (registering)
  {
    <Redirect to="/login"></Redirect>
  }
  return (
    <div className="get-in-touch">
      
      {loading ? (
        <div>
          {" "}
          <h2>Loading ....</h2>{" "}
        </div>
      ) : user ? (
        <>
          <Redirect to="/login" />
         
        </>
      ) : (
        
          <div className="get-in-touch">
          
              <h2 className="title">Register</h2>
              
      {errors? <div style={{color:"red",border:"1px",borderColor:"red",borderRadius:"5px",textAlign:"center",borderStyle: "solid"}}> {errors.errors?errors.errors.map(e=><div key={e} >{e.msg}<br/></div>):<div>{errors}</div>}</div> :null}
               
            <form class="contact-form row">
            
              <div>
            </div>
            <div class="form-field col-lg-6">
              <input
              
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder=""
                className="input-text js-input"
              ></input>
               <label class="label" for="name">Name</label>
              </div>

              <div class="form-field col-lg-6">
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="input-text js-input"
              ></input>
              <label class="label" for="email">E-mail</label>
              </div>
              <div class="form-field col-lg-6">
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                className="input-text js-input"
              ></input>
              <label class="label" for="password">PassWord</label>
              </div>
              <div class="form-field col-lg-6">
              <input
                type="text"
                name="phonenumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder=""
                className="input-text js-input"
              ></input>
               <label class="label" for="phonenumber">Phone Number</label>
              </div>
              {/* toCheck1 */}
              {/* {errors?errors.errors.map(e=>e.param==="phonenumber"?<div ><br/>{e.msg}</div>:null):null} */}
              <div class="form-field col-lg-12" style={{textAlign:"center"}}>
              <div onChange={(e) => setRole(e.target.value)}>
                <input type="radio" value="Doctor" name="role" /> Doctor
                <input type="radio" value="Patient" name="role" /> Patient
              </div>
              </div>
              <div className="form-field col-lg-6">
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={addUser}
                >
                  Submit
                </button>
              </div>
              <div className="form-field col-lg-6">
                <button
                  type="reset"
                  className="submit-btn"
                 
                >
                  Reset
                </button>
              </div>
            

            </form>
          </div>
          
      )}
      
    </div>
  );
}

export default Register;
