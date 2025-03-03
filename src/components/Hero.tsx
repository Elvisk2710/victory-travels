import React, { useState, useEffect } from 'react';
import criuse from "../assets/criuse.png";
import emirates from "../assets/emirates.png";
import jabal from "../assets/jabal.png";
import nyanga from "../assets/nyanga.png";

const slides = [
  {
    image: emirates,
    title: "Emirates Airlines",
    description: "Experience luxury at 30,000 feet"
  },
  {
    image: jabal,
    title: "Jabal Omar Makkah Hotel",
    description: "Spiritual tranquility meets modern comfort"
  },
  {
    image: criuse,
    title: "Scarlet Lady Cruise Ship",
    description: "Set sail on an unforgettable journey"
  },
  {
    image: nyanga,
    title: "Zimbabwe Nyanga National Park",
    description: "Discover nature's untamed beauty"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden" id='home'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl md:text-2xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}