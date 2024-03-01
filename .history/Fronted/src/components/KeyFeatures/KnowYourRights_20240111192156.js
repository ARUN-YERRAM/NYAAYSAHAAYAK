import React from 'react';
import './KnowYourRights.css';

const rightsData = [
  {
    title: 'Right to Equality',
    description: 'Every citizen has the right to equality before the law and equal protection of the laws.'
  },
  {
    title: 'Right to Freedom',
    description: 'Citizens have the right to freedom of speech, expression, assembly, association, movement, and religion.'
  },
  {
    title: 'Right Against Exploitation',
    description: 'Prohibits exploitation, forced labor, trafficking, and other forms of abuse.'
  },
  {
    title: 'Right to Freedom of Religion',
    description: 'Guarantees freedom of conscience and the right to practice and propagate any religion.'
  },

  {
    
  }
  // Add more rights as needed, ensuring accuracy based on local laws
];

const KnowYourRights = () => {
  return (
    <div className="know-your-rights-container">

      <h1 className="title">Know Your Rights</h1>
      <ul className="rights-list">
        {rightsData.map((right, index) => (
          <li key={index} className="right-item">
            <h2 className="right-title">{right.title}</h2>
            <p className="right-description">{right.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KnowYourRights;

