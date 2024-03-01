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
    title: 'Right to Life',
    description: 'Every person has the inherent right to life.'
  },

  {
    title:'Right to Liberty and Security',
    description:'Individuals have the right to freedom from arbitrary arrest, detention, and torture.'
  },

  {
    title: 'Right to a Fair Trial',
    description:'All individuals have the right to a fair and public hearing by an independent and impartial tribunal.'
  },
  {
    title: 'Right to Privacy',
    description:'Every person has the right to respect for their private life, family, and home.'
  },
  {
    title:'Freedom of Opinion and Expression',
    description:'Individuals have the right to freedom of opinion and expression, including the right to seek, receive, and impart information and ideas.'
  },
  {
    title:'Right to Educate',
    description:'Everyone has Access to education without discrimination.'
  },
  {
    title:'Right to Internet Privacy',
    description:' Protects individuals online activities from unwarranted surveillance and data collection, ensuring privacy in the digital realm.'
  },
  {
    title:'Right to Freedom of Association',
    description:'Protects the right to form and join associations, allowing individuals to freely associate for common purposes.'
  },
  {
    title:'Right to Freedom from Torture and Inhuman Treatment',
    description:'Protects individuals from cruel, inhuman, or degrading treatment or punishment, including torture.'
  },
  {
    title:'Right to Peaceful Protest',
    description:'Protects the right to express dissent and participate in peaceful demonstrations without fear of persecution.'
  },
  {
    title:'Right to Adequate Standard of Living',
    description:'Protects the right to a standard of living that includes food, clothing, housing, and medical care.'
  },
  {
    title:'Right to Access Public Information:',
    description:'Ensures citizens have access to government information, promoting transparency and accountability.'
  },
  {
    title:'Right to Social and Economic Rights',
    description:'Guarantees access to basic needs such as housing, healthcare, and education, promoting overall social and economic well-being'
  },
  {
    title:''
  }
  // {
  //   title:'',
  //   description:''
  // }






// Social and Economic Rights:

// Right to Education: Every person has the right to education. Primary education should be free and compulsory.
// Right to Work: Everyone has the right to work, to free choice of employment, to just and favourable conditions of work, and to protection against unemployment.
// Right to Adequate Standard of Living: All individuals have the right to an adequate standard of living for themselves and their families, including food, clothing, housing, and healthcare.
// Right to Social Security: Everyone has the right to social security in the event of unemployment, sickness, disability, widowhood, or old age.
// Right to Rest and Leisure: All workers have the right to rest and leisure, including reasonable limitations of working hours and periodic holidays with pay.


// Environmental Rights:

// Right to a Clean and Healthy Environment: Every person has the right to live in a clean and healthy environment.
// Right to Access to Environmental Information: Individuals have the right to access environmental information and to participate in environmental decision-making.
// Right to Sustainable Development: All generations have the right to sustainable development.
// Digital Rights:

// Right to Access Information: Everyone has the right to seek, receive, and impart information through any media regardless of frontiers.
// Right to Freedom of Expression Online: Individuals have the right to express themselves freely online without fear of censorship or retaliation.
// Right to Data Privacy: All individuals have the right to control their personal data and to be protected from unlawful interception and surveillance.
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

