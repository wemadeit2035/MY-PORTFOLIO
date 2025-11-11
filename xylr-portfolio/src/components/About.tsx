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
    const link = document.createElement("a");
    link.href = "/documents/Amos Wetu Musafiri - Full Stack Web Developer.pdf";
    link.download = "Amos Wetu Musafiri - Full Stack Web Developer.pdf";
    link.click();
  };

  const viewCertificate = () => {
    const certificateUrl = "/documents/DIA-Certificate.pdf";
    window.open(certificateUrl, "_blank");
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-gray-800 to-blue-600 text-white rounded-2xl p-8 mb-8 text-center shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div
              className="w-40 h-40 rounded-full border-4 border-orange-500 mx-auto mb-6 shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/images/me.webp')" }}
            ></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              AMOS WETU MUSAFIRI
            </h1>
            <div className="inline-flex items-center bg-white/20 px-6 py-3 rounded-full border border-white/30 text-lg font-semibold backdrop-blur-sm">
              <span className="mr-2">🏆</span> Certified Full Stack Developer
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-white">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">📍</span>
                  <span>Kempton Park, Gauteng 1619</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">📞</span>
                  <span>+27744610850</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">📧</span>
                  <span>amoswetu22@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🌐</span>
                  <span>amoswetu.netlify.app</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-white">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🗣️</span>
                  <span>English: First language</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🗣️</span>
                  <span>IsiZulu: Upper intermediate</span>
                </div>
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-white">
                Hobbies & Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/15 text-white px-3 py-1 rounded-full text-sm border border-white/30">
                  Web Design
                </span>
                <span className="bg-white/15 text-white px-3 py-1 rounded-full text-sm border border-white/30">
                  Sound Design
                </span>
                <span className="bg-white/15 text-white px-3 py-1 rounded-full text-sm border border-white/30">
                  Graphics Design
                </span>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-white">
                Achievements
              </h3>
              <div className="space-y-2">
                <div className="font-semibold text-gray-200">
                  Small Business Training
                </div>
                <div className="text-blue-400 italic">- CMS</div>
              </div>
            </div>

            {/* References - Hidden on mobile */}
            {!isMobile && (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-white">
                  References
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="font-bold text-white mb-1">Sibusiso</div>
                    <div className="italic text-gray-300 mb-1">
                      Vibe Cafe Owner
                    </div>
                    <div className="text-blue-400 font-semibold">
                      083 212 3575
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="font-bold text-white mb-1">
                      Angel Clement
                    </div>
                    <div className="italic text-gray-300 mb-1">
                      Scrooge Diner Manager
                    </div>
                    <div className="text-blue-400 font-semibold">
                      087 897 6937
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="font-bold text-white mb-1">
                      Angela Hancock
                    </div>
                    <div className="italic text-gray-300 mb-1">
                      Coca Cola, Producer
                    </div>
                    <div className="text-blue-400 font-semibold">
                      073 788 9873
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="font-bold text-white mb-1">Duane Stone</div>
                    <div className="italic text-gray-300 mb-1">
                      (Pontonia), Client
                    </div>
                    <div className="text-blue-400 font-semibold">
                      068 508 5729
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="font-bold text-white mb-1">Mr. Pebbles</div>
                    <div className="italic text-gray-300 mb-1">
                      BNOG Sound, Founder
                    </div>
                    <div className="text-blue-400 font-semibold">
                      082 599 6942
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Summary */}
            <section className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-blue-500 pb-3">
                Summary
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                A passionate Full Stack Web Developer with a strong foundation
                in modern web technologies and a background in customer service.
                Recently completed the Full Stack Web Development Program at
                Digital Innovation Academy, gaining comprehensive skills in
                HTML5, CSS3, JavaScript, React, Node.js, database management,
                API development, and software engineering principles.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-blue-500 pb-3">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-6 rounded-xl transition-transform hover:-translate-y-1 border-l-4 border-blue-500 hover:shadow-lg">
                  <h3 className="flex items-center text-xl font-semibold mb-4 text-gray-800">
                    <span className="mr-2">💻</span> Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      HTML5
                    </span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      CSS3
                    </span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      JavaScript
                    </span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      React
                    </span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl transition-transform hover:-translate-y-1 border-l-4 border-green-500 hover:shadow-lg">
                  <h3 className="flex items-center text-xl font-semibold mb-4 text-gray-800">
                    <span className="mr-2">⚙️</span> Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Node.js
                    </span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      API Development
                    </span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Database Management
                    </span>
                  </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl transition-transform hover:-translate-y-1 border-l-4 border-purple-500 hover:shadow-lg">
                  <h3 className="flex items-center text-xl font-semibold mb-4 text-gray-800">
                    <span className="mr-2">🛠️</span> Professional
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Collaboration
                    </span>
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Problem Solving
                    </span>
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Customer Service
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-blue-500 pb-3">
                Professional Experience
              </h2>
              <div className="relative max-w-4xl">
                <div className="absolute left-8 top-0 h-full w-1 bg-blue-500"></div>

                <div className="relative mb-8 pl-16">
                  <div className="absolute left-0 top-0 w-16 text-center bg-blue-500 text-white py-1 px-2 rounded-lg font-semibold text-sm z-10">
                    Sep 2021 - May 2022
                  </div>
                  <div className="bg-gray-100 p-6 rounded-xl transition-transform hover:translate-x-2 border-l-4 border-blue-500 hover:shadow-lg text-gray-800">
                    <h3 className="text-xl font-bold mb-2">
                      Sales and Customer Service Representative
                    </h3>
                    <h4 className="text-lg text-blue-600 mb-4 font-semibold">
                      Integer Group SA, Johannesburg, South Africa
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">▹</span>
                        Informed customers on promotions and special offers
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">▹</span>
                        Followed up with customers to ensure satisfaction
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">▹</span>
                        Attended meetings to discuss ways to improve services
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">▹</span>
                        Registered customer info on database to retain accurate
                        records
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">▹</span>
                        Addressed customer queries to provide information
                        regarding product specifications
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-16 text-center bg-blue-500 text-white py-1 px-2 rounded-lg font-semibold text-sm z-10">
                    Jan 2018 - Jan 2020
                  </div>
                  <div className="bg-gray-100 p-6 rounded-xl transition-transform hover:translate-x-2 border-l-4 border-blue-500 hover:shadow-lg text-gray-800">
                    <h3 className="text-xl font-bold mb-2">Insurance Broker</h3>
                    <h4 className="text-lg text-blue-600 mb-4 font-semibold">
                      Nova Connect, Johannesburg, South Africa
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">▹</span>
                        Cold calling in order to find potential clients
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">▹</span>
                        Offering free insurance quotes to those who express
                        interest
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">▹</span>
                        Generating and transferring leads to the relevant
                        insurer
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Education & Certifications */}
            <section className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-blue-500 pb-3">
                Education & Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-6 rounded-xl transition-transform hover:-translate-y-1 border-l-4 border-blue-500 hover:shadow-lg text-gray-800">
                  <h3 className="flex items-center text-lg font-bold mb-3">
                    <span className="mr-2">🎓</span> Full Stack Web Development
                  </h3>
                  <p className="font-semibold text-blue-600 mb-2">
                    Digital Innovation Academy, Cape Town, WC
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Completed: June 2023
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm rounded">
                    <p className="text-gray-700">
                      Acquired comprehensive skills in HTML5, CSS3, JavaScript,
                      React, Node.js, database management, API development.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-xl transition-transform hover:-translate-y-1 border-l-4 border-blue-500 hover:shadow-lg text-gray-800">
                  <h3 className="flex items-center text-lg font-bold mb-3">
                    <span className="mr-2">🏆</span> NQF Level 4 (Matric)
                  </h3>
                  <p className="font-semibold text-blue-600 mb-2">
                    Kwazini Adult Centre, Kempton Park, GP
                  </p>
                  <p className="text-sm text-gray-600 mb-3">Completed: 2024</p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm rounded">
                    <p className="text-gray-700">
                      Completed National Senior Certificate meeting all
                      requirements for higher education (Bachelor's Degree).
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-xl transition-transform hover:-translate-y-1 border-l-4 border-blue-500 hover:shadow-lg text-gray-800">
                  <h3 className="flex items-center text-lg font-bold mb-3">
                    <span className="mr-2">📜</span> NQF Level 3 Business
                    Process
                  </h3>
                  <p className="font-semibold text-blue-600 mb-2">
                    Southampton City College, Johannesburg, GP
                  </p>
                  <p className="text-sm text-gray-600 mb-3">Completed: 2022</p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm rounded">
                    <p className="text-gray-700">
                      Attained skills in customer service, professional
                      communication, problem-solving, and business workflow
                      management.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={downloadCV}
            className="bg-gradient-to-r from-gray-800 to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
          >
            <span>📥</span> Download My CV
          </button>

          <button
            onClick={viewCertificate}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
          >
            <span>👁️</span> View Certificate
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
