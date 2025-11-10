import { useState, useEffect } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const downloadCV = () => {
    // Direct download link to your PDF file
    const link = document.createElement("a");
    link.href = "/documents/Amos Wetu Musafiri - Full Stack Web Developer.pdf"; // Path to your PDF file
    link.download = "Amos Wetu Musafiri - Full Stack Web Developer.pdf";
    link.click();
  };

  const viewCertificate = () => {
    const certificateUrl = "/documents/DIA-Certificate.pdf";
    window.open(certificateUrl, "_blank");
  };

  return (
    <section id="cv" className="cv-section">
      <div className="cv-container">
        <header className="cv-header">
          <div className="header-content">
            <div
              className="profile-img"
              style={{
                backgroundImage: "url('/images/me.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <h1>AMOS WETU MUSAFIRI</h1>
            <div className="certification-badge">
              <i className="fas fa-certificate"></i> Certified Full Stack
              Developer
            </div>
          </div>
        </header>

        <div className="cv-main-content">
          <div className="cv-sidebar">
            <div className="sidebar-section">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Kempton Park, Gauteng 1619</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+27744610850</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>amoswetu22@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-globe"></i>
                <span>amoswetu.netlify.app</span>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Languages</h3>
              <div className="contact-item">
                <i className="fas fa-language"></i>
                <span>English: First language</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-language"></i>
                <span>IsiZulu: Upper intermediate</span>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Hobbies & Interests</h3>
              <div className="hobbies-list">
                <div className="hobby-tag">Web Design</div>
                <div className="hobby-tag">Sound Design</div>
                <div className="hobby-tag">Graphics Design</div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Achievements</h3>
              <div className="achievement-item">
                <div className="achievement-title">Small Business Training</div>
                <div className="achievement-organization">- CMS</div>
              </div>
            </div>

            {!isMobile && (
              <div className="sidebar-section">
                <h3>References</h3>
                <div className="reference-item">
                  <div className="reference-name">Sibusiso</div>
                  <div className="reference-position">Vibe Cafe Owner</div>
                  <div className="reference-phone">083 212 3575</div>
                </div>
                <div className="reference-item">
                  <div className="reference-name">Angel Clement</div>
                  <div className="reference-position">
                    Scrooge Diner Manager
                  </div>
                  <div className="reference-phone">087 897 6937</div>
                </div>
                <div className="reference-item">
                  <div className="reference-name">Angela Hancock</div>
                  <div className="reference-position">Coca Cola, Producer</div>
                  <div className="reference-phone">073 788 9873</div>
                </div>
                <div className="reference-item">
                  <div className="reference-name">Duane Stone</div>
                  <div className="reference-position">(Pontonia), Client</div>
                  <div className="reference-phone">068 508 5729</div>
                </div>
                <div className="reference-item">
                  <div className="reference-name">Mr. Pebbles</div>
                  <div className="reference-position">BNOG Sound, Founder</div>
                  <div className="reference-phone">082 599 6942</div>
                </div>
              </div>
            )}
          </div>

          <div className="cv-content">
            <section className="cv-about">
              <h2>Summary</h2>
              <p>
                A passionate Full Stack Web Developer with a strong foundation
                in modern web technologies and a background in customer service.
                Recently completed the Full Stack Web Development Program at
                Digital Innovation Academy, gaining comprehensive skills in
                HTML5, CSS3, JavaScript, React, Node.js, database management,
                API development, and software engineering principles.
              </p>
            </section>

            <section className="cv-skills">
              <h2>Technical Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>
                    <i className="fas fa-code"></i> Frontend
                  </h3>
                  <div className="skill-tags">
                    <div className="skill-tag frontend">HTML5</div>
                    <div className="skill-tag frontend">CSS3</div>
                    <div className="skill-tag frontend">JavaScript</div>
                    <div className="skill-tag frontend">React</div>
                    <div className="skill-tag frontend">Tailwind CSS</div>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>
                    <i className="fas fa-server"></i> Backend
                  </h3>
                  <div className="skill-tags">
                    <div className="skill-tag backend">Node.js</div>
                    <div className="skill-tag backend">API Development</div>
                    <div className="skill-tag backend">Database Management</div>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>
                    <i className="fas fa-tools"></i> Professional
                  </h3>
                  <div className="skill-tags">
                    <div className="skill-tag professional">Collaboration</div>
                    <div className="skill-tag professional">
                      Problem Solving
                    </div>
                    <div className="skill-tag professional">
                      Customer Service
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="cv-experience">
              <h2>Professional Experience</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">Sep 2021 - May 2022</div>
                  <div className="timeline-content">
                    <h3>Sales and Customer Service Representative</h3>
                    <h4>Integer Group SA, Johannesburg, South Africa</h4>
                    <ul>
                      <li>
                        Informed customers on promotions and special offers
                      </li>
                      <li>Followed up with customers to ensure satisfaction</li>
                      <li>
                        Attended meetings to discuss ways to improve services
                      </li>
                      <li>
                        Registered customer info on database to retain accurate
                        records
                      </li>
                      <li>
                        Addressed customer queries to provide information
                        regarding product specifications
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">Jan 2018 - Jan 2020</div>
                  <div className="timeline-content">
                    <h3>Insurance Broker</h3>
                    <h4>Nova Connect, Johannesburg, South Africa</h4>
                    <ul>
                      <li>Cold calling in order to find potential clients</li>
                      <li>
                        Offering free insurance quotes to those who express
                        interest
                      </li>
                      <li>
                        Generating and transferring leads to the relevant
                        insurer
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="cv-education">
              <h2>Education & Certifications</h2>
              <div className="education-grid">
                <div className="education-item">
                  <h3>
                    <i className="fas fa-graduation-cap"></i> Full Stack Web
                    Development
                  </h3>
                  <p>
                    <strong>Digital Innovation Academy, Cape Town, WC</strong>
                  </p>
                  <p>Completed: June 2023</p>
                  <div className="cert-highlight">
                    <p>
                      Acquired comprehensive skills in HTML5, CSS3, JavaScript,
                      React, Node.js, database management, API development.
                    </p>
                  </div>
                </div>
                <div className="education-item">
                  <h3>
                    <i className="fas fa-certificate"></i> NQF Level 4 (Matric)
                  </h3>
                  <p>
                    <strong>Kwazini Adult Centre, Kempton Park, GP</strong>
                  </p>
                  <p>Completed: 2024</p>
                  <div className="cert-highlight">
                    <p>
                      Completed National Senior Certificate meeting all
                      requirements for higher education (Bachelor's Degree).
                    </p>
                  </div>
                </div>
                <div className="education-item">
                  <h3>
                    <i className="fas fa-certificate"></i> NQF Level 3 Business
                    Process
                  </h3>
                  <p>
                    <strong>Southampton City College, Johannesburg, GP</strong>
                  </p>
                  <p>Completed: 2022</p>
                  <div className="cert-highlight">
                    <p>
                      Attained skills in customer service, professional
                      communication, problem-solving, and business workflow
                      management.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <button onClick={downloadCV} className="download-btn">
            <i className="fas fa-download"></i> Download My CV
          </button>
        </div>
        {/* Certificate Button - Shows on both mobile and desktop */}
        <div className="certificate-section">
          <button className="certificate-btn" onClick={viewCertificate}>
            <i className="fas fa-eye"></i> View Certificate
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
