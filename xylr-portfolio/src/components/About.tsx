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
      <div className="max-w-7xl mx-auto mt-20 px-4 py-6">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-gray-800 to-blue-600 text-white rounded-2xl p-6 mb-6 text-center shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div
              className="w-32 h-32 rounded-full border-4 border-orange-500 mx-auto mb-4 shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/images/me.webp')" }}
            ></div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              AMOS WETU MUSAFIRI
            </h1>
            <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full border border-white/30 text-base font-italic backdrop-blur-sm">
              <span className="mr-2">🏆</span> Full Stack Developer
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-5 rounded-2xl shadow-xl backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-white">
                Contact Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">📍</span>
                  <span className="text-sm">Kempton Park, Gauteng 1619</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">📞</span>
                  <span className="text-sm">+27744610850</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">📧</span>
                  <span className="text-sm">amoswetu22@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">🌐</span>
                  <span className="text-sm">amoswetu.netlify.app</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-5 rounded-2xl shadow-xl backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-white">Languages</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">🗣️</span>
                  <span className="text-sm">English: First language</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">🗣️</span>
                  <span className="text-sm">IsiZulu: Upper intermediate</span>
                </div>
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-5 rounded-2xl shadow-xl backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-white">
                Hobbies & Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/15 text-white px-2 py-1 rounded-full text-xs border border-white/30">
                  Web Design
                </span>
                <span className="bg-white/15 text-white px-2 py-1 rounded-full text-xs border border-white/30">
                  Sound Design
                </span>
                <span className="bg-white/15 text-white px-2 py-1 rounded-full text-xs border border-white/30">
                  Graphics Design
                </span>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-5 rounded-2xl shadow-xl backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-white">
                Achievements
              </h3>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-gray-200">
                  Small Business Training -{" "}
                  <span className="text-blue-400">CMS</span>
                </div>
              </div>
            </div>

            {/* References - Hidden on mobile */}
            {!isMobile && (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-5 rounded-2xl shadow-xl backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-3 text-white">
                  References
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="font-bold text-white text-sm mb-1">
                      Sibusiso
                    </div>
                    <div className="italic text-gray-300 text-xs mb-1">
                      Vibe Cafe Owner
                    </div>
                    <div className="text-blue-400 font-semibold text-sm">
                      083 212 3575
                    </div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="font-bold text-white text-sm mb-1">
                      Angel Clement
                    </div>
                    <div className="italic text-gray-300 text-xs mb-1">
                      Scrooge Diner Manager
                    </div>
                    <div className="text-blue-400 font-semibold text-sm">
                      087 897 6937
                    </div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="font-bold text-white text-sm mb-1">
                      Angela Hancock
                    </div>
                    <div className="italic text-gray-300 text-xs mb-1">
                      Coca Cola, Producer
                    </div>
                    <div className="text-blue-400 font-semibold text-sm">
                      073 788 9873
                    </div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="font-bold text-white text-sm mb-1">
                      Duane Stone
                    </div>
                    <div className="italic text-gray-300 text-xs mb-1">
                      (Pontonia), Client
                    </div>
                    <div className="text-blue-400 font-semibold text-sm">
                      068 508 5729
                    </div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="font-bold text-white text-sm mb-1">
                      Mr. Pebbles
                    </div>
                    <div className="italic text-gray-300 text-xs mb-1">
                      BNOG Sound, Founder
                    </div>
                    <div className="text-blue-400 font-semibold text-sm">
                      082 599 6942
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Summary */}
            <section className="bg-black/50 backdrop-blur-lg p-4 sm:p-6 rounded-2xl border border-white/10 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white border-b-2 border-blue-500 pb-2">
                Summary
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed sm:leading-loose">
                A passionate Full Stack Web Developer with a strong foundation
                in modern web technologies and a background in customer service.
                Recently completed the Full Stack Web Development Program at
                Digital Innovation Academy, gaining comprehensive skills in
                HTML5, CSS3, JavaScript, React, Node.js, database management,
                API development, and software engineering principles.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="bg-black/50 backdrop-blur-lg p-4 sm:p-6 rounded-2xl border border-white/10 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white border-b-2 border-blue-500 pb-2">
                Technical Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Frontend */}
                <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-blue-500">
                  <h3 className="flex items-center text-base font-semibold mb-3 text-gray-800">
                    <span className="mr-2">💻</span> Frontend
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      HTML5
                    </span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      CSS3
                    </span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      JavaScript
                    </span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      React
                    </span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Tailwind CSS
                    </span>
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-green-500">
                  <h3 className="flex items-center text-base font-semibold mb-3 text-gray-800">
                    <span className="mr-2">⚙️</span> Backend
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Node.js
                    </span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      API Development
                    </span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Database Management
                    </span>
                  </div>
                </div>

                {/* Professional */}
                <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-purple-500">
                  <h3 className="flex items-center text-base font-semibold mb-3 text-gray-800">
                    <span className="mr-2">🛠️</span> Professional
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Collaboration
                    </span>
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Problem Solving
                    </span>
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Customer Service
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="bg-black/50 backdrop-blur-lg p-4 sm:p-6 rounded-2xl border border-white/10 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white border-b-2 border-blue-500 pb-2">
                Professional Experience
              </h2>

              {/* Mobile Layout */}
              <div className="block sm:hidden space-y-6">
                {/* First Job - Mobile */}
                <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-blue-500 text-gray-800">
                  <div className="flex flex-col mb-3">
                    <div className="bg-blue-500 text-white py-1 px-3 rounded-lg font-semibold text-xs w-fit mb-2">
                      Sep 2021 - May 2022
                    </div>
                    <h3 className="text-lg font-bold mb-1">
                      Sales and Customer Service Representative
                    </h3>
                    <h4 className="text-blue-600 font-semibold text-sm mb-2">
                      Integer Group SA, Johannesburg, South Africa
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>
                        Informed customers on promotions and special offers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>
                        Followed up with customers to ensure satisfaction
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>
                        Attended meetings to discuss ways to improve services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>
                        Registered customer info on database to retain accurate
                        records
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>
                        Addressed customer queries regarding product
                        specifications
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Second Job - Mobile */}
                <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-blue-500 text-gray-800">
                  <div className="flex flex-col mb-3">
                    <div className="bg-blue-500 text-white py-1 px-3 rounded-lg font-semibold text-xs w-fit mb-2">
                      Jan 2018 - Jan 2020
                    </div>
                    <h3 className="text-lg font-bold mb-1">Insurance Broker</h3>
                    <h4 className="text-blue-600 font-semibold text-sm mb-2">
                      Nova Connect, Johannesburg, South Africa
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>Cold calling to find potential clients</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>
                        Offering free insurance quotes to interested parties
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>
                        Generating and transferring leads to relevant insurers
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Desktop Layout - Original Timeline */}
              <div className="hidden sm:block relative max-w-4xl">
                <div className="absolute left-8 top-0 h-full w-1 bg-blue-500"></div>

                <div className="relative mb-8 pl-16">
                  <div className="absolute left-0 top-0 w-16 text-center bg-blue-500 text-white py-1 px-2 rounded-lg font-semibold text-sm z-10">
                    Sep 2021 - May 2022
                  </div>
                  <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-blue-500 text-gray-800">
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
                  <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-blue-500 text-gray-800">
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
            <section className="bg-black/50 backdrop-blur-lg p-4 sm:p-6 rounded-2xl border border-white/10 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white border-b-2 border-blue-500 pb-2">
                Education & Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Full Stack Web Development */}
                <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-blue-500 text-gray-800">
                  <div className="flex items-start mb-2">
                    <span className="text-blue-500 mr-2 text-lg">🎓</span>
                    <div className="flex-1">
                      <h3 className="text-base font-bold leading-tight">
                        Full Stack Web Development
                      </h3>
                      <p className="font-semibold text-blue-600 text-sm mt-1">
                        Digital Innovation Academy
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        Cape Town, WC • June 2023
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-3 text-xs rounded">
                    <p className="text-gray-700 leading-relaxed">
                      Acquired comprehensive skills in HTML5, CSS3, JavaScript,
                      React, Node.js, database management, and API development.
                    </p>
                  </div>
                </div>

                {/* NQF Level 4 */}
                <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-blue-500 text-gray-800">
                  <div className="flex items-start mb-2">
                    <span className="text-blue-500 mr-2 text-lg">🏆</span>
                    <div className="flex-1">
                      <h3 className="text-base font-bold leading-tight">
                        NQF Level 4 (Matric)
                      </h3>
                      <p className="font-semibold text-blue-600 text-sm mt-1">
                        Kwazini Adult Centre
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        Kempton Park, GP • 2024
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-3 text-xs rounded">
                    <p className="text-gray-700 leading-relaxed">
                      Completed National Senior Certificate meeting all
                      requirements for higher education (Bachelor's Degree).
                    </p>
                  </div>
                </div>

                {/* NQF Level 3 Business */}
                <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-blue-500 text-gray-800">
                  <div className="flex items-start mb-2">
                    <span className="text-blue-500 mr-2 text-lg">📜</span>
                    <div className="flex-1">
                      <h3 className="text-base font-bold leading-tight">
                        NQF Level 3 Business Process
                      </h3>
                      <p className="font-semibold text-blue-600 text-sm mt-1">
                        Southampton City College
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        Johannesburg, GP • 2022
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-3 text-xs rounded">
                    <p className="text-gray-700 leading-relaxed">
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
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6 sm:mt-8">
          <button
            onClick={downloadCV}
            className="w-full sm:w-auto bg-gradient-to-r from-gray-800 to-blue-600 text-white px-4 sm:px-6 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <span>📥</span> Download My CV
          </button>

          <button
            onClick={viewCertificate}
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <span>👁️</span> View Certificate
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
