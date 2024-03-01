// LegalAdviceCard.js

import React from 'react';
import './LegalAdvice.css';

const LegalAdvice = ({ title, content, date }) => {
  return (
    <>
    <div className="legal-advice-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <p className="date">{date}</p>
    </div>




    <div class="page-container">
        <h1>Legal Advice</h1>
        <div class="legal-advice-cards">
        <!-- Include LegalAdviceCard.html here as needed -->
        </div>
    </div>

    </>














  );
};

export default LegalAdvice;
