import React from "react";
import "./Testimonials.css";

interface Testimonial {
  name: string;
  company: string;
  image: string;
  testimonial: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Joe Biden",
    company: "Microsoft",
    image: "https://via.placeholder.com/80", // Replace with the actual image path
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    name: "Sarah NL",
    company: "Samsung",
    image: "https://via.placeholder.com/80", // Replace with the actual image path
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    name: "Nancy Byers",
    company: "Apple",
    image: "https://via.placeholder.com/80", // Replace with the actual image path
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div id="Testimonials" className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <h3 className="sub-title">What They Say</h3>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h4 className="testimonial-name">
              {testimonial.name}, <span>{testimonial.company}</span>
            </h4>
            <p className="testimonial-text">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;