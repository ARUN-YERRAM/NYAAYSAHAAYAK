import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './App.css';
import Apps from './App.js';
import { BrowserRouter as Router} from 'react-router-dom';
import { AppProvider} from "./"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter */}

    <Auth0Provider
    domain="dev-anjxycx48hcxk52z.us.auth0.com"
    clientId="0wvmTycep3Li1zfzpw7827nsxU1Vjt4d"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router>
      

    
    
      <Apps /> 
    {/* </BrowserRouter> */}
    </Router>
    </Auth0Provider>
    
  </React.StrictMode>
);

