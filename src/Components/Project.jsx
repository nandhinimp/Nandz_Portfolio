import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode } from "lucide-react";

const projects = [
  {
  title: "BloodMate",
  overview: "BloodLink is a smart blood donation and emergency aid platform that bridges the gap between donors, patients, and hospitals. It solves the problem of unreliable donor lists by verifying donor health through AI-driven medical report analysis, offering instant emergency access via QR codes, and empowering hospitals with an admin dashboard for safe donor approvals..",
  description: "The platform allows donors to register, fill a health checklist, upload medical certificates, and manage their availability status. AI (OCR + LLM) automatically parses uploaded reports to detect risks like recent illness or medication, and flags inconsistencies with self-declared data. Recipients can raise blood requests or scan a donor’s QR code for instant access in emergencies, even without login. Meanwhile, hospitals/admins review flagged profiles, verify eligibility, and ensure a trusted donor pool. Additional features include digital consent, health badges, and future integration with national health systems for real-world scalability.",
  tech: ["React", "MYSQL", "Tailwindcss", "JWT","Firebase","QrCode","OCR"],
  status: "Ongoing",
  featured: true,
  demo: "https://github.com/nandhinimp/RedLink",
  code: "https://github.com/nandhinimp/RedLink",
  },
  {
    title: "City Explorer",
    overview: "Full-stack MERN app recommending cities using OpenAI API.",
    // 🔽 Your concise content embedded below
    descriptionShort:
      "Full-stack MERN app that uses the OpenAI API to suggest cities based on user preferences, handling 100+ queries. Includes JWT authentication, validated APIs with Bruno, and optimized MongoDB collections. Deployed with GitHub Actions, backend on Render, and frontend on Netlify. Built with modular React components to improve code reuse and cut UI dev time by 30%.",
    techstackList: [
      "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB",
      "OpenAI API", "JWT", "GitHub Actions", "Render", "Netlify", "Bruno"
    ],
    upcomingList: [
      "Google Maps integration",
      "Chatbox",
      "360° city views"
    ],
    description: "An interactive web application for exploring cities with real-time data and beautiful visualizations.",
    tech: [ "React",
        "Node.js",
        "MongoDB",
        "Express",
        "OpenAI",
        "JWT",
        "Bruno",
        "GitHub Actions",
        "Render",
        "Netlify"],
    status: "Ongoing",
    featured: true,
    demo: "https://visionary-fairy-e17309.netlify.app/",   // Live demo link
    code: "https://github.com/kalviumcommunity/S76_Nandhini_Capstone_CityExplorer",   // GitHub repo link
  },
  {
    title: "Paper Toss Game",
    overview: "Browser-based game with drag-and-drop mechanics and realistic physics.",
    description: "Developed a browser-based game using React and Vite with drag-and-drop mechanics; implemented physics and wind impact to simulate realistic gameplay dynamics.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    status: "Live",
    featured: true,
    demo: "https://superb-alpaca-4c92fc.netlify.app/",
    code: "https://github.com/nandhinimp/papertoss",
  },
  {
    title: "Spotify Clone",
  overview:"Responsive clone of Spotify using HTML and CSS",
    description: "Created a responsive clone of Spotify using HTML and CSS; achieved layout consistency across 3 device breakpoints and improved visual accuracy by 95%.",
    tech: ["HTML","CSS"],
    status: "Completed",
    featured: true,
    demo: "http://inspiring-malabi-3e55ad.netlify.app/",
    code: "#",
  },
];

const statusColors = {
  "Complete": "bg-green-100 text-green-700",
  "Live": "bg-pink-100 text-pink-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  "Development": "bg-blue-100 text-blue-700",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
  <section id="projects" className="bg-gradient-to-br from-purple-100 via-white to-cyan-100 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Featured Projects</h2>
        <p className="text-gray-600 text-base md:text-lg">
          A showcase of my recent work and creative applications in coding projects development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 bg-white overflow-hidden flex flex-col"
          >
            {/* Accent bar */}
            <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600" />

            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <span className="font-semibold text-xl md:text-2xl break-words text-gray-900">
                  {project.title}
                </span>
                <div className="flex items-center space-x-2">
                  {project.featured && (
                    <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full font-semibold">
                      ★ Featured
                    </span>
                  )}
                  {project.status && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        statusColors[project.status] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-600 mb-4 break-words text-sm md:text-base">
                {project.overview || project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {(project.tags || project.tech || []).map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="#"
          className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          View All Projects
        </a>
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              // click outside card closes
              if (e.target === e.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 md:p-8 max-w-3xl w-full relative shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} details`}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl leading-none"
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
              >
                &times;
              </button>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {selectedProject.title}
              </h3>

              {/* DESCRIPTION */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Description</h4>
                {selectedProject.descriptionShort ? (
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.descriptionShort}
                  </p>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                )}
              </div>

              {/* TECH STACK */}
              {(selectedProject.techstackList && selectedProject.techstackList.length > 0) ? (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techstackList.map((t) => (
                      <span
                        key={t}
                        className="text-xs sm:text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (selectedProject.tech && selectedProject.tech.length > 0) ? (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs sm:text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* UPCOMING */}
              {(selectedProject.upcomingList && selectedProject.upcomingList.length > 0) ? (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Upcoming</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {selectedProject.upcomingList.map((u) => (
                      <li key={u}>{u}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={selectedProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
