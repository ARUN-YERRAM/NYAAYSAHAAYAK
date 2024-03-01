// LegalAdvicePage.js

import React from 'react';
import LegalAdviceCard from './LegalAdviceCard';
import './LegalAdvice.css';

const LegalAdvice = () => {
  const legalAdviceData = [
    {
      title: 'Know Your Rights',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'January 17, 2024',
    },
    // Add more legal advice data as needed
  ];

  return (
    <div className="page-container">
      <h1>Legal Advice</h1>
      <div className="legal-advice-cards">
        {legalAdviceData.map((advice, index) => (
          <LegalAdviceCard key={index} {...advice} />
        ))}
      </div>
    </div>
  );
};

export default LegalAdvicePage;
