import React from 'react';
import './Contact.css';
import { FaPhone, FaLocationDot, FaBusinessTime } from "react-icons/fa6";

const Contact: React.FC = () => {
  return (
    <div id='Contact' className="contact-container">
      <div className="form-section">
        <h2>Reach out!</h2>
        <p>Feel free to send me a message</p>
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
        <p><FaLocationDot className='fa' /> Kigali, Rwanda</p>
       <p> <FaPhone className='fa'/> +250 788 999 619</p>
        <p> <FaBusinessTime className='fa' /> Available anytime</p>
        
      </div>
    </div>
  );
};

export default Contact;