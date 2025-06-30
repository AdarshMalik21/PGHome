import React, { useState, useEffect } from 'react';
import Card from '../Card/Card.jsx';

const FlatsListing = () => {
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlats = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/flats/');
        if (!response.ok) throw new Error('Failed to fetch flats');
        const data = await response.json();

        // Use the paginated results array
        const processedFlats = Array.isArray(data.results) ? data.results : [];
        setFlats(processedFlats);
      } catch (err) {
        setError(err.message);
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlats();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-lg">Loading flats...</p>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-red-500 text-lg">Error: {error}</p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl relative text-gray-900 font-bold mb-6">Available Flats</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flats.map((flat, idx) => (
          <Card
            key={flat.id || idx}
            society={flat.society}
            price={flat.price}
            image={flat.image_url} // Use image_url from your API
          />
        ))}
      </div>
    </div>
  );
};

export default FlatsListing;