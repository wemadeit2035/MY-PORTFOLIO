const Contact = () => {
  return (
    <section>
      <h2 className="text-4xl mt-10 font-bold text-center bg-black/50 backdrop-blur-lg py-6 text-white w-full">
        Get In Touch
      </h2>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <form
            className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl"
            id="contactForm"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="18b30564-8475-4d84-aea8-4beba8411a7c"
            />

            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-4 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-4 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Project Details"
                required
                className="w-full px-4 py-4 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-vertical min-h-[150px]"
              ></textarea>

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <button
                type="submit"
                className="w-full bg-accent text-primary font-bold py-4 px-8 rounded-full hover:bg-[#1fe000] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
              >
                <span>🚀</span>
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8">
              Let's Build Something Amazing
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent text-xl">📍</span>
                </div>
                <div>
                  <p className="text-white text-lg font-semibold">
                    Johannesburg, GP
                  </p>
                  <p className="text-gray-300">South Africa</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent text-xl">📞</span>
                </div>
                <div>
                  <p className="text-white text-lg font-semibold">
                    (+27) 744 610 850
                  </p>
                  <p className="text-gray-300">Available 9AM - 6PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent text-xl">📧</span>
                </div>
                <div>
                  <p className="text-white text-lg font-semibold">
                    amoswetu22@gmail.com
                  </p>
                  <p className="text-gray-300">I'll reply within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-blue-500/10 rounded-lg border border-accent/20">
              <h4 className="text-lg font-semibold text-white mb-2">
                Why Work With Me?
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-accent">✓</span>
                  <span>Fast response time</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent">✓</span>
                  <span>Clean, maintainable code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent">✓</span>
                  <span>Modern tech stack</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent">✓</span>
                  <span>Ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
