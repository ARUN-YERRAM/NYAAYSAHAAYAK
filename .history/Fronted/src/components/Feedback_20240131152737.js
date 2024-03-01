// import React, { useState } from 'react';

const Feedback = () => {
  import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Onlineappoinment = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [popup,setpopup] =useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    area: '',
    city: '',
    state: '',
    postCode: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/submit-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Appointment booked successfully!');
        // You can add further actions after successful booking, e.g., redirecting the user.
      } else {
        console.error('Error booking appointment.');
      }
       navigate("/details")
      setpopup(true)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (event) => {
    // event.preventDefault();
    // setSubmitted(true);
//   };

  return (
    <>
      <div>
        <h1>Feedback</h1>
        <form>
          <textarea id="userFeedback" name="userFeedback" rows="4" cols="50"></textarea><br />
          <input type="submit" value="Submit" placeholder="Provide Your Feedback here..."/>
        </form>
        {/* {submitted && 
          <div>
            Thank You for submitting the response
          </div>
        } */}
      </div>
    </>
  );
}

export default Feedback;