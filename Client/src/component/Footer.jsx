import React from 'react';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    marginBottom: '30px',
  };

  const followStyle = {
    marginTop: '20px',
  };

  const iconStyle = {
    color: '#465b52',
    paddingRight: '4px',
    cursor: 'pointer',
  };

  const headingStyle = {
    fontSize: '14px',
    paddingBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '13px',
    margin: '0 0 8px 0',
  };

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px',
  };

  const linkStyle = {
    fontSize: '13px',
    textDecoration: 'none',
    marginBottom: '10px',
    color: '#222',
  };

  const installStyle = {
    width: '100%',
    textAlign: 'center',
  };

  const imageStyle = {
    border: '1px solid #088178',
    borderRadius: '6px',
  };

  const copyrightStyle = {
    width: '100%',
    textAlign: 'center',
  };

  const hoverStyle = {
    color: '#088178',
  };

  return (
    <footer className="section-p1" style={footerStyle}>
      <div className="col" style={colStyle}>
        <img className="logo" src="img/Mylogo.png" alt="" width="160" style={logoStyle} />
        <h4>Contact</h4>
        <p><strong>Address: </strong>54 rue tansift App 1 agdal, Rabat</p>
        <p><strong>Phone:</strong> +212 690 21 10 20</p>
        <p><strong>Hours:</strong> 10:00 - 22:00, Mon - Sat</p>
        <div className="follow" style={followStyle}>
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f" style={iconStyle}></i>
            <i className="fab fa-twitter" style={iconStyle}></i>
            <i className="fab fa-instagram" style={iconStyle}></i>
            <i className="fab fa-pinterest-p" style={iconStyle}></i>
            <i className="fab fa-youtube" style={iconStyle}></i>
          </div>
        </div>
      </div>

      <div className="col" style={colStyle}>
        <h4>About</h4>
        <a href="#" style={linkStyle}>About Us</a>
        <a href="#" style={linkStyle}>Delivery Information</a>
        <a href="#" style={linkStyle}>Privacy Policy</a>
        <a href="#" style={linkStyle}>Terms & Conditions</a>
        <a href="#" style={linkStyle}>Contact Us</a>
      </div>

      <div className="col" style={colStyle}>
        <h4>My Account</h4>
        <a href="#" style={linkStyle}>Sign In</a>
        <a href="#" style={linkStyle}>View Cart</a>
        <a href="#" style={linkStyle}>My Wishlist</a>
        <a href="#" style={linkStyle}>Track My Order</a>
        <a href="#" style={linkStyle}>Help</a>
      </div>

      <div className="col install" style={installStyle}>
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src="img/pay/app.jpg" alt="" style={imageStyle} />
          <img src="img/pay/play.jpg" alt="" style={imageStyle} />
        </div>
        <p>Secured Payment Gateways </p>
        <img src="img/pay/pay.png" alt="" style={imageStyle} />
      </div>

      <div className="copyright" style={copyrightStyle}>
        <p>YANCONNECT © 2022 Tous les droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
