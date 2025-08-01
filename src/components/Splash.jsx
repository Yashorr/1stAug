// src/components/Splash.jsx
import React, { useEffect, useState } from 'react';

const Splash = ({ onComplete }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create floating hearts
    const heartArray = Array.from({ length: 8 }, (_, i) => i);
    setHearts(heartArray);

    // Auto-transition after 3 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-romantic flex items-center justify-center overflow-hidden">
      {/* Floating Hearts */}
      {hearts.map((heart, index) => (
        <div
          key={heart}
          className="absolute text-4xl animate-float-hearts"
          style={{
            left: `${(index * 12) + 10}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${4 + (index % 3)}s`
          }}
        >
          ❤️
        </div>
      ))}

      {/* Main Content */}
      <div className="text-center px-8 animate-fade-in-up">
        <h1 className="font-handwritten text-5xl md:text-6xl text-romantic-pink font-bold mb-4 animate-bounce-heart">
          Happy Girlfriend's Day
        </h1>
        <p className="font-romantic text-xl text-romantic-coral">
          Celebrating Our Beautiful Journey
        </p>
        <div className="mt-6 text-3xl animate-bounce-heart" style={{ animationDelay: '1s' }}>
          💕
        </div>
      </div>

      {/* Tap to continue hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="font-romantic text-sm text-romantic-purple opacity-70 animate-pulse">
          Tap anywhere to continue
        </p>
      </div>

      {/* Invisible overlay for tap detection */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={onComplete}
      />
    </div>
  );
};

export default Splash;
