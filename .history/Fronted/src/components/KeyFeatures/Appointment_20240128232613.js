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

          <div class="col-md-4   " style={{marginBottom:"20px", marginTop:"50px"}}>
            <Link to="/Session">
              <button class="lawsession">
               <img src="https://content.jdmagicbox.com/comp/def_content/lawyers/default-lawyers-5.jpg" class="Lawyer" alt = "Logo" width="250px" height="250px"/>
                                
                <h3 style={{fontSize:"25px"}}>  name="John Doe"</h3>
                <h3 style={{fontSize:"25px"}}>  yearsOfExperience="15"</h3> 
                <h3 style={{fontSize:"25px"}}> education="J.D., Harvard Law School" </h3>
                <h4 style={{fontSize:"25px"}}>  expertise="Corporate Law, Mergers 
                and Acquisitions"</h4>
                <p style={{color:"GrayText"}}></p>
            
        </button>
        </Link>
          </div>

                

          <div class="col-md-4 row-md-4  size="100px" style={{marginBottom:"20px", marginTop:"50px"}} width="100px" height="60px">
            <Link to="/Session">
              <button class="lawsession">
              <img src="https://cdn.pixabay.com/photo/2023/06/19/01/42/ai-generated-8073256_1280.png" class="Lawyer" alt = "Logo" width="300px" height="270px"/>
              <h3 style={{fontSize:"25px"}}>  name="John Doe"</h3>
              <h3 style={{fontSize:"25px"}}>  yearsOfExperience="15"</h3> 
              <h3 style={{fontSize:"25px"}}> education="J.D., Harvard Law School" </h3>
              <h4 style={{fontSize:"25px"}}>    expertise="Intellectual Property, Patent Law" </h4>

              <p style={{color:"GrayText"}}></p>
              </button>
        </Link>
              
          </div>

                

          <div class="col-md-4  " style={{marginBottom:"20px", marginTop:"50px"}}>
            <Link to="/Session">
              <button class="lawsession">
              <img src=""/>


          <h3 style={{fontSize:"25px"}}>  name="John Doe"</h3>
          <h3 style={{fontSize:"25px"}}>  yearsOfExperience="15"</h3> 
          <h3 style={{fontSize:"25px"}}> education="J.D., Harvard Law 
          School" </h3>
          <h4 style={{fontSize:"25px"}}>  expertise="Criminal Law, Civil Litigation"</h4>
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