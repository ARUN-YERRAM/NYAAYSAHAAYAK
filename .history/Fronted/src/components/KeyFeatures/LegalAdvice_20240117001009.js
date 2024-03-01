
import React from 'react';
import LegalAdviceCard from './LegalAdviceCard';

const LegalAdvice = () => {

// const LegalAdvicePage = () => {

  const legalAdviceData = [
    {
      title: 'Know Your Rights',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'January 17, 2024',
    },
  
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


export default LegalAdvice;