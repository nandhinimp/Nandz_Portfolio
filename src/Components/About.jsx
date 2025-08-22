import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Server, GitBranch } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
  className="py-20 px-6 md:px-16 bg-gradient-to-br from-green-50 via-blue-50 to-cyan-100"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
             <p className="text-gray-700 leading-relaxed mb-4">
            I’m <span className="font-semibold">Nandhini </span>, a curious learner and builder 
            who enjoys turning ideas into real-world projects. I’m currently pursuing{" "}
            <span className="font-semibold">Computer Science Engineering with Software Product Engineering 
            at Kalvium (Coimbatore campus)</span> while also working toward an{" "}
            <span className="font-semibold">online BCA degree from the University of Mysore</span>.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            From my very first year, I’ve been hands-on with{" "}
            <span className="font-semibold">coding, project building, and problem-solving</span>, 
            which gave me a strong foundation in development early on. Over time, I’ve discovered 
            my passion for <span className="font-semibold">Full Stack Development</span> and{" "}
            <span className="font-semibold">AI</span>, and I love creating impactful solutions 
            using technologies like the <span className="font-semibold">MERN stack</span>,{" "}
            <span className="font-semibold">MySQL</span>, and more.
          </p>

          <p className="text-gray-700 leading-relaxed">
            For me, tech isn’t just about writing code—it’s about{" "}
            <span className="font-semibold">solving problems, experimenting with ideas, 
            and building products that matter</span>. I’m always excited to learn, grow, 
            and collaborate on projects that push me out of my comfort zone.
          </p>
        </motion.div>

        {/* Right Section - Skills Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg"
        >
          {[
            { icon: <Code size={32} />, label: "Frontend" },
            { icon: <Database size={32} />, label: "Databases" },
            { icon: <Globe size={32} />, label: "Web" },
            // { icon: <Smartphone size={32} />, label: "Mobile" },
            { icon: <Server size={32} />, label: "Backend" },
            { icon: <GitBranch size={32} />, label: "Version Control" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow cursor-pointer hover:shadow-lg transition"
            >
              <div className="text-purple-600">{skill.icon}</div>
              <p className="mt-2 text-sm text-gray-600">{skill.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
