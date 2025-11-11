const Footer = () => {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-lg border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a
            title="github"
            href="https://github.com/tripsound"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 p-4 rounded-full border border-white/20 hover:border-accent/50 hover:bg-accent/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <i className="fab fa-github text-2xl text-white group-hover:text-accent transition-colors duration-300"></i>
          </a>
          <a
            title="linkedin"
            href="https://www.linkedin.com/in/amos-wetu-8b114825a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 p-4 rounded-full border border-white/20 hover:border-accent/50 hover:bg-accent/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <i className="fab fa-linkedin text-2xl text-white group-hover:text-accent transition-colors duration-300"></i>
          </a>
          <a
            title="twitter"
            href="#"
            className="group bg-white/10 p-4 rounded-full border border-white/20 hover:border-accent/50 hover:bg-accent/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <i className="fab fa-twitter text-2xl text-white group-hover:text-accent transition-colors duration-300"></i>
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-center">
          <p className="text-gray-300 font-medium">
            &copy; {new Date().getFullYear()} XYLR Technologies.
          </p>

          {/* Additional Info */}
          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
            <span>Built using React & Tailwind CSS</span>
          </div>

          {/* Contact Email */}
          <div className="mt-4">
            <a
              href="mailto:amoswetu22@gmail.com"
              className="text-accent hover:text-white transition-colors duration-300 font-medium"
            >
              amoswetu22@gmail.com
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center space-x-2 bg-accent text-primary font-semibold py-2 px-6 rounded-full hover:bg-[#1fe000] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>↑</span>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
