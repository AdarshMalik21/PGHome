import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../assets/image.png'

const Navbar = () => {
  return (
    <nav className="w-full  top-0 left-0 z-50 px-6 py-4 flex items-center justify-between text-white ">
      <div className="flex items-center gap-4">
        <img src={image} alt="PG Home Logo" className="h-10 rounded-4xl" />
        <div className="text-2xl font-bold text-gray-900">
          <Link to="/">PG Home</Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 font-medium">
        <Link to="/" className="hover:text-blue-300 transition text-gray-900">Home</Link>
        <Link to="/contact" className="hover:text-blue-300 transition text-gray-900">Contact</Link>
        <Link
          to="/signup"
          className="hover:bg-pink-500 bg-pink-400  px-4 py-2 rounded-md transition text-gray-900 cur"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar
