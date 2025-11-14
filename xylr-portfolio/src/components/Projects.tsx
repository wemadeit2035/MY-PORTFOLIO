const Projects = () => {
  const projects = [
    {
      title: "Virtual Store",
      link: "https://mystore-drab.vercel.app",
      image: "/images/mystore.jpeg",
      tags: ["VITE", "MERN", "JAVASCRIPT"],
      description:
        "Online store with user authentication, admin panel, and much more",
    },
    {
      title: "Travel Guide 0.2",
      link: "https://travel911.netlify.app",
      image: "/images/travel911.jpeg",
      tags: ["VITE", "TAILWIND CSS", "TYPESCRIPT"],
      description:
        "Discover countries with travel information, currency conversion, flight details, weather forecasts and more",
    },
    {
      title: "Visual Dictionary",
      link: "https://depicted.netlify.app/",
      image: "/images/depicted.webp",
      tags: ["VITE", "REACT", "TYPESCRIPT"],
      description: "Type any word and get the meaning along with images",
    },
    {
      title: "Text To Binary",
      link: "https://textbinary.netlify.app/",
      image: "/images/textbinary.webp",
      tags: ["VITE", "REACT", "TYPESCRIPT"],
      description: "Transform any text to binary code (1s & 0s)",
    },
    {
      title: "World Clock",
      link: "https://glok.netlify.app/",
      image: "/images/glok.webp",
      tags: ["VITE", "REACT", "TYPESCRIPT"],
      description: "Display the current time of all major timezones",
    },
    {
      title: "Personal Trainer Portfolio",
      link: "https://prymefit.netlify.app/",
      image: "/images/primefitimage.webp",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      description:
        "Customizable portfolio website template with professional presentation",
    },
    {
      title: "Resume Builder",
      link: "https://resunate.netlify.app/",
      image: "/images/resunate.webp",
      tags: ["VITE", "REACT", "TYPESCRIPT"],
      description: "Create a presentable cv/resume and export as PDF file",
    },
    {
      title: "Currency Converter",
      link: "https://currencon.netlify.app/",
      image: "/images/curronimg.webp",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      description:
        "Simple and straight forward currency converter with integrated API",
    },
    {
      title: "Currency Converter 2.0",
      link: "https://curron.netlify.app/",
      image: "/images/converter.webp",
      tags: ["NEXT", "TAILWIND", "REACT"],
      description:
        "Simple and straight forward currency converter with integrated API",
    },
    {
      title: "Dog Breed Explorer",
      link: "https://breedfinder.netlify.app/",
      image: "/images/dogbreedexpapp.webp",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      description:
        "Search/select a dog breed and get images and information about that breed",
    },
    {
      title: "StopWatch",
      link: "https://stoptyme.netlify.app/",
      image: "/images/stopimg.webp",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      description: "Simple, customizable and easy to user stopwatch",
    },
    {
      title: "Color Harmonizer Tool",
      link: "https://harmonizer.netlify.app/",
      image: "/images/colorizerimg.webp",
      tags: ["REACT", "VITE", "TYPESCRIPT"],
      description:
        "This tool is for designers who seek to use colors that complement each other perfectly",
    },
    {
      title: "Digital Clock",
      link: "https://kloch.netlify.app/",
      image: "/images/DigiClockimg.webp",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      description:
        "Simple but fully functional digital clock with the date and time zone",
    },
    {
      title: "Cafe Website",
      link: "https://inhouze.netlify.app/",
      image: "/images/inhouseimg.webp",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      description:
        "Minimalistic cafe website template focused on usability and readability",
    },
    {
      title: "Scientific Calculator",
      link: "https://sciculator.netlify.app/",
      image: "/images/calimg.webp",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      description: "Scientific Calculator with many advanced features",
    },
    {
      title: "Travel Guide",
      link: "https://got2go.netlify.app/",
      image: "/images/got2go.webp",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      description:
        "A prototype travel guide with global country data, currency converter, weather, news and other API",
    },
    {
      title: "Rental Statement (Document)",
      link: "https://codecu.netlify.app/",
      image: "/images/statement.webp",
      tags: ["HTML", "CSS"],
      description:
        "A simple rental statement created with HTML and CSS, demonstrating the versatility of code",
    },
    {
      title: "CV/Resume Website",
      link: "https://webpagecv.netlify.app/",
      image: "/images/cvappimg.webp",
      tags: ["VITE", "REACT", "TYPESCRIPT"],
      description:
        "CV website template to showcase skills, experience, and achievements effectively",
    },
    {
      title: "E-com Website (in progress)",
      link: "https://fashionfab.netlify.app/",
      image: "/images/ecom.webp",
      tags: ["VITE", "REACT", "TYPESCRIPT"],
      description:
        "E-commerce website with authentication, admin panel, dashboard and much more",
    },
  ];

  return (
    <section>
      <h2 className="text-4xl mt-16 sm:mt-20 font-bold text-center bg-black/50 backdrop-blur-lg py-6 text-white w-full">
        Featured Projects
      </h2>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group bg-black/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:border-accent/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Project Image */}
              <div
                className="h-48 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="bg-accent text-primary font-bold px-6 py-3 rounded-full text-lg">
                      View Project →
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 md:p-6 flex flex-col h-full">
                {/* Project Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white/10 text-yellow-400 px-2 py-1 rounded-full text-xs md:text-sm font-medium border border-white/20 group-hover:border-accent/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Description */}
                <div className="flex-grow">
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed text-sm md:text-base line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>
                </div>

                {/* View Project Link - Hidden on mobile, shown on hover desktop */}
                <div className="mt-2 md:mt-4 flex items-center text-accent font-semibold opacity-0 md:group-hover:opacity-100 transform translate-x-[-10px] md:group-hover:translate-x-0 transition-all duration-300 hidden md:flex">
                  <span>Explore Project</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-blue-500/10 backdrop-blur-lg border border-accent/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Like What You See?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always working on new projects and open to collaborations.
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-[#1fe000] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start a Project
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white font-bold py-3 px-8 rounded-full border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-accent mb-2">
              {projects.length}+
            </div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-accent mb-2">10+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-gray-300">Support Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
