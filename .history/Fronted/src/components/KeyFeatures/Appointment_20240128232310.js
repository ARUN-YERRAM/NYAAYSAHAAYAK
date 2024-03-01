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

                

          <div class="col-md-4  " style={{marginBottom:"20px", marginTop:"50px"}} width="100px" height="60px">
            <Link to="/Session">
              <button class="lawsession">
              <img src="data:image/jpeg;base64,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"/>
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