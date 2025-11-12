import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-purple-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Main Content */}
      <div className="relative mt-20 z-10 w-full max-w-4xl mx-auto text-center">
        <div className="space-y-6 py-8">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-white font-medium text-sm">
              Certified Full-Stack Developer
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Digital{" "}
              <span className="bg-gradient-to-r from-accent via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              <br />
              to grow your brand
            </h1>

            {/* Services */}
            <div className="text-base sm:text-lg text-gray-300 font-medium px-2">
              Web Applications • Digital Experiences • Scalable Solutions •
              Modern Technologies
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto group relative bg-gradient-to-r from-accent to-green-500 text-primary font-bold py-3 px-6 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center justify-center gap-2">
                <i className="fas fa-paper-plane group-hover:scale-110 transition-transform duration-300"></i>
                Start Your Project
              </div>
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto group border-2 border-white/30 text-white font-bold py-3 px-6 rounded-xl hover:border-accent hover:bg-accent/10 transform hover:-translate-y-1 transition-all duration-300 text-base"
            >
              <div className="flex items-center justify-center gap-2">
                <i className="fas fa-eye group-hover:scale-110 transition-transform duration-300"></i>
                View My Work
              </div>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-8">
            <div className="text-center bg-white/5 rounded-lg p-4">
              <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
                50+
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">Projects</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-4">
              <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
                100%
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">
                Satisfaction
              </div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-4">
              <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
                24/7
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">Support</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-4">
              <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
                2+
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">Years Exp</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Accent Shapes - Reduced size for mobile */}
      <div className="absolute top-20 left-4 w-48 h-48 bg-accent/10 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-20 right-4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
    </section>
  );
};

export default Hero;
