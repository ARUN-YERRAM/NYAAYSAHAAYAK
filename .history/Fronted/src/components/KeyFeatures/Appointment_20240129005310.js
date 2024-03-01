import {Link} from "react-router-dom";
import './Appointment.css';

const Appointment = () => {
  return (
    <>
      <h1>
        Book an Appointment Session with Legal Professionals
      </h1>

      <div className="row"> 
        <div className="col-md-4" style={{marginBottom:"20px", marginTop:"50px"}}>
          <Link to="/Session">
            <button className="lawsession">
              <img src="https://content.jdmagicbox.com/comp/def_content/lawyers/default-lawyers-5.jpg" className="Lawyer" alt="Logo" width="320px" height="270px"/>
              {/* <h3 style={{fontSize:"25px"}}></h3> */}
            </button>
          </Link>

          <div className="detail">
            <span>
              <h3 style={{fontSize:"25px"}}>Abhishek Singhvi.</h3>
              <h3 style={{fontSize:"25px"}}>15+ YOE</h3> 
              <h3 style={{fontSize:"25px"}}>J.D., Harvard Law School</h3>
              <h4 style={{fontSize:"25px"}}>Corporate Law, Mergers and Acquisitions</h4>
              <p style={{color:"GrayText"}}></p>
            </span>

            </div>

            <div class="">
              <Link to="/Session">
                <button className="Regis">
                  Register now
                </button>
              </Link>
            </div>
          
        </div>

        <div className="col-md-4" style={{marginBottom:"20px", marginTop:"50px"}}>
          <Link to="/Session">
            <button className="lawsession">
              <img src="https://cdn.pixabay.com/photo/2023/06/19/01/42/ai-generated-8073256_1280.png" className="Lawyer" alt="Logo" width="320px" height="270px"/>
            </button>
          </Link>

          <div>
            <span>
              <h3 style={{fontSize:"25px"}}>K. K. Venugopal.</h3>
              <h3 style={{fontSize:"25px"}}>12+ YOE</h3> 
              <h3 style={{fontSize:"25px"}}>Yale Law School</h3>
              <h4 style={{fontSize:"25px"}}>Intellectual Property, Patent Law</h4>
              <p style={{color:"GrayText"}}></p>
            </span>

            <div class="register-button">
              <Link to="/Session">
                <button className="Regis">
                  Register now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4" style={{marginBottom:"20px", marginTop:"50px"}}>
          <Link to="/Session">
            <button className="lawsession">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcnOMPXORO_chgjriJjhkNs8lzHYv2UfUHL6hch8c_JmbFBm-lKs73xkEh_MV7Tdtlo0&usqp=CAU" alt="Logo" width="320px" height="270px"/>
            </button>
          </Link>

          <div>
            <span>
              <h3 style={{fontSize:"25px"}}>Fali Sam Nariman.</h3>
              <h3 style={{fontSize:"25px"}}>10+ YOE</h3> 
              <h3 style={{fontSize:"25px"}}>StanFord Law School</h3>
              <h4 style={{fontSize:"25px"}}>Criminal Law, Civil Litigation</h4>
              <p style={{color:"GrayText"}}></p>
            </span>

            <div>
              <Link to="/Session">
                <button className="Regis">
                  Register now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
