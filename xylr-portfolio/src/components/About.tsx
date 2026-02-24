import { useState, useEffect, useRef } from "react";

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

  const pdfRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // load html2pdf if not present
    if (!(window as any).html2pdf) {
      const s = document.createElement("script");
      s.src =
        "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js";
      s.async = true;
      document.body.appendChild(s);
    }

    const btn = document.getElementById("download-pdf");
    if (!btn) return;

    const handler = () => {
      const button = btn as HTMLButtonElement;
      button.disabled = true;
      const origText = button.textContent || "";
      button.textContent = "Preparing...";
      document.documentElement.classList.add("pdf-mode");
      const element = pdfRef.current || document.querySelector(".a4-exact");
      const opt = {
        margin: 0,
        filename: "deepseek_onepage.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      try {
        (window as any)
          .html2pdf()
          .set(opt)
          .from(element)
          .save()
          .then(() => {
            document.documentElement.classList.remove("pdf-mode");
            button.disabled = false;
            button.textContent = origText;
          })
          .catch(() => {
            document.documentElement.classList.remove("pdf-mode");
            button.disabled = false;
            button.textContent = origText;
            alert("PDF generation failed. Try printing to PDF instead.");
          });
      } catch (e) {
        document.documentElement.classList.remove("pdf-mode");
        button.disabled = false;
        button.textContent = origText;
        alert("PDF generation failed. Try printing to PDF instead.");
      }
    };

    btn.addEventListener("click", handler);
    return () => btn.removeEventListener("click", handler);
  }, []);

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
        {/* Tailwind-converted one-page A4 (exact fit) */}
        <div className="flex justify-center mt-8">
          <div
            ref={pdfRef}
            className="a4-exact w-[210mm] h-[297mm] bg-white flex flex-col overflow-hidden"
            style={{
              padding: "12mm 12mm 8mm 12mm",
              boxShadow: "0 30px 50px rgba(0,20,40,0.25)",
            }}
          >
            <div className="one-pager flex flex-col h-full w-full gap-0.5 justify-between">
              {/* TITLE */}
              <div className="title-block bg-gradient-to-br from-[#0b1f35] to-[#16345c] text-white rounded-2xl p-4 flex items-center justify-between shadow-md mb-1">
                <h1 className="text-lg font-bold flex items-center">
                  <i className="fas fa-store mr-2" /> Comparison
                </h1>
                <div className="sub text-sm bg-white/15 px-3 py-1 rounded-full">
                  MERN · Wix · GoDaddy · WP · Bolt · Lovable · Base44
                </div>
              </div>

              {/* SUMMARY */}
              <div className="summary-strip bg-[#e7f1fa] rounded-full px-4 py-1 text-xs flex items-center gap-3">
                <span className="font-bold bg-[#2563eb] text-white px-3 py-0.5 rounded-full">
                  Summary
                </span>
                <span className="text-xs">
                  <strong>Control vs simplicity:</strong> custom (MERN) = unique
                  build; builders = fast move-in; AI = prototype only, security
                  risks.
                </span>
              </div>

              {/* MERN */}
              <div>
                <div className="section-tag text-sm font-semibold flex items-center gap-2 mt-1">
                  <i className="fas fa-code text-blue-800" /> ① MERN stack (from
                  scratch)
                </div>
                <div className="two-col grid grid-cols-2 gap-3 mt-1">
                  <div className="pro-card bg-[#f9fcff] rounded-xl p-3 border border-[rgba(0,70,120,0.1)] shadow-sm">
                    <div className="card-label font-bold flex items-center gap-2 mb-2">
                      <i className="fas fa-check-circle" /> Pros — MERN
                    </div>
                    <ul className="list-none">
                      <li className="flex gap-2 text-[0.7rem] leading-tight mb-1">
                        <i className="fas fa-paint-brush text-sm mt-0.5" />{" "}
                        <strong>Unlimited design</strong> – no template limits,
                        unique brand
                      </li>
                      <li className="flex gap-2 text-[0.7rem] leading-tight mb-1">
                        <i className="fas fa-puzzle-piece text-sm mt-0.5" />{" "}
                        <strong>Tailored logic</strong> – built exactly for your
                        business
                      </li>
                      <li className="flex gap-2 text-[0.7rem] leading-tight mb-1">
                        <i className="fas fa-database text-sm mt-0.5" />{" "}
                        <strong>Full ownership</strong> – code & data, no
                        lock-in
                      </li>
                      <li className="flex gap-2 text-[0.7rem] leading-tight">
                        <i className="fas fa-rocket text-sm mt-0.5" />{" "}
                        <strong>SEO speed</strong> – SSR, fast indexing
                      </li>
                    </ul>
                  </div>
                  <div className="con-card bg-[#f9fcff] rounded-xl p-3 border border-[rgba(0,70,120,0.1)] shadow-sm">
                    <div className="card-label font-bold flex items-center gap-2 mb-2">
                      <i className="fas fa-times-circle" /> Cons — MERN
                    </div>
                    <ul className="list-none">
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-coins text-sm mt-0.5" />{" "}
                        <strong>High upfront</strong> – dev team, months
                      </li>
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-tools text-sm mt-0.5" />{" "}
                        <strong>Maintenance</strong> – updates, patches, server
                      </li>
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-user-graduate text-sm mt-0.5" />{" "}
                        <strong>Dev needed</strong> – you depend on experts
                      </li>
                      <li className="flex gap-2 text-[0.7rem]">
                        <i className="fas fa-shield-alt text-sm mt-0.5" />{" "}
                        <strong>Security on you</strong> – PCI, audits
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Builders */}
              <div>
                <div className="section-tag text-sm font-semibold flex items-center gap-2 mt-1">
                  <i className="fas fa-drag-drop text-blue-800" /> ② Traditional
                  builders (Wix · GoDaddy · WordPress)
                </div>
                <div className="two-col grid grid-cols-2 gap-3 mt-1">
                  <div className="builder-card bg-[#f4f9ff] rounded-xl p-3 border border-[rgba(0,70,120,0.1)] shadow-sm">
                    <div className="card-label font-bold flex items-center gap-2 mb-2">
                      <i className="fas fa-check-circle text-[#2563eb]" /> Pros
                      — builders
                    </div>
                    <ul className="list-none">
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-clock text-[#2563eb]" />{" "}
                        <strong>Launch days/hours</strong> – drag & drop
                      </li>
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-wallet text-[#2563eb]" />{" "}
                        <strong>Low monthly</strong> – predictable cost
                      </li>
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-server text-[#2563eb]" />{" "}
                        <strong>All-inclusive</strong> – hosting, SSL, updates
                      </li>
                      <li className="flex gap-2 text-[0.7rem]">
                        <i className="fas fa-puzzle-piece text-[#2563eb]" />{" "}
                        <strong>App ecosystem</strong> – plugins, 24/7 support
                      </li>
                    </ul>
                  </div>
                  <div className="con-card bg-[#f9fcff] rounded-xl p-3 border border-[rgba(0,70,120,0.1)] shadow-sm">
                    <div className="card-label font-bold flex items-center gap-2 mb-2">
                      <i className="fas fa-times-circle" /> Cons — builders
                    </div>
                    <ul className="list-none">
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-cut" />{" "}
                        <strong>Limited custom</strong> – template/plugin
                        boundaries
                      </li>
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-chart-bar" />{" "}
                        <strong>Scalability ceiling</strong> – migration pain
                      </li>
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-lock" />{" "}
                        <strong>Platform lock-in</strong> – no code ownership
                      </li>
                      <li className="flex gap-2 text-[0.7rem]">
                        <i className="fas fa-credit-card" />{" "}
                        <strong>Recurring fees</strong> – subscriptions +
                        transaction %
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AI builders */}
              <div>
                <div className="section-tag text-sm font-semibold flex items-center gap-2 mt-1">
                  <i className="fas fa-robot text-yellow-700" /> ③ AI‑powered
                  (Bolt · Lovable · Base44)
                </div>
                <div className="two-col grid grid-cols-2 gap-3 mt-1">
                  <div
                    className="builder-card bg-[#fff8e7] rounded-xl p-3 border border-[rgba(0,70,120,0.1)] shadow-sm"
                    style={{ borderLeftColor: "#b45309" }}
                  >
                    <div className="card-label font-bold flex items-center gap-2 mb-2">
                      <i className="fas fa-bolt text-[#b45309]" /> Pros — AI
                    </div>
                    <ul className="list-none">
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-hourglass-start text-[#b45309]" />{" "}
                        <strong>MVP in minutes</strong> – prompt → prototype
                      </li>
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-puzzle-piece text-[#b45309]" />{" "}
                        <strong>Non‑tech bridge</strong> – create without code
                      </li>
                      <li className="flex gap-2 text-[0.7rem]">
                        <i className="fas fa-sync-alt text-[#b45309]" />{" "}
                        <strong>Rapid iteration</strong> – change via prompts
                      </li>
                    </ul>
                  </div>
                  <div
                    className="con-card bg-[#f9fcff] rounded-xl p-3 border border-[rgba(0,70,120,0.1)] shadow-sm"
                    style={{ borderLeftColor: "#b45309" }}
                  >
                    <div className="card-label font-bold flex items-center gap-2 mb-2">
                      <i className="fas fa-exclamation-triangle text-[#b45309]" />{" "}
                      Cons — AI
                    </div>
                    <ul className="list-none">
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-search" />{" "}
                        <strong>Major SEO fail</strong> – client‑side rendering
                        blocks indexing
                      </li>
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-shield-virus" />{" "}
                        <strong>Security risks</strong> – AI‑written
                        vulnerabilities
                      </li>
                      <li className="flex gap-2 text-[0.7rem] mb-1">
                        <i className="fas fa-bug" />{" "}
                        <strong>Hard to debug</strong> – last 20% tweaks painful
                      </li>
                      <li className="flex gap-2 text-[0.7rem]">
                        <i className="fas fa-question-circle" />{" "}
                        <strong>Portability?</strong> – export may break
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* comparison table */}
              <div>
                <div className="section-tag text-sm font-semibold flex items-center gap-2 mt-1">
                  <i className="fas fa-table" /> quick comparison
                </div>
                <div className="mini-table bg-white rounded-lg border p-1 mt-1">
                  <div className="table-row grid grid-cols-[1.3fr_1fr_1fr_1fr] text-[0.63rem] font-bold bg-[#eaf1fb] p-2">
                    <div>feature</div>
                    <div>MERN</div>
                    <div>traditional</div>
                    <div>AI builders</div>
                  </div>
                  {/** rows compacted **/}
                  <div className="table-row grid grid-cols-[1.3fr_1fr_1fr_1fr] text-[0.63rem] border-b p-2">
                    <div>cost</div>
                    <div className="text-green-600 font-medium">
                      high upfront
                    </div>
                    <div className="text-amber-700 font-medium">
                      low monthly
                    </div>
                    <div className="text-amber-700 font-medium">moderate</div>
                  </div>
                  <div className="table-row grid grid-cols-[1.3fr_1fr_1fr_1fr] text-[0.63rem] border-b p-2">
                    <div>launch time</div>
                    <div className="text-red-600 font-medium">months</div>
                    <div className="text-green-600 font-medium">days</div>
                    <div className="text-green-600 font-medium">hours</div>
                  </div>
                  <div className="table-row grid grid-cols-[1.3fr_1fr_1fr_1fr] text-[0.63rem] border-b p-2">
                    <div>customization</div>
                    <div className="text-green-600 font-medium">unlimited</div>
                    <div className="text-amber-700 font-medium">limited</div>
                    <div className="text-red-600 font-medium">AI limited</div>
                  </div>
                  <div className="table-row grid grid-cols-[1.3fr_1fr_1fr_1fr] text-[0.63rem] border-b p-2">
                    <div>ease of use</div>
                    <div className="text-red-600 font-medium">dev needed</div>
                    <div className="text-green-600 font-medium">no code</div>
                    <div className="text-amber-700 font-medium">easy start</div>
                  </div>
                  <div className="table-row grid grid-cols-[1.3fr_1fr_1fr_1fr] text-[0.63rem] border-b p-2">
                    <div>scalability</div>
                    <div className="text-green-600 font-medium">excellent</div>
                    <div className="text-amber-700 font-medium">
                      hits limits
                    </div>
                    <div className="text-red-600 font-medium">untested</div>
                  </div>
                  <div className="table-row grid grid-cols-[1.3fr_1fr_1fr_1fr] text-[0.63rem] border-b p-2">
                    <div>ownership</div>
                    <div className="text-green-600 font-medium">full</div>
                    <div className="text-red-600 font-medium">rented</div>
                    <div className="text-red-600 font-medium">unclear</div>
                  </div>
                  <div className="table-row grid grid-cols-[1.3fr_1fr_1fr_1fr] text-[0.63rem] border-b p-2">
                    <div>security</div>
                    <div className="text-amber-700 font-medium">on you</div>
                    <div className="text-green-600 font-medium">managed</div>
                    <div className="text-red-600 font-medium">high risk</div>
                  </div>
                  <div className="table-row grid grid-cols-[1.3fr_1fr_1fr_1fr] text-[0.63rem] p-2">
                    <div>SEO</div>
                    <div className="text-green-600 font-medium">excellent</div>
                    <div className="text-green-600 font-medium">good</div>
                    <div className="text-red-600 font-medium">poor</div>
                  </div>
                </div>
              </div>

              {/* recommendations */}
              <div className="reco-row grid grid-cols-3 gap-3 mt-1">
                <div className="reco-item bg-[#f5f9ff] rounded-xl p-3 border-t-4 border-blue-900">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <i className="fas fa-crown text-[#1e4a8b]" /> MERN
                  </h4>
                  <p className="text-[0.75rem]">
                    Complex/unique model, big scale, budget for dev team.
                    Long‑term custom asset.
                  </p>
                </div>
                <div className="reco-item bg-[#f5f9ff] rounded-xl p-3 border-t-4 border-teal-600">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <i className="fas fa-shop text-[#0d9488]" /> Builder
                  </h4>
                  <p className="text-[0.75rem]">
                    Standard store, quick & cheap, small biz. WordPress gives
                    most power.
                  </p>
                </div>
                <div className="reco-item bg-[#f5f9ff] rounded-xl p-3 border-t-4 border-orange-700">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <i className="fas fa-robot text-[#b45309]" /> AI (⚠️)
                  </h4>
                  <p className="text-[0.75rem]">
                    Only prototypes/internal tools. Not for real e‑commerce
                    (security/SEO).
                  </p>
                </div>
              </div>

              {/* footer */}
              <div className="footer-note flex justify-between items-center text-[0.6rem] text-slate-600 mt-1 border-t border-dashed pt-2">
                <span>
                  <i className="far fa-file-pdf" /> XYLR Web Solutions
                </span>
                <span className="footer-icons hidden gap-2 items-center">
                  <i className="fab fa-react" />
                  <i className="fab fa-wix" />
                  <i className="fab fa-wordpress" />
                  <i className="fas fa-bolt" />
                </span>
                <div className="flex gap-2 items-center">
                  <button
                    id="download-pdf"
                    className="pdf-btn bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-xs inline-flex items-center gap-2"
                  >
                    <i className="far fa-file-pdf" /> Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
