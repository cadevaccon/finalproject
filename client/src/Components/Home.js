import React from 'react'
import covid from './covid.jpg'
import './homecss.css'

function Home() {
    
    return (
        
 <div className="container ">
     <div className="row">
         <div className="col-8">
            <img src={covid} height='400px'></img>
         </div>
         <div class="col-3 linking">
                           <a href="https://www.news-medical.net/news/20201201/How-COVID-19-highlights-the-uncertainty-of-medical-testing.aspx"> 
                            Covid--19
                            </a>
         </div>
     </div>



 </div>
    )
}

export default Home
