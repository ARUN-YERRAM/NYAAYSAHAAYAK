import React, { useState } from 'react';

const Session = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consultantName, setConsultantName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email) {
      alert('Please enter your name and email');
      return;
    }
    alert(`Appointment set for ${date} at ${time}\n\nName: ${name}\nEmail: ${email}`);
    // Reload the page after 2 seconds
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <h1>Book An Appointment Session With Legal Professionals</h1>

      <div>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="Phone.No">Phone No:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

          <label htmlFor="time">
            Time:
          </label>
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />

          <label htmlFor="consultantName">
            Consultant Name:
          </label>
          <input type="text" id="consultantName" value={consultantName} onChange={(e) => setConsultantName(e.target.value)} required />
          <br/>

          <input type="submit" value="Set Appointment" />
        </form>
      </div>
    </>
  );
};

export default Session;