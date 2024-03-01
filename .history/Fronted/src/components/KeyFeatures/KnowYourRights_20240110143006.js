// Import necessary React modules and styles
import React from 'react';
import './KnowYourRights.css'; // Import your CSS file for styling

// KnowYourRightsCard component to represent each card
const KnowYourRightsCard = ({ title, description }) => (
  <div className="know-your-rights-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Main KnowYourRights component
const KnowYourRights = () => {
  // Sample data for the cards
  const rightsData = [
    {
      title: 'What are my rights as a citizen?',
      description: 'Learn about your fundamental rights as a citizen of India.',
    },
    {
      title: 'How can I file a complaint?',
      description: 'Understand the process of filing a complaint for legal violations.',
    },
    {
      title: 'How can I access legal aid services?',
      description: 'Explore avenues for accessing legal aid services in your region.',
    },
    {
      title: 'How can I obtain legal documents?',
      description: 'Guidance on obtaining essential legal documents when needed.',
    },
    {
      title: 'Legal implications of a particular action',
      description: 'Learn about potential legal consequences of specific actions.',
    },
  ];

  return (
    <div className="know-your-rights-container">
      <h2>Know Your Rights</h2>
      <div className="know-your-rights-cards">
        {rightsData.map((item, index) => (
          <KnowYourRightsCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default KnowYourRights;
