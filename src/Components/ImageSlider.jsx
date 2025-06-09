import React, { useState, useEffect } from 'react';

function ImageSlider() {

  const images = [
    "https://images.pexels.com/photos/20232007/pexels-photo-20232007/free-photo-of-sign-in-a-clothes-shop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        {/* <h1 className=' text-5xl sm:text-6xl font-bold text-white'>
          Shop Smarter, Live Better!
        </h1> */}
      </div>
    </div>
  );
}

export default ImageSlider;
