import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Login from './Components/Login';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
import PatientProfile from './Components/PatientProfile';
import DoctorProfile from './Components/DoctorProfile';
import DoctorPost from "./Components/DoctorPost"
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
      <>
    <BrowserRouter>
     
      <Navbar/>
    
    <Switch >
      
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}></Route>
    <Route exact path="/myposts" component={Post}></Route>
    <Route exact path='/profile' component={Profile}></Route>
    <Route exact path="/patientProfile" component={PatientProfile}></Route>
    <Route exact path="/aboutus" component={About}></Route>
    <Route exact path='/doctorProfile' component={DoctorProfile}></Route>
    <Route exact path="/doctorposts" component={DoctorPost}></Route>
    <Route exact path="/" component={Home}></Route>
    
    </Switch>
    </BrowserRouter>
   </>
  );
}

export default App;
