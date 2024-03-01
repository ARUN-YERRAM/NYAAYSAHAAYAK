import React, { useState } from 'react';


const LegalProfessional = ({ name, yearsOfExperience, education, expertise, image }) => (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-name">{name}</h2>
      <p>Years of Experience: {yearsOfExperience}</p>
      <p>Education: {education}</p>
      <p>Expertise: {expertise}</p>
    </div>
  );
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
const Session = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Phone,setPhone] = useState('');
  const [Consultant_name,setConsultant_name] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email) {
      alert('Please enter your name and email');
      return;
    }
    alert(`Appointment set for ${date} at ${time}\n\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <>
      <h1> Book A Appointment Session With Legal Professionals </h1>

      <div>
        <LegalProfessionals />
      </div>

      <div>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            
          <label htmlFor="Phone.No">Phone No:</label>
          <input type="Phone.No" id="Phone.No" value={Phone} onChange={(e) => setPhone(e.target.value)} required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

          <label htmlFor="time">
            Time:
          </label>
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />

          <label htmlFor="Consultant Name">
            Consultant Name:
          </label>
          <input type="Name" id="Name" value={time} onChange={(e) => setTime(e.target.value)} required />
          <br/>



          <input type="submit" value="Set Appointment" />
        </form>
      </div>

    </>
  );
};

export default Session;