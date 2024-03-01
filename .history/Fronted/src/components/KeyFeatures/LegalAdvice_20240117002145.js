// LegalAdviceCard.js

import React from 'react';
import './LegalAdvice.css';


const legalAdviceData = [
    {
      title: 'Know Your Rights',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'January 17, 2024',
    },
    // Add more legal advice data as needed
  ];

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
        </div>
    </div>

    </>
  );
};

export default LegalAdvice;
