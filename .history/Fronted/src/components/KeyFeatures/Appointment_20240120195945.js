
// import React, { useState } from 'react';
// // import React from 'react';
// import './Appointment.css';

// const LegalProfessional = ({ name, yearsOfExperience, education, expertise }) => (
//   <div className="card">
//     <h2 className="card-name">{name}</h2>
//     <p>Years of Experience: {yearsOfExperience}</p>
//     <p>Education: {education}</p>
//     <p>Expertise: {expertise}</p>
//   </div>
// );

// const LegalProfessionals = () => (
//   <div className="legal-professionals">
//     <h1>Our Legal Professionals</h1>
//     <div className="card-container">
//       <LegalProfessional
//         name="John Doe"
//         yearsOfExperience="15"
//         education="J.D., Harvard Law School"
//         expertise="Corporate Law, Mergers and Acquisitions"
//       />
//       <LegalProfessional
//         name="Jane Smith"
//         yearsOfExperience="20"
//         education="J.D., Yale Law School"
//         expertise="Intellectual Property, Patent Law"
//       />
//       <LegalProfessional
//         name="Mike Johnson"
//         yearsOfExperience="10"
//         education="J.D., Stanford Law School"
//         expertise="Criminal Law, Civil Litigation"
//       />
//     </div>
//   </div>
// );

// const Appointment = () => {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!name || !email) {
//       alert('Please enter your name and email');
//       return;
//     }
//     alert(`Appointment set for ${date} at ${time}\n\nName: ${name}\nEmail: ${email}`);
//   };

//   return (
//     <>
//       <h1> Book A Appointment Session With Legal Professionals </h1>

//       <div>
//         <LegalProfessionals />
//       </div>

      
//       <div>
//         <form className="appointment-form" onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

//           <label htmlFor="date">Date:</label>
//           <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

//           <label htmlFor="time">Time:</label>
//           <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />

//           <input type="submit" value="Set Appointment" />
//         </form>
//       </div>
    
//     </>
//   );
// };

// export default Appointment;




import React, { useState } from 'react';
// import React from 'react';
import './Appointment.css';

const LegalProfessional = ({ name, yearsOfExperience, education, expertise }) => (
  <div className="card">
    <h2 className="card-name">{name}</h2>
    <p>Years of Experience: {yearsOfExperience}</p>
    <p>Education: {education}</p>
    <p>Expertise: {expertise}</p>
  </div>
);

const LegalProfessionals = () => (
  <div className="legal-professionals">
    <h1>Our Legal Professionals</h1>
    <div className="card-container">
      <LegalProfessional
        name="John Doe"
        yearsOfExperience="15"
        education="J.D., Harvard Law School"
        expertise="Corporate Law, Mergers and Acquisitions"
      />
      <LegalProfessional
        name="Jane Smith"
        yearsOfExperience="20"
        education="J.D., Yale Law School"
        expertise="Intellectual Property, Patent Law"
      />
      <LegalProfessional
        name="Mike Johnson"
        yearsOfExperience="10"
        education="J.D., Stanford Law School"
        expertise="Criminal Law, Civil Litigation"
      />
    </div>
  </div>
);

const Appointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />

          <input type="submit" value="Set Appointment" />
        </form>
      </div>
    
    </>
  );
};

export default Appointment;