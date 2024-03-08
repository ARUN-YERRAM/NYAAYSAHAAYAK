// import React, { useState } from 'react';

// const Feedback = () => {
//   const [submitted, setSubmitted] = useState(false);

//   // const handleSubmit = (event) => {
//     // event.preventDefault();
//     // setSubmitted(true);
//   // };

//   return (
//     <>
//       <div>
//         <h1>Feedback</h1>
//         <form>
//           <textarea id="userFeedback" name="userFeedback" rows="4" cols="50"></textarea><br />
//           <input type="submit" value="Submit" placeholder="Enter area" />
//         </form>
//         {submitted && 
//           <div>
//             Thank You for submitting the response
//           </div>
//         } 
//       </div>
//     </>
//   );
// }

// export default Feedback;



import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/feedback', { feedback });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <>
      <div>
        <h1>Feedback</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            id="userFeedback"
            name="userFeedback"
            rows="4"
            cols="50"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
        {submitted && (
          <div>Thank You for submitting the feedback</div>
        )}
      </div>
    </>
  );
};

export default Feedback;
