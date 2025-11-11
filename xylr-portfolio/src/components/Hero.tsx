import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-purple-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mt-20 mx-auto px-4 w-full text-center">
        <div className="space-y-8">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-white font-medium text-sm">
              Certified Full-Stack Developer
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Digital{" "}
              <span className="bg-gradient-to-r from-accent via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              <br />
              to grow your brand
            </h1>

            {/* Services in finer print */}
            <div className="text-lg md:text-xl text-gray-300 font-medium">
              Web Applications • Digital Experiences • Scalable Solutions •
              Modern Technologies & Interfaces
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <Link
              to="/contact"
              className="group relative bg-gradient-to-r from-accent to-green-500 text-primary font-bold py-4 px-8 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center gap-3">
                <i className="fas fa-paper-plane group-hover:scale-110 transition-transform duration-300"></i>
                Start Your Project
              </div>
            </Link>

            <Link
              to="/projects"
              className="group border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:border-accent hover:bg-accent/10 transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              <div className="flex items-center gap-3">
                <i className="fas fa-eye group-hover:scale-110 transition-transform duration-300"></i>
                View My Work
              </div>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                50+
              </div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                100%
              </div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                24/7
              </div>
              <div className="text-gray-300 text-sm">Dedicated Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                2+
              </div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Accent Shapes */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
