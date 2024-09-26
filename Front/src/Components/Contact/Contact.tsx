import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Just say Hello!</h2>
        <p>Let us know more about you!</p>
        <form>
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Mail" />
            <input type="text" placeholder="Phone" />
          </div>
          <textarea placeholder="Message"></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>77 Baker Street<br />Bondowoso, 87655<br />Indonesia</p>
        <p>Call Us: +62 81 334 61 00</p>
        <p>We are open from Monday - Friday<br />08:00 am - 05:00 pm</p>
        <div className="social-media">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">facebook</a></li>
            <li><a href="#">instagram</a></li>
            <li><a href="#">vimeo</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
