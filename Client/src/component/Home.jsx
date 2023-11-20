import React from "react";
import Navbar from "./Navbar";
import Product from "./Products";

export default function Home() {
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
            <h4>HURRY !</h4>
            <h5 className="card-title display-4 fw-bolder mb-0 ">these prices won't last!</h5>
            <p className="card-text lead fs-2">
              On all products
            </p>
            <button style={{
                backgroundImage: 'url("assets/button.png")',
                backgroundColor: 'transparent',
                color: '#088178',
                border: '0',
                padding: '14px 80px 14px 65px',
                backgroundRepeat: 'no-repeat',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '15px'
            }}>Shop Now</button>

          </div>
        </div>
      </div>
    </div>
  );
}
