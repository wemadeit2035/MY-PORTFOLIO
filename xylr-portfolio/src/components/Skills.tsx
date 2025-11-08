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
    <section id="skills">
      <br />
      <br />
      <h2 className="section-title">Expertise</h2>
      <br />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <i className={`${skill.icon} skill-icon`}></i>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
