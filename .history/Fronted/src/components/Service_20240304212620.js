import {Link, usey} from "react-router-dom"
import { MongoClient } from 'mongodb';
import React from 'react';


const Service = () => {
    const history = useHistory();

    // Connect to the MongoDB database
    const uri = "mongodb+srv://Arun:1234@cluster0.mmyigrp.mongodb.net/NYAAYSAHAAYAK?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Check if the user's _id exists in the feedbacks collection
    const checkUserId = async () => {
        await client.connect();
        const database = client.db("<NYAAYSAHAAYAK>");
        const feedbacks = database.collection("feedbacks");

        const user = await feedbacks.findOne({ _id: localStorage.getItem("_id") });

        if (!user) {
            // If the user's _id doesn't exist in the database, redirect the user to the signup page
            history.push("/signup");
        }

        await client.close();
    }

    useEffect(() => {
        checkUserId();
    }, []);

    return ( 
        <>
        
    <header>
        <div class="container">
            <h1>Legal Awareness Initiative</h1>
        </div>
    </header>
    

        
    <section id="services">
        <div class="container">

            {/* <h2>Our Services</h2> */}

            {/* if the user didn't login he should be navigated to signup page and then he should be navigated to login page provide code for navigation */}

            {!localStorage.getItem("token") && (
                <Link style={{textAlign:"left"}} to="/signup" class="cta-button">Login</Link>
            )}

            <h2>Our Services</h2>
            <div class="service-item">
                <h3>Legal Information</h3>
                <p>Access concise and user-friendly legal information on various topics including family law, property law, labor law, criminal law and other Laws.</p>
            </div>
    
            <div class="service-item">
                <h3>Know-Your-Rights Framework</h3>
                <p>Explore our comprehensive Know-Your-Rights framework, categorizing laws and regulations to educate citizens about their legal rights, entitlements, and remedies.</p>
            </div>
    
            <div class="service-item">
                <h3>Digital Assistant</h3>
                <p>Utilize our user-friendly digital assistant that can provide guidance in multiple languages, addressing common legal queries and providing information on accessing legal aid services.</p>
            </div>

        </div>
    </section>
</>
    );
}

export default Service;








// import {Link} from "react-router-dom"

// const Service = () => {
//     return ( 
//         <>
        
//     <header>
//         <div class="container">
//             <h1>Legal Awareness Initiative</h1>
//         </div>
//     </header>
    

        
//     <section id="services">
//         <div class="container">

//             {/* <h2>Our Services</h2> */}

//             {/* if the user didn't login he should be navigated to signup page and then he should be navigated to login page provide code for navigation */}





//             <Link style={{textAlign:"left"}} to="/signup" class="cta-button">Login</Link>

//             <h2>Our Services</h2>
//             <div class="service-item">
//                 <h3>Legal Information</h3>
//                 <p>Access concise and user-friendly legal information on various topics including family law, property law, labor law, criminal law and other Laws.</p>
//             </div>
    
//             <div class="service-item">
//                 <h3>Know-Your-Rights Framework</h3>
//                 <p>Explore our comprehensive Know-Your-Rights framework, categorizing laws and regulations to educate citizens about their legal rights, entitlements, and remedies.</p>
//             </div>
    
//             <div class="service-item">
//                 <h3>Digital Assistant</h3>
//                 <p>Utilize our user-friendly digital assistant that can provide guidance in multiple languages, addressing common legal queries and providing information on accessing legal aid services.</p>
//             </div>

//         </div>
//     </section>
        
//         </>
//     );
// }


// export default Service;









































// import { useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const Service = () => {
//     return ( 
//         <>
//             <header>
//                 <div className="container">
//                     <h1>Legal Awareness Initiative</h1>
//                 </div>
//             </header>
        
//             <section id="services">
//                 <div className="container">
        
//                     <h2>Our Services</h2>
            
//                     <div className="service-item">
//                         <h3>Legal Information</h3>
//                         <p>Access concise and user-friendly legal information on various topics including family law, property law, labor law, criminal law and other Laws.</p>
//                     </div>
            
//                     <div className="service-item">
//                         <h3>Know-Your-Rights Framework</h3>
//                         <p>Explore our comprehensive Know-Your-Rights framework, categorizing laws and regulations to educate citizens about their legal rights, entitlements, and remedies.</p>
//                     </div>
            
//                     <div className="service-item">
//                         <h3>Digital Assistant</h3>
//                         <p>Utilize our user-friendly digital assistant that can provide guidance in multiple languages, addressing common legal queries and providing information on accessing legal aid services.</p>
//                     </div>
        
//                 </div>
//             </section>
//         </>
//     );
// }

// const Signup = () => {
//     // Assume this component handles signup logic
//     return <h2>Signup Page</h2>;
// }

// const App = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial login status

//     // Function to toggle login status
//     const toggleLogin = () => {
//         setIsLoggedIn(!isLoggedIn);
//     }

//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/services">Services</Link>
//                         </li>
//                     </ul>
//                 </nav>

//                 <Route path="/services">
//                     {isLoggedIn ? <Service /> : <Signup />}
//                 </Route>
//                 <Route path="/" exact>
//                     <button onClick={toggleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
//                 </Route>
//             </div>
//         </Router>
//     );
// }

// export default App;
