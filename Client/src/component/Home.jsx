import React, { useState } from "react";
import Navbar from "./Navbar";
import Product from "./Products";

export default function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleSignInClick = () => {
    setShowLoginForm(true);
  };

  const handleBackClick = () => {
    setShowLoginForm(false);
  };

  const renderContent = () => {
    if (showLoginForm) {
      return (
        <div className="login-form">
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ color: '#000', fontSize: '32px', marginBottom: '15px' }}>
              Be a customer
              <span style={{ color: '#088178' }}> of DigiWardrobe</span>
            </h2>          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px' }}>Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              style={{
                width: '35%', // Adjusted width
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
            />
          </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px' }}>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: '35%', // Adjusted width
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <button
              onClick={handleBackClick}
              style={{
                backgroundColor: '#088178',
                color: '#fff',
                border: '0',
                padding: '12px 20px',
                fontSize: '16px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: '700',
                marginRight: '10px', // Added margin between buttons
              }}
            >
              Back
            </button>
            <button
              onClick={handleSignInClick}
              style={{
                backgroundColor: '#088178',
                color: '#fff',
                border: '0',
                padding: '12px 20px',
                fontSize: '16px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: '700',
              }}
            >
              Sign In
            </button>
          </div>
        </div>
        
      );
    } else {
      return (
        <div>
          <h4>HURRY !</h4>
          <h5 className="card-title display-4 fw-bolder mb-0 ">these prices won't last!</h5>
          <p className="card-text lead fs-2">
            On all products
          </p>
          <button
            style={{
              backgroundImage: 'url("assets/button.png")',
              backgroundColor: 'transparent',
              color: '#088178',
              border: '0',
              padding: '14px 80px 14px 65px',
              backgroundRepeat: 'no-repeat',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '15px'
            }}
          >
            Shop Now
          </button>
          <button
            onClick={handleSignInClick}
            style={{
              backgroundImage: 'url("assets/button.png")',
              backgroundColor: 'transparent',
              color: '#088178',
              border: '0',
              padding: '14px 80px 14px 65px',
              backgroundRepeat: 'no-repeat',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '15px'
            }}
          >
            Sign in
          </button>
          <button
            style={{
              backgroundImage: 'url("assets/button.png")',
              backgroundColor: 'transparent',
              color: '#088178',
              border: '0',
              padding: '14px 80px 14px 65px',
              backgroundRepeat: 'no-repeat',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '15px'
            }}
          >
            Sign up
          </button>
        </div>
      );
    }
  };

  return (
    <div className="hero">
      <style>{`
        .navbar {
          margin-bottom: 0; /* Remove any default margin */
        }
      `}</style>
      <div className="card text-bg-dark text-black border-0">
        <img src="/assets/Home.png" class="card-img" alt="Background" height="790" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
