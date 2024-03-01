import {Link} from "react-router-dom";
import './Appointment.css';
const Appointment= () => {
  return (
            <>
            <h1>
              Book an Appointment Session with Legal Professionals
            </h1>

            <div>

          
            <div class="row"> 

          <div class="col-md-4  " style={{marginBottom:"20px", marginTop:"50px"}}>
            <Link to="/Session">
              <button class="lawsession">
              <h3 style={{fontSize:"25px"}}>Name: Priya </h3>
              <h3 style={{fontSize:"25px"}}>Years of Experience: 12+ years</h3>
              <h4 style={{fontSize:"25px"}}>Field: Civil, Constitutional laws</h4>

              <p style={{color:"GrayText"}}></p></
        button>
        </Link>
          </div>

                

          <div class="col-md-4  " style={{marginBottom:"20px", marginTop:"50px"}} width="80px" height="60px">
            <Link to="/Session">
              <button class="lawsession">
                
              <h3 style={{fontSize:"25px"}}>  name="John Doe"</h3>
              <h3 style={{fontSize:"25px"}}>  yearsOfExperience="15"</h3> 
              <h3 style={{fontSize:"25px"}}> education="J.D., Harvard Law School" </h3>
              <h4 style={{fontSize:"25px"}}>  expertise="Corporate Law, Mergers and Acquisitions"</h4>

              <p style={{color:"GrayText"}}></p>
              </button>
        </Link>
              
          </div>

                

          <div class="col-md-4  " style={{marginBottom:"20px", marginTop:"50px"}}>
            <Link to="/Session">
              <button class="lawsession">


 <h3 style={{fontSize:"25px"}}>  name="John Doe"</h3>
 <h3 style={{fontSize:"25px"}}>  yearsOfExperience="15"</h3> 
 <h3 style={{fontSize:"25px"}}> education="J.D., Harvard Law 
School" </h3>
 <h4 style={{fontSize:"25px"}}>  expertise="Corporate Law, Mergers 
and Acquisitions"</h4>
 <p style={{color:"GrayText"}}></p>
            
            

            
        </button>
        </Link>
              
          </div>

          </div>


          </div>
            
            
            </>
  );
}

export default Appointment;