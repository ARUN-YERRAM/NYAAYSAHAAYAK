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
              <img src="https://content.jdmagicbox.com/comp/def_content/lawyers/default-lawyers-5.jpg" class="Lawyer" alt = "Logo" width="320px" height="270px"/>
              <h3 style={{fontSize:"25px"}}>Krish</h3>
              </button>
            </Link>

            <div class="detail">
              <span>
                                
                <h3 style={{fontSize:"25px"}} size="30px">"John Doe"</h3>
                <h3 style={{fontSize:"25px"}}>  15+ </h3> 
                <h3 style={{fontSize:"25px"}}> education="J.D., Harvard Law School" </h3>
                <h4 style={{fontSize:"25px"}}>  expertise="Corporate Law, Mergers 
                and Acquisitions"</h4>
                <p style={{color:"GrayText"}}></p>

                </span>
                </div>
      
          </div>

                

          <div class="col-md-4 row-md-4  size=100px height=200px" style={{marginBottom:"20px", marginTop:"50px"}} width="100px" height="60px">
            <Link to="/Session">
              <button class="lawsession">
              <img src="https://cdn.pixabay.com/photo/2023/06/19/01/42/ai-generated-8073256_1280.png" class="Lawyer" alt = "Logo" width="320px" height="270px"/>

              </button>
 </Link>
      
      <div>

    

              <h3 style={{fontSize:"25px"}}>  name="John Doe"</h3>
              <h3 style={{fontSize:"25px"}}>  yearsOfExperience="15"</h3> 
              <h3 style={{fontSize:"25px"}}> education="J.D., Harvard Law School" </h3>
              <h4 style={{fontSize:"25px"}}>    expertise="Intellectual Property, Patent Law" </h4>

              <p style={{color:"GrayText"}}></p>
          </div>
          </div>

                
      
          <div class="col-md-4  " style={{marginBottom:"20px", marginTop:"50px"}}>
            <Link to="/Session">
              <button class="lawsession">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcnOMPXORO_chgjriJjhkNs8lzHYv2UfUHL6hch8c_JmbFBm-lKs73xkEh_MV7Tdtlo0&usqp=CAU" alt="Logo" width="320px" height="270px"/>
              </button>
        </Link>

        <div>



          <h3 style={{fontSize:"25px"}}>  name="John Doe"</h3>
          <h3 style={{fontSize:"25px"}}>  yearsOfExperience="15"</h3> 
          <h3 style={{fontSize:"25px"}}> education="J.D., Harvard Law 
          School" </h3>
          <h4 style={{fontSize:"25px"}}>  expertise="Criminal Law, Civil Litigation"</h4>
          <p style={{color:"GrayText"}}></p>

          </div>
          </div>
          </div>
        </div>

    
            </>
  );
}

export default Appointment;