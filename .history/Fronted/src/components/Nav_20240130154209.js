import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('user');
  };

  return (
    <>
      <div>
        <header>
          <h1 className="pad">NYAAY SAHAAYAK</h1>
        </header>
        <nav className="navbar navbar-expand-sm navbar" style={{ backgroundColor: 'grey' }}>
          <button className="navbar-toggler" type="button" onClick={handleToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0 ul list">
              <li className="nav-item col">
                <Link className="nav-link col" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link col" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link col" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link col" to="/FAQ">FAQS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link col" to="/ChatBot">LEGAL ASSISTANT</Link>
              </li>
              {sessionStorage.getItem("user") ? (
                <li className="nav-item link">
                  {/* <button className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> */}
                  {/* </button> */}
                </li>
              ) : (
                <li className="nav-item link">
                  <Link className="nav-link " to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          {sessionStorage.getItem("user") && (
            <button id="Log" onClick={handleLogout}>
              <Link to="/">Logout</Link>
            </button>
          )}
        </nav>
      </div>
    </>
  );
}

export default MyNav;
