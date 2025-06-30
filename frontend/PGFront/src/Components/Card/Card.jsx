import React from 'react';
import placeholderImage from '../../assets/image.png';
import { useNavigate } from 'react-router-dom';

const Card = ({ society, price, image }) => {
  const navigate = useNavigate();

  // Clean and decode the image URL from API
  const getCleanImageUrl = () => {
  if (!image) return placeholderImage;

  try {
    let cleanUrl = image;

    // If it's already an absolute URL (Cloudinary or any http/https), just return it
    if (cleanUrl.startsWith('http')) {
      return cleanUrl;
    }

    // If it's a local media path, prepend your backend URL
    if (cleanUrl.startsWith('/media/')) {
      return `http://localhost:8000${cleanUrl}`;
    }

    // Fallback to placeholder
    return placeholderImage;
  } catch (error) {
    console.error('Error processing image URL:', error);
    return placeholderImage;
  }
};

  return (
    <div className=" bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 hover:-translate-y-1">
      <img 
        src={getCleanImageUrl()}
        alt={society || 'Flat image'}
        className="w-full h-48 object-cover bg-gray-100"
        onError={(e) => {
          e.target.src = placeholderImage;
          e.target.classList.add('bg-gray-200');
        }}
      />
      <div className="p-4">
        <h3 className="text-lg text-gray-950 font-semibold mb-2">{society || 'Unknown Society'}</h3>
        <p className="text-gray-900 font-bold mb-3">
          ₹{price ? parseFloat(price).toLocaleString('en-IN') : 'N/A'}/month
        </p>
        <button onClick={() => {
          navigate('/contact')
        }} className="hover:bg-pink-500 bg-pink-400  px-4 py-2 rounded-md transition text-gray-900 ">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;