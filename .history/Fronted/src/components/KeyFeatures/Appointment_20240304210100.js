// import {Link} from "react-router-dom";
// import './Appointment.css';

// const Appointment = () => {
//   return (
//     <>
//       <h1>
//         Book an Appointment Session with Legal Professionals
//       </h1>

//       <div className="row"> 
//         <div className="col-md-4" style={{marginBottom:"20px", marginTop:"50px"}}>
//           <Link to="/Session">
//             <button className="lawsession">
//               <img src="https://content.jdmagicbox.com/comp/def_content/lawyers/default-lawyers-5.jpg" className="Lawyer" alt="Logo" width="320px" height="270px"/>
//               {/* <h3 style={{fontSize:"25px"}}></h3> */}
//             </button>
//           </Link>

//           <div className="detail">
//             <span>
//               <h3 style={{fontSize:"25px"}}>Abhishek Singhvi.</h3>
//               <h3 style={{fontSize:"25px"}}>15+ YOE</h3> 
//               <h3 style={{fontSize:"25px"}}>J.D., Harvard Law School</h3>
//               <h4 style={{fontSize:"25px"}}>Corporate Law, Mergers and Acquisitions</h4>
//               <p style={{color:"GrayText"}}></p>
//             </span>

//             </div>

//             <div class="register-button">
//               <Link to="/Session">
//                 <button className="Regis">
//                   Register now
//                 </button>
//               </Link>
//             </div>
          
//         </div>

//         <div className="col-md-4" style={{marginBottom:"20px", marginTop:"50px"}}>
//           <Link to="/Session">
//             <button className="lawsession">
//               <img src="https://cdn.pixabay.com/photo/2023/06/19/01/42/ai-generated-8073256_1280.png" className="Lawyer" alt="Logo" width="320px" height="270px"/>
//             </button>
//           </Link>

//           <div>
//             <span>
//               <h3 style={{fontSize:"25px"}}>K. K. Venugopal.</h3>
//               <h3 style={{fontSize:"25px"}}>12+ YOE</h3> 
//               <h3 style={{fontSize:"25px"}}>Yale Law School</h3>
//               <h4 style={{fontSize:"25px"}}>Intellectual Property, Patent Law</h4>
//               <p style={{color:"GrayText"}}></p>
//             </span>

//             <div class="register-button">
//               <Link to="/Session">
//                 <button className="Regis">
//                   Register now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4" style={{marginBottom:"20px", marginTop:"50px"}}>
//           <Link to="/Session">
//             <button className="lawsession">
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcnOMPXORO_chgjriJjhkNs8lzHYv2UfUHL6hch8c_JmbFBm-lKs73xkEh_MV7Tdtlo0&usqp=CAU" alt="Logo" width="320px" height="270px"/>
//             </button>
//           </Link>

//           <div>
//             <span>
//               <h3 style={{fontSize:"25px"}}>Fali Sam Nariman.</h3>
//               <h3 style={{fontSize:"25px"}}>10+ YOE</h3> 
//               <h3 style={{fontSize:"25px"}}>StanFord Law School</h3>
//               <h4 style={{fontSize:"25px"}}>Criminal Law, Civil Litigation</h4>
//               <p style={{color:"GrayText"}}></p>
//             </span>

//             <div class="register-button">
//               <Link to="/Session">
//                 <button className="Regis">
//                   Register now


//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Appointment;







import { set } from "mongoose";
import { Link, useNavigate } from "react-router-dom";

const RealtimeLegal = () => {
    let LoginScheema=false
    const nav=useNavigate();
   const HandleLogin = () => {
    if( sessionStorage.getItem("userId"))
    {
       nav('/onlineappoinment');
    }
    else{
        LoginScheema=true;
    }
};
return ( 
        <>
     
    <div class="container2" style={{marginTop:"28px"}}>
        <h1 class="head">Real-time Legal Advice</h1>
        <p class="p">Connect with a licensed legal professional via live video call for 
        personalized advice. We will make every effort to have you connected to an attorney in your jurisdiction.
         If not, you will be connected to an attorney who can assist you based on the general principles of law.</p>
   



        <div class="lawyer-profile">
            <h2 style={{textAlign:"left"}}>Rajesh Kumar, Esq.</h2>
            <p style={{textAlign:"left"}}>Experienced attorney specializing in Indian Law.</p>
            <p style={{textAlign:"left"}}><strong>Experience:</strong> 10+ years</p>
            <p style={{textAlign:"left"}}><strong>Contact:</strong> rajesh.kumar@example.com</p>
            <p style={{textAlign:"left"}} class="contact-info"><strong>Phone:</strong> +91 98765 43210</p>
            <p style={{textAlign:"left"}}><strong>Location:</strong> New Delhi, India</p>
            <Link style={{textAlign:"left"}} to="/onlineappoinment" class="cta-button">Schedule Consultation</Link>
        </div>

        <div class="lawyer-profile">
            <h2 style={{textAlign:"left"}}>Priya Sharma, Esq.</h2>
            <p style={{textAlign:"left"}}>Dedicated lawyer with expertise in Indian Law.</p>
            <p style={{textAlign:"left"}}><strong>Experience:</strong> 8+ years</p>
            <p style={{textAlign:"left"}}><strong>Contact:</strong> priya.sharma@example.com</p>
            <p style={{textAlign:"left"}} class="contact-info"><strong>Phone:</strong> +91 98765 87654</p>
            <p style={{textAlign:"left"}}><strong>Location:</strong> Mumbai, India</p>
            <Link style={{textAlign:"left"}} onClick={HandleLogin} class="cta-button">Schedule Consultation</Link>
        </div>
        

    </div>  
        
        </>
     );
}
 
export default RealtimeLegal;