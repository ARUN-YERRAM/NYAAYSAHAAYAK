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
  );
};

export default LegalAdvice;
