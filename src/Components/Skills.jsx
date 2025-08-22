import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiMongodb, SiRedux, SiGraphql, SiMysql, SiVite, SiFigma, SiExpress, SiGithub, SiTailwindcss, SiJsonwebtokens, SiNetlify, SiVercel, SiRender, SiBruno } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-5xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-sky-600 text-5xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-5xl" /> },
  { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
  { name: "Vite", icon: <SiVite className="text-violet-500 text-5xl" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 text-5xl" /> },
  { name: "Java", icon: <span className="text-orange-700 text-5xl font-bold">☕</span> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 text-5xl" /> },
  { name: "GitHub", icon: <SiGithub className="text-black text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-600 text-5xl" /> },
  { name: "Netlify", icon: <SiNetlify className="text-green-500 text-5xl" /> },
  { name: "Vercel", icon: <SiVercel className="text-black text-5xl" /> },
  { name: "Render", icon: <SiRender className="text-blue-400 text-5xl" /> },
  { name: "Bruno", icon: <SiBruno className="text-purple-700 text-5xl" /> },
  // { name: "Docker", icon: <FaDocker className="text-blue-600 text-5xl" /> },
  // { name: "AWS", icon: <FaAws className="text-orange-400 text-5xl" /> },
  // { name: "Redux", icon: <SiRedux className="text-purple-600 text-5xl" /> },
  // { name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-5xl" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
  className="py-20 px-6 md:px-16 bg-gradient-to-br from-blue-100 via-green-50 to-yellow-100 text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-900 mb-4"
      >
        My Tech Stack
      </motion.h2>
      <p className="text-gray-600 mb-12">
        Technologies I work with to bring ideas to life
      </p>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition"
          >
            {tech.icon}
            <p className="mt-4 font-medium text-gray-800">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
