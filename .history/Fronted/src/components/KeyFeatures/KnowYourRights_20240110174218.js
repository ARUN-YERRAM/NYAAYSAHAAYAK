// Import necessary React modules and styles
import React from 'react';

// import './App.css'; 
import './KnowYourRights.css';


const KnowYourRightsCard = ({ title, description }) => (
  <div className="know-your-rights-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);


const LanguageSwitcher = ({ languages, onSelectLanguage }) => (
  <div className="language-switcher">
    <label>Select Language:</label>
    <select onChange={(e) => onSelectLanguage(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  </div>
);

const LegalAidLocator = () => (
  <div className="legal-aid-locator">
    {/* Placeholder for legal aid locator */}
    <h3>Legal Aid Locator</h3>
    <p>Find legal aid services near you.</p>
    {/* Include map or search functionality here */}
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


//   return (
//     <div className="know-your-rights-container">
//       <h2 className="know-your-rights-heading">Know Your Rights</h2>
//       <div className="know-your-rights-cards">
//         {rightsData.map((item, index) => (
//           <KnowYourRightsCard key={index} title={item.title} description={item.description} />
//         ))}
//       </div>
//     </div>
//   );
// };


return (
  <div className="know-your-rights-container">
    <h2 className="know-your-rights-heading">Know Your Rights</h2>
    <LanguageSwitcher languages={languages} onSelectLanguage={setSelectedLanguage} />
    <div className="know-your-rights-cards">
      {rightsData.map((item, index) => (
        <KnowYourRightsCard key={index} title={item.title} description={item.description} />
      ))}
    </div>
    <div className="additional-features">
      <LegalAidLocator />
      {/* Add more features as needed */}
    </div>
  </div>
);
};
// return (
//   <div className="know-your-rights-container">
//     <div>
//     <h2 className="know-your-rights-heading">Know Your Rights</h2>
//     </div>
//     <div className="know-your-rights-cards">
//       {rightsData.map((item, index) => (
//         <KnowYourRightsCard key={index} title={item.title} description={item.description} />
//       ))}
//     </div>
//     <div className="additional-features">
//       {/* Add additional features and enhancements here */}
//       {/* For example: */}
//       {/* Interactive visualizations, language switcher, legal aid locator, etc. */}
//     </div>
//   </div>
// );
// };





//   return (
//     <div className="know-your-rights-container">
//       <h2>Know Your Rights</h2>
//       <div className="know-your-rights-cards">
//         {rightsData.map((item, index) => (
//           <KnowYourRightsCard key={index} title={item.title} description={item.description} />
//         ))}
//       </div>
//     </div>
//   );
// };

export default KnowYourRights;
