import React, { useState } from 'react';

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    alert("Thank you for submitting feedback!");
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Feedback</h1>
        <form onSubmit={handleSubmit}>
          <textarea id="userFeedback" name="userFeedback" rows="4" cols="50" style={{ marginBottom: '10px' }}></textarea><br />
          <input type="submit" value="Submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
        </form>
        {submitted && 
          <div style={{ backgroundColor: '#f2f2f2', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            Thank You for submitting the response
          </div>
        }
      </div>
    </>
  );
}

export default Feedback;