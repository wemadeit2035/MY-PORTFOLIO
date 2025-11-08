import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Welcome To My <span>Portfolio Website</span>
        </h1>
        <p>Freelance developer specializing in modern web design</p>
        <Link to="/contact" className="cta-button">
          <i className="fas fa-paper-plane"></i>
          Get In Touch
        </Link>
      </div>
    </section>
  );
};

export default Hero;
