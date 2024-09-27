import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div id='Contact' className="contact-container">
      <div className="form-section">
        <h2>Just say Hello!</h2>
        <p>Let us know more about you!</p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Mail" required />
            <input type="tel" placeholder="Phone" required />
          </div>
          <textarea placeholder="Message" rows={5} required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>77 Baker Street</p>
        <p>Bondowoso, 87655</p>
        <p>Indonesia</p>
        <p>Call Us: +62 81 334 61 00</p>
        <p>We are open from Monday - Friday</p>
        <p>08.00 am - 05.00 pm</p>
        <div className="social-media">
          <p>Follow Us</p>
          <p>facebook instagram vimeo</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;