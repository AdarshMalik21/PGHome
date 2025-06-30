import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-950">Contact Owner</h2>
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-950">Name: <span className="font-normal">Yogesh</span></p>
      </div>
      <div className="mb-2">
        <p className="text-lg text-gray-900">Contact Number 1: <span className="font-mono">8756XXXXXX</span></p>
      </div>
      <div>
        <p className="text-lg text-gray-900">Contact Number 2: <span className="font-mono">900154XXXX</span></p>
      </div>
    </div>
  );
};

export default Contact;