import React from 'react';

const Contact = () => {
  return (
    <div>
      <section id="header">
        <a href="#"><img src="img/Mylogo.png" className="logo" alt="" width="120" /></a>
        <div>
          <ul id="navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="about.html">About</a></li>
            <li><a className="active" href="contact.html">Contact</a></li>
            <li id="lg-bag"><a href="cart.html"><i className="far fa-shopping-bag"></i></a></li>
            <a id="close" href="#"><i className="far fa-times"></i></a>
          </ul>
        </div>
        <div id="mobile">
          <a href="cart.html"><i className="far fa-shopping-bag"></i></a>
          <i id="bar" className="fas fa-outdent"></i>
        </div>
      </section>

      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <ul>
              <li>
                <i className="fal fa-map"></i>
                <p>54 rue tansift App 1 agdal, Rabat</p>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <p>contact@yanconnect.com </p>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <p>+212 690 21 10 20 </p>
              </li>
              <li>
                <i className="far fa-clock"></i>
                <p>Monday to Saturday: 9.00am to 16.pm </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="map">
          <iframe src="https://www.google.com/maps/place/54+Rue+Tansift,Rabat+10000/@34.0006893,-6.8495914,17z/data=!3m1!4b1!4m5!3m4!1s0xda76c8f3eced873:0x78b728f2c704eec9!8m2!3d34.0006893!4d-6.8474027"
            width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" name="" id="" placeholder="Your Name" />
          <input type="text" name="" id="" placeholder="E-mail" />
          <input type="text" name="" id="" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src="img/people/1.png" alt="" />
            <p><span>John Doe </span> Senior Marketing Manager <br /> Phone: +212 123 000 77 88 <br /> Email: contact@example.com</p>
          </div>
          <div>
            <img src="img/people/2.png" alt="" />
            <p><span>William Smith</span> Senior Marketing Manager <br /> Phone: + 212 123 000 77 88 <br /> Email: contact@example.com</p>
          </div>
          <div>
            <img src="img/people/3.png" alt="" />
            <p><span>Emma Stone</span> Senior Marketing Manager <br /> Phone: + 212 123 000 77 88 <br /> Email: contact@example.com</p>
          </div>
        </div>
      </section>

      <section id="newsletter" className="section-m1 section-p1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
          <input type="text" name="" placeholder="Your email address" id="" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img className="logo" src="img/Mylogo.png" alt="" width="120" />
          <h4>Contact</h4>
          <p><strong>Address:</strong> 54 rue tansift App 1 agdal, Rabat</p>
          <p><strong>Phone:</strong> +212 690 21 10 20</p>
          <p><strong>Hours:</strong> 10:00 - 22:00, Mon - Sat</p>
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

export default Contact;
