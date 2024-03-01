// import React, { useState } from 'react';

const Feedback = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (event) => {
    // event.preventDefault();
    // setSubmitted(true);
//   };



// Connect to MongoDB Atlas
mongoose.connect('your_mongodb_atlas_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas: ', error);
  });

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
  feedback: String,
  submittedAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// Express route to handle feedback submission
app.post('/submit-feedback', async (req, res) => {
  const { feedback } = req.body;
  if (!feedback) {
    return res.status(400).json({ error: 'Feedback is required' });
  }

  try {
    const newFeedback = new Feedback({ feedback });
    await newFeedback.save();
    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while submitting feedback' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


























  return (
    <>
      <div>
        <h1>Feedback</h1>
        <form>
          <textarea id="userFeedback" name="userFeedback" rows="4" cols="50"></textarea><br />
          <input type="submit" value="Submit" />
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