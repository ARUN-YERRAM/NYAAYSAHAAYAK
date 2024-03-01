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

// Styled components for better readability and maintainability
const Wrapper = styled.div`
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
`;

const Header = styled.header`
    background-color: #333;
    color: #fff;
    padding: 1em;
    text-align: center;
`;

const Nav = styled.nav`
    background-color: #444;
    padding: 10px;
    text-align: center;
`;

const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
`;

const Section = styled.section`
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const Title = styled.h2`
    color: #333;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #eee;
    }
`;

const StyledLink = styled.a`
    color: #333;
    text-decoration: none;
    font-weight: bold;
`;

const Footer = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 1em;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

// Define the KnowYourRights component
const KnowYourRights = () => {
    return (
        <Wrapper>
            <Header>
                <h1>Know Your Rights</h1>
            </Header>

            <Nav>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Contact</NavLink>
            </Nav>

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
                    <ListItem><StyledLink href="#">Right to  </StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to </StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to </StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to </StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to </StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to </StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to </StyledLink></ListItem>
                    <ListItem><StyledLink href="#">Right to </StyledLink></ListItem>
                    
                    {/* Add more rights as needed */}
                </List>
            </Section>

            
        </Wrapper>
    );
};

export default KnowYourRights;
