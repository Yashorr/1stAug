import React from 'react';
import couplePhoto from '../assets/us.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-sunset flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center max-w-sm mx-auto">
        {/* Couple Photo */}
        <div className="relative mb-8 animate-fade-in-up">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-heart bg-white p-2">
            <img 
              src={couplePhoto}
              alt="Our Beautiful Journey"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Decorative hearts around photo */}
          <div className="absolute -top-4 -right-4 text-2xl animate-bounce-heart">❤️</div>
          <div className="absolute -bottom-4 -left-4 text-xl animate-bounce-heart" style={{ animationDelay: '0.5s' }}>💕</div>
          <div className="absolute top-8 -left-6 text-lg animate-bounce-heart" style={{ animationDelay: '1s' }}>💖</div>
        </div>

        {/* Names */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-handwritten text-4xl text-romantic-pink font-bold mb-2">
            Rim & Yessu
          </h1>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <span className="text-romantic-coral"></span>
            <span className="font-romantic text-romantic-purple">Marathi</span>
            <span className="text-romantic-pink font-handwritten text-2xl">❤</span>
            <span className="font-romantic text-romantic-purple">Bihari</span>
            <span className="text-romantic-coral"></span>
          </div>
        </div>

        {/* Since Date */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="font-romantic text-lg text-romantic-purple mb-2">Since</p>
          <div className="bg-white/80 rounded-2xl px-6 py-3 shadow-soft">
            <p className="font-handwritten text-2xl text-romantic-pink font-bold">
              January 19, 2022
            </p>
            <p className="font-romantic text-sm text-romantic-purple mt-1">
              3 Years & 7 Months of Love
            </p>
          </div>
        </div>

        {/* Cultural Greetings */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="bg-romantic-cream/80 rounded-xl px-4 py-3 shadow-soft">
            <p className="font-romantic text-romantic-purple text-sm mb-1"></p>
            <p className="font-handwritten text-lg text-romantic-pink">
              तुझ्या सोबतचा प्रत्येक क्षण अनमोल...
            </p>
          </div>
          <div className="bg-romantic-cream/80 rounded-xl px-4 py-3 shadow-soft">
            <p className="font-romantic text-romantic-purple text-sm mb-1"></p>
            <p className="font-handwritten text-lg text-romantic-pink">
              हमार प्यार बा अपार...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;