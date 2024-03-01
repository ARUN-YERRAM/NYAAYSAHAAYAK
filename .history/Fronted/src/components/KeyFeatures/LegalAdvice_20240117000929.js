const LegalAdvice = () => {
   
    // LegalAdvicePage.js

// import React from 'react';
// import LegalAdviceCard from './LegalAdviceCard';

// const LegalAdvicePage = () => {
  // Dummy data for illustration purposes
  const legalAdviceData = [
    {
      title: 'Know Your Rights',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'January 17, 2024',
    },
    // Add more legal advice data as needed
  ];

  return (
    <div>
      <h1>Legal Advice</h1>
      {legalAdviceData.map((advice, index) => (
        <LegalAdviceCard key={index} {...advice} />
      ))}
    </div>
  );
};

export default LegalAdvicePage;

// }

export default LegalAdvice;