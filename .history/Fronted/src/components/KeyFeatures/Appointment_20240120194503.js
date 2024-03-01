// import React, { useState } from 'react';
// import './Appointment.css';


// const Appointment = () => {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Appointment set for ${date} at ${time}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Date:
//         <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
//       </label>
//       <label>
//         Time:
//         <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
//       </label>
//       <input type="submit" value="Set Appointment" />
//     </form>
//   );
// };

// export default Appointment;


import React from 'react';
import './Appointment.css';

const AppointmentForm = () => {
    
  return (
    <div>
      <form className="appointment-form">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AppointmentForm;