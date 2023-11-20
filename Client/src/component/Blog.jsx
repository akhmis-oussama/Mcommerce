import React from 'react';

const Blog = () => {
  return (
    <div>

      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products! </p>
      </section>

      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/R.png" alt="" />
          </div>
          <div className="blog-details">
            <h4>Notre service</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard…</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/B.png" alt="" />
          </div>
          <div className="blog-details">
            <h4>Pourquoi nos produit?</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard…</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/04</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/shutterstock.jpeg" alt="" />
          </div>
          <div className="blog-details">
            <h4>Pourquoi nous choisir?</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard…</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>12/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/us.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>Projets réalisés</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard…</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>16/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="img/blog/R (2).jpeg" alt="" />
          </div>
          <div className="blog-details">
            <h4>Rejoignez-nous</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard…</p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>10/03</h1>
        </div>
      </section>

      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i className="fal fa-long-arrow-alt-right"></i></a>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img className="logo" src="img/Mylogo.png" alt="" width="120" />
          <h4>Contact</h4>
          <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
          <p><strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
          <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="img/pay/app.jpg" alt="" />
            <img src="img/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="img/pay/pay.png" alt="" />
        </div>
        <div className="copyright">
          <p>YANCONNECT © 2022 Tous les droits réservés</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
