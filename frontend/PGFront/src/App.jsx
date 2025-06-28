import { useState } from 'react'
import './App.css'
import './Components/Main/Hero.jsx'
import { Routes, Route } from 'react-router-dom';
import Hero from './Components/Main/Hero.jsx';
import Contact from './Components/Contact/Contact.jsx'
import Layout from './Layout.jsx';
import FlatTypeBoys from './Components/FlatType/FlatTypeBoys.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FlatTypeBoys />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/FlatTypeBoys" element={<FlatTypeBoys />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
