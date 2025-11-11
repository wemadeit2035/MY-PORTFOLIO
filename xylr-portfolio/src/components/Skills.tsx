const Skills = () => {
  const skills = [
    {
      icon: "fab fa-js-square",
      name: "JavaScript",
      description: "Core Language",
    },
    {
      icon: "fab fa-node-js",
      name: "Node.js",
      description: "Runtime Environment",
    },
    {
      icon: "fas fa-server",
      name: "Express.js",
      description: "Web Framework",
    },
    {
      icon: "fas fa-database",
      name: "MongoDB",
      description: "Database Solutions",
    },
    {
      icon: "fab fa-html5",
      name: "HTML5",
      description: "Markup & Structure",
    },
    {
      icon: "fab fa-css3-alt",
      name: "CSS3",
      description: "Styling & Design",
    },
    {
      icon: "fab fa-react",
      name: "React",
      description: "Frontend Development",
    },
    {
      icon: "fas fa-code",
      name: "VS Code",
      description: "Development Environment",
    },
  ];

  return (
    <section>
      <h2 className="text-4xl mt-12 font-bold text-center bg-black/50 backdrop-blur-lg py-6 text-white w-full">
        Expertise
      </h2>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-white/10 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:border-accent/50"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-blue-500/30 transition-all duration-300">
                <i
                  className={`${skill.icon} text-6xl text-accent group-hover:text-white group-hover:scale-110 transition-all duration-300`}
                ></i>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {skill.name}
              </h3>

              {/* Skill Description */}
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/30 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technical Proficiencies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl text-blue-400">💻</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Frontend
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  React
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  HTML5
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  CSS3
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  Tailwind
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  JavaScript
                </span>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl text-green-400">⚙️</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-4">Backend</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">
                  Node.js
                </span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">
                  Express.js
                </span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">
                  MongoDB
                </span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">
                  API Development
                </span>
              </div>
            </div>

            {/* Tools & Others */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl text-purple-400">🛠️</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Tools & Others
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                  VS Code
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                  Git
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                  Webpack
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                  REST APIs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 backdrop-blur-lg border border-accent/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Bring Your Ideas to Life?
            </h3>
            <p className="text-gray-300 mb-6">
              With a strong foundation in modern web technologies, I'm equipped
              to handle both frontend and backend challenges.
            </p>
            <button className="bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-[#1fe000] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
