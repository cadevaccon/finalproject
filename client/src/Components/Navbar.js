import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { userlogout } from '../JS/actions'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbarcss.css'

function Navbar() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)
    const [logout, setLogout] = useState(false)
   
    const log=()=>{
         localStorage.removeItem('token')
        dispatch(userlogout())
        setLogout(true)
     }
    return (<>
      <div style={{textAlign:"center",fontSize:"22px"}} >
      <nav>
  <ul>
  <li><Link to="/" style={{textDecoration:"none", color: 'inherit' }}><span > Home</span></Link></li>
  {user?user.role==="Patient"?<li> <Link to="/myposts" style={{textDecoration:"none", color: 'inherit' }} ><span> My posts</span></Link></li>
:
<li > <Link to="/doctorposts" style={{textDecoration:"none", color: 'inherit' }} ><span > Posts</span></Link></li>
:null}
        {user? 
           <li > <Link to="/profile" style={{textDecoration:"none", color: 'inherit' }} ><span > Profile</span></Link></li>
            :
            <li > <Link to="/login" style={{textDecoration:"none", color: 'inherit' }}><span > Login</span></Link></li>
            }
       
        {user?  <><li onClick={log}>Logout</li>
                 
            {logout?<><Redirect to ="/"/></>:null}</>: <li><Link to="/register" style={{textDecoration:"none", color: 'inherit' }}><span > Register</span></Link></li>

        }
   

  </ul>
</nav>
</div>




  </>
    )
}

export default Navbar
