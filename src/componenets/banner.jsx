import React, { useState } from 'react';

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80",
      title: "Digital Prism",
      description: "Where geometry meets art in a stunning display of light and form.",
    },
    {
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
      title: "Tech Haven",
      description: "Immerse yourself in the cutting edge of technology and innovation.",
    },
    {
      image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80",
      title: "Neural Dreams",
      description: "AI-generated masterpieces that blur the line between human and machine creativity.",
    },
  ];

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      {/* Add styles and JSX elements here */}
      {/* Carousel container */}
      <div className="carousel-container relative">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
          <div className="progress-bar absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
        </div>
        {/* Navigation buttons */}
        <button onClick={prevSlide} className="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation" title="Previous slide">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextSlide} className="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation" title="Next slide">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Carousel track */}
        <div className="carousel-track relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${activeIndex === index ? "active" : "hidden"} absolute top-0 left-0 w-full h-full`}
            >
              <div className="w-full h-full p-4 sm:p-8">
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-purple-500/40 mix-blend-overlay" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{slide.title}</h3>
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Indicators */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full ${activeIndex === index ? "bg-white/60" : "bg-white/20"} hover:bg-white/60 transition-colors`}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
