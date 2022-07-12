import React from 'react';
import '../../App.css';
import PhotoCards from '../cards/PhotoCards';
import BlogCards from '../cards/BlogCards';
// import HeroSection from '../herosection/HeroSection';
import Footer from '../footer/Footer.js';

function Blog() {
  return(<>
  {/* <HeroSection/> */}
  <PhotoCards/>
  <BlogCards/>
  <Footer/>
  </>

  );
   

}

export default Blog;