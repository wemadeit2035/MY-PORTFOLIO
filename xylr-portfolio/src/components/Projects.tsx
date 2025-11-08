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
    <section className="projects" id="projects">
      <br />
      <br />
      <h2 className="section-title">Featured Projects</h2>
      <br />
      <br />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url('${project.image}')` }}
            ></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
