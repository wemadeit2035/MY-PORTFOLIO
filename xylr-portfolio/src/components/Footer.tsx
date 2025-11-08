const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a
          title="github"
          href="https://github.com/tripsound"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          title="linkedin"
          href="https://www.linkedin.com/in/amos-wetu-8b114825a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a title="twitter" href="#">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} XYLR Technologies. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
