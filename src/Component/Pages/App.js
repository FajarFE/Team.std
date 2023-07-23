import React from 'react';
import '../../Asset/css/App.css';
import Navbar from '../Micros/Navbar';
import Hero from '../Micros/Hero';
import { hero } from '../../Asset/index';
import Mockup from '../Micros/Mockup';
import Product from '../Micros/Product';
import Footer from '../Micros/Footer';
import Review from '../Micros/Review';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
  };

  // Gaya untuk layar medium (md)
  const backgroundStyleMd = {
    ...backgroundStyle,
    backgroundPosition: 'calc(100% - -250px) 0', // Ubah sesuai kebutuhan
  };
  

  // Gaya untuk layar large (lg)
  const backgroundStyleLg = {
    ...backgroundStyle,
    backgroundPosition: 'center', // Ubah sesuai kebutuhan
  };

  return (
    <>
      <div className='overflow-hidden bg-[#f6f6f6]'>
        <div style={backgroundStyleMd} className="md:hidden"> {/* Untuk layar medium (md) */}
          <Navbar />
          <Hero />
        </div>
        <div style={backgroundStyleLg} className="hidden md:block"> {/* Untuk layar large (lg) */}
          <Navbar />
          <Hero />
        </div>
        <div className="container mx-auto">
          <Mockup/>
        </div>
        <div className="container mx-auto">
          <Product/>
        </div>
        <div className="container mx-auto">
          <Review/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
