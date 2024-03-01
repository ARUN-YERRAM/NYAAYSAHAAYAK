// LegalAdviceCard.js

import React from 'react';
import './LegalAdvice.css';

const LegalAdvice = ({ title, content, date }) => {
  return (
    <div className="legal-advice-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <p className="date">{date}</p>
    </div>



<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="LegalAdvicePage.css">
  <title>Legal Advice Page</title>
</head>

<body>
  <div class="page-container">
    <h1>Legal Advice</h1>
    <div class="legal-advice-cards">
      <!-- Include LegalAdviceCard.html here as needed -->
    </div>
  </div>
</body>

</html>












  );
};

export default LegalAdvice;
