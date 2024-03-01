import React, { useState } from 'react';
import './Appointment.css';

const LegalProfessional = ({ name, yearsOfExperience, education, expertise, image }) => (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-name">{name}</h2>
      <p>Years of Experience: {yearsOfExperience}</p>
      <p>Education: {education}</p>
      <p>Expertise: {expertise}</p>
    </div>
  );
  
  const LegalProfessionals = () => (
    <div className="legal-professionals">
   
      <div className="card-container">

        <LegalProfessional
        name="John Doe"
        yearsOfExperience="15"
        education="J.D., Harvard Law School"
        expertise="Corporate Law, Mergers and Acquisitions"
        image="https://source.unsplash.com/1600x900/?lawyer,man,boys,portrait,ProfessionalblackdressOut-fit,Office?David"
        />
        {/* <input type="submit" value="Set Appointment" /> */}
        <button className="set_app">Set Appointment</button>
        <LegalProfessional
        name="Jane Smith"
        yearsOfExperience="20"
        education="J.D., Yale Law School"
        expertise="Intellectual Property, Patent Law"
        image="https://source.unsplash.com/1600x900/?lawyer,man,boys,portrait,ProfessionalblackdressOut-fit,glasses,office?Vicky"
        />
        {/* <input type="submit" value="Set Appointment" /> */}
        <LegalProfessional
        name="Mike Johnson"
        yearsOfExperience="10"
        education="J.D., Stanford Law School"
        expertise="Criminal Law, Civil Litigation"
        
        image="https://source.unsplash.com/1600x900/?lawyer,man,boys,portrait,books,ProfessionalblackdressOut-fit,office?Hussey"
        />
        {/* <input type="submit" value="Set Appointment" /> */}

      </div>
    </div>
  );
const Appointment = () => {
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

      </div>

    </>
  );
};

export default Appointment;