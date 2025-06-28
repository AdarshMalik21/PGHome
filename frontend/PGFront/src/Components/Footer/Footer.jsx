import React from 'react'
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  
    return (
    <footer id = "contact" className="bg-white/30 py-6 px-4 flex flex-col items-center space-y-4">
      <div className="flex space-x-6 text-black text-xl">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-600 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-500 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-700 transition" />
        </a>
        <hr />
      </div>

      <p className='text-gray-900'>@2025 Adax All Rights Reserved</p>

      <div className="w-20 h-[2px] bg-gray-400"></div>
    </footer>
  );
  
}

export default Footer
