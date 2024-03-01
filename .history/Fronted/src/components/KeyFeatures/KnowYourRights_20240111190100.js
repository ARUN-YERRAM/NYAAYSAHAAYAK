// const KnowYourRights = () => {
//   return (
//     <>
    
//     <div>
//     <h1>Know Your Rights</h1>
//     <p>Explore our comprehensive Know-Your-Rights framework, categorizing laws and regulations to educate citizens about their legal rights, entitlements, and remedies.</p>
//     </div>


//     <section>
//         <h2>Fundamental Rights of a Citizen</h2>
//         <ul>
//             <li><a href="#">Freedom of Speech</a></li>
//             <li><a href="#">Right to Life</a></li>
//             <li><a href="#">Right to Liberty</a></li>
//             <li><a href="#">Right to Privacy</a></li>
//             <li><a href="#">Right to a Fair Trial</a></li>
//             <li><a href="#">Freedom of Religion</a></li>
//             <li><a href="#">Right to Vote</a></li>
//             <li><a href="#">Freedom of Assembly</a></li>
//             <li><a href="#">Right to Education</a></li>
//             <li><a href="#">Right to Work</a></li>
        
//         </ul>
//     </section>


//     </>

//   );

// }

// export default KnowYourRights;


// Import necessary libraries
import React from 'react';
import styled from 'styled-components';



// Define the KnowYourRights component
const KnowYourRights = () => {
    return (
        <Wrapper>
            <Header>
                <h1>Know Your Rights</h1>
            </Header>
            

            <Section>
                <Title>Fundamental Rights of a Citizen</Title>
                <List>
                    <ListItem><StyledLink href="#">Freedom of Speech</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Life</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Liberty</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Privacy</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to a Fair Trial</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Freedom of Religion</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Vote</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Freedom of Assembly</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Education</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Health</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Social Security</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Internet Access </StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Procreate</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Legal Aid</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Culture and Education</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Clean Environment</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Information</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Property</StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to Equality</StyledLink></ListItem>
                    
                    {/* Add more rights as needed */}
                </List>
            </Section>

            
        </Wrapper>
    );
};

export default KnowYourRights;
