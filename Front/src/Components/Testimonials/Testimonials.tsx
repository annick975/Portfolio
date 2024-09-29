import React from "react";
import "./Testimonials.css";
import Celestin from "../../assets/Celestin.jpeg";
import JD from "../../assets/JD.jpeg"
import Njeri from "../../assets/Kenyan.jpeg"
interface Testimonial {
  name: string;
  company: string;
  image: string;
  testimonial: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Celestin NZEYIMANA",
    company: "Cybersecurity instructor at Rwanda Coding Academy",
    image: Celestin,
    testimonial:"Annick has shown a strong understanding of cybersecurity concepts and effectively applies them to real-world situations. She excels in problem-solving and teamwork, demonstrating professionalism that sets a positive example for her peers. I am confident she will continue to thrive in her cybersecurity career."
  },
  {
    name: "JD TUYISHIME",
    company: "Backend Developer at PivotAccess Ltd.",
    image:JD,
    testimonial:
    "Working with Annick was a fantastic experience. She is an excellent collaborator who brings positive energy and innovative ideas. Her problem-solving skills were invaluable during challenges, and her clear communication kept our team on track. Annick's dedication and technical expertise significantly contributed to the project's success. I look forward to collaborating with her again."
  },
  {
    name: "Mary NJERI ACHIENG",
    company: "Frontend developer at M-Kopa_Kenya",
    image: Njeri, 
    testimonial:
     "I had the pleasure of working with Annick on a full-stack application, and the results were very impressive! She thoroughly understood our needs and delivered a high-quality product that exceeded our expectations. Annick communicated excellently, always responsive and clear about the project's progress. Her professionalism and ability to meet deadlines make her a highly recommended developer!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div id="Testimonials" className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <h3 className="sub-title">
      Want to know how working with me feels?</h3>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h4 className="testimonial-name">
              {testimonial.name}  <br /><span>-"{testimonial.company}"-</span>
            </h4>
            <p className="testimonial-text">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
