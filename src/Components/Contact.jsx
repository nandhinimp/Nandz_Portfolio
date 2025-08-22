import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
  <section id="contact" className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 text-gray-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left side - Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-300">Get in Touch</h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-gray-400/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-gray-400/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-gray-400/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right side - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-300">Contact Info</h2>
          <div className="flex items-center gap-4">
            <Linkedin className="w-7 h-7 text-purple-400" />
            <a href="https://www.linkedin.com/in/-nandhini/" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition">
              https://www.linkedin.com/in/-nandhini/
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Github className="w-7 h-7 text-purple-400" />
            <a href="https://github.com/nandhinimp" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition">
              github.com/nandhinimp
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-7 h-7 text-purple-400" />
            <a href="nandhini.m.0714@gmail.com" className="hover:text-purple-300 transition">
nandhini.m.0714@gmail.com
            </a>
          </div>
          {/* <div className="flex items-center gap-4">
            <Phone className="w-7 h-7 text-purple-400" />
            <p>+91 98765 43210</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-7 h-7 text-purple-400" />
            <p>Bangalore, India</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
