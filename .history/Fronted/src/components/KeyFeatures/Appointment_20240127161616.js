const Appointment= () => {
  return (
    <>
    <h1>
      Book an Appointment Session with Legal Professionals
    </h1>

       
   <div class="col-md-4  " style={{marginBottom:"20px"}}>
       <Link to="/KeyFeatures/LawTypes">
       <button class="lawsession">
       <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702632300/
ecwbq7oxj2e0nuez44ec.jpg" class="img" alt="Online Marketplace Logo" />
       <h3 style={{fontSize:"25px"}}>Laws</h3>
       <p style={{color:"GrayText"}}>Different types of laws and their info.</p></
button>
       </Link>
   </div>
    
    
    </>
  );
}

export default Appointment;