// Import necessary React modules and styles
import React from 'react';
// import './KnowYourRights.css';
import './App.css'; // Import your CSS file for styling

// KnowYourRightsCard component to represent each card
const KnowYourRightsCard = ({ title, description }) => (
  <div className="know-your-rights-card">
    <h3>{Know Your Rights}</h3>
    <p>{}</p>
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






const KnowYourRightsCard = ({ title, description }) => (
  <div className="know-your-rights-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const KnowYourRights = () => {
  const rightsData = [
    {
      title: 'What are my rights as a citizen?',
      description: 'Understand your fundamental rights as a citizen of India, including freedom of speech, right to equality, and more.',
    },
    {
      title: 'How can I file a complaint?',
      description: 'Learn the step-by-step process for filing a complaint against legal violations or injustices you may encounter.',
    },
    {
      title: 'How can I access legal aid services?',
      description: 'Explore available options for accessing legal aid services in your region to ensure affordable and fair representation.',
    },
    {
      title: 'How can I obtain legal documents?',
      description: 'Get guidance on obtaining essential legal documents such as birth certificates, identity proofs, and other relevant paperwork.',
    },
    {
      title: 'Legal implications of a particular action',
      description: 'Discover the potential legal consequences associated with specific actions and behaviors to stay informed and make informed choices.',
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
