import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../JS/actions/index'
import "./Registercss.css"

function Login() {

    const dispatch = useDispatch()


    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    const loading = useSelector(state => state.userReducer.loading)
    const error = useSelector(state => state.userReducer.error)
        const [errors, setErrors] = useState()
    
        const loginUser=(e)=>{
            e.preventDefault();
            if (username&&password)
           { setErrors("");
            dispatch(

                login({
                    username,password
                })
            )}
            else
            setErrors("Please Fill Bowth Fields")
        }
        
    return (localStorage.getItem('token')?
    <Redirect to="/profile"/>:loading? <div>Loading ...</div>:
            

        <div className="get-in-touch">
            
            <h3 className="title">LOGIN</h3>
                {error||errors? <div style={{color:"red",border:"1px",borderColor:"red",borderRadius:"5px",textAlign:"center",borderStyle: "solid"}}> <div >{error}{errors}<br/></div></div>:null}
                <form class="contact-form row">
                <div class="form-field col-lg-6">
            <input type="text" name="username" onChange={e=>setUsername(e.target.value)} className="input-text js-input"/>
            <label class="label" for="name">Username</label>
            </div>
            <div class="form-field col-lg-6">
            <input type="password" name="password" onChange={e=>setPassword(e.target.value)} className="input-text js-input"/>
            <label class="label" for="password">PassWord</label>
            </div>
            <div class="form-field col-lg-6">
            <button type="submit" onClick={loginUser}  class="submit-btn">Submit</button>
            </div>
            <div class="form-field col-lg-6">
            <button type="reset"  class="submit-btn" >Reset</button>
            </div>

            </form>
        </div>
    )
}

export default Login
