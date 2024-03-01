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
      <div>
        <h1>Feedback</h1>
        <form onSubmit={handleSubmit}>
          <textarea id="userFeedback" name="userFeedback" rows="4" cols="50"></textarea><br />
          <input type="submit" value="Submit" />
        </form>
        {submitted && 
        //   <div>
            {/* Thank You for submitting the response */}
          {/* </div> */}
        }
      </div>
    </>
  );
}

export default Feedback;