import React, { useState, useEffect } from 'react';
import { ArrowUp } from '../assets/Icons/HomeIcons';

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed z-50 bottom-4 right-4 p-2 bg-[#756d5d] opacity-25 text-white rounded-full shadow-lg cursor-pointer transition-opacity duration-300 ${isVisible ? 'opacity-80' : 'opacity-0 pointer-events-none'}`} onClick={scrollToTop}>
     <ArrowUp className="w-6 h-6" />
    </div>
  );
};

export default UpButton;
