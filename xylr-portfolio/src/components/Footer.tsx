const Footer = () => {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-lg border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          {[
            { icon: "github", href: "https://github.com/tripsound" },
            {
              icon: "linkedin",
              href: "https://www.linkedin.com/in/amos-wetu-8b114825a/",
            },
            { icon: "twitter", href: "#" },
          ].map((social) => (
            <a
              key={social.icon}
              title={social.icon}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 p-3 rounded-full border border-white/20 hover:border-accent/50 hover:bg-accent/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <i
                className={`fab fa-${social.icon} text-xl text-white group-hover:text-accent transition-colors duration-300`}
              ></i>
            </a>
          ))}
        </div>

        {/* Copyright and Info */}
        <div className="text-center space-y-3">
          <p className="text-gray-300 font-medium text-sm">
            &copy; {new Date().getFullYear()} XYLR Technologies
          </p>

          <div className="text-gray-400 text-xs">
            Built using React & Tailwind CSS
          </div>

          {/* Contact Email */}
          <div>
            <a
              href="mailto:amoswetu22@gmail.com"
              className="text-accent hover:text-white transition-colors duration-300 font-medium text-sm"
            >
              amoswetu22@gmail.com
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center space-x-2 bg-accent text-primary font-semibold py-2 px-4 rounded-full hover:bg-[#1fe000] transform hover:-translate-y-1 transition-all duration-300 text-sm"
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
