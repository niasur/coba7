import React from 'react';

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-blue-500 flex flex-col items-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-blue-500"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0% 100%)' }}
      ></div>
      <br></br>

      <div className="relative pt-20 pb-10 text-center z-10">
        {/* Foto dengan Bingkai Bulat */}
        <div className="flex justify-center mb-6">
          <div className="w-40 h-40 rounded-full border-4 border-gray-300 overflow-hidden shadow-lg">
            <img
              src="ppq.jpeg" // Ganti dengan URL foto Anda
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Me Section */}
        <h1 className="text-3xl font-bold text-center text-gray-800">About Me</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Hello, I'm snsr</h2>
        <p className="mt-4 text-lg text-gray-800">
          I am a fullstack developer with a love for web development, UI/UX design, and building efficient systems.
        </p>

        {/* Social Media Links */}
        <div className="mt-6">
          <a
            href="https://github.com/niasur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 mx-3 text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nia-surniati-967259213"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 mx-3 text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/snsr_28?igsh=eGk1cjMxd3M2a3Zr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 mx-3 text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;