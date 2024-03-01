import React, { useState } from 'react';


const Feedback = () {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
 event.preventDefault();
    // send feedback to server here
  };

  return (
    <div className="container">
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <textarea id="feedback" name="feedback" value={feedback} onChange={(event) => setFeedback(event.target.value)} required></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;