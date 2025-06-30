import { useState } from 'react'
import './App.css'
import './Components/Main/Hero.jsx'
import { Routes, Route } from 'react-router-dom';
import Hero from './Components/Main/Hero.jsx';
import Contact from './Components/Contact/Contact.jsx'
import Layout from './Layout.jsx';
import FlatTypeBoys from './Components/FlatType/FlatTypeBoys.jsx';
import { useEffect } from 'react';
import FlatsListing from './Components/Flatlisting/FlatListing.jsx';



function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const testCORS = async () => {
      console.log('Starting CORS test...');
      
      try {
        const response = await fetch('http://localhost:8000/api/flats/');
        
        console.group('[CORS TEST RESULTS]');
        console.log('✅ Response Status:', response.status);
        console.log('🔹 Headers:', {
          'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
          'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods')
        });

        const data = await response.json();
        console.log('📦 Sample Data (first item):', data[0]);
        console.groupEnd();
        
      } catch (error) {
        console.group('[CORS TEST FAILED]');
        console.error('❌ Error:', error.message);
        console.log('Full error:', error);
        console.groupEnd();
      }
    };

    testCORS();
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FlatTypeBoys />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/FlatTypeBoys" element={<FlatTypeBoys />} />
          <Route path = "/flats" element = {<FlatsListing />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
