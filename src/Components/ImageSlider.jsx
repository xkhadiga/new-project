import React, { useState, useEffect } from 'react';

function ImageSlider() {

  const images = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/5264900/pexels-photo-5264900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1483181994834-aba9fd1e251a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]); 

  return (
    <div className="relative flex m-6  h-[65vh] rounded-lg overflow-hidden cursor-pointer">
      <a href="https://x.com/itskhadija_xo" target="_blank" >
        <img
          src={images[currentIndex]}
          effect="blur"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${loading ? 'image-placeholder opacity-50' : 'opacity-100'}`}
          alt="Shopping Slide"
          onLoad={() => setLoading(false)}
        />
      </a>
      <div className='absolute inset-0 flex justify-center items-center'>
        <h1 className=' text-5xl sm:text-6xl font-bold text-white'>
          Shop Smarter, Live Better!
        </h1>
      </div>
    </div>
  );
}

export default ImageSlider;
