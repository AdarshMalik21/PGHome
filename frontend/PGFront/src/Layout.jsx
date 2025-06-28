
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Header/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import landingPageVideo from './assets/landingPageVideo.mp4';

const Layout = () => {
  return (
   <>
   <div className="relative min-h-screen text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={landingPageVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   <Navbar />
   <main className='container mx-auto px-4'>    
        <Outlet />
    </main>
    <Footer />
    </div>
   </>
  )
}

export default Layout
