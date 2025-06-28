import React from 'react'
import { Link } from 'react-router-dom'
// import Hero from '../Main/Hero.jsx'


const FlatTypeBoys = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Select PG Room Types</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <div className="flex-1 bg-white/30 rounded-2xl flex flex-col items-center justify-center h-64 shadow hover:scale-105 transition">
        <Link to = '/Hero'>
          <h3 className="text-2xl font-semibold mb-2 text-blue-900">Solo</h3>
          </Link>
          <p className="text-gray-700">Private room for one person.</p>
        </div>
        <div className="flex-1 bg-white/30 rounded-2xl flex flex-col items-center justify-center h-64 shadow hover:scale-105 transition">
        <Link to = '/Hero'>
          <h3 className="text-2xl font-semibold mb-2 text-blue-900">Double Sharing</h3>
          </Link>
          <p className="text-gray-700">Room shared by two people.</p>
        </div>
        <div className="flex-1 bg-white/30 rounded-2xl flex flex-col items-center justify-center h-64 shadow hover:scale-105 transition">
        <Link to = '/Hero'>
          <h3 className="text-2xl font-semibold mb-2 text-blue-900">Triple Sharing</h3>
          </Link>
          <p className="text-gray-700">Room shared by three people.</p>
        </div>
      </div>
    </div>
  )
}

export default FlatTypeBoys