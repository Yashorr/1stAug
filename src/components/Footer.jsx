import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-romantic-purple/20 backdrop-blur-sm py-8 px-6">
      <div className="max-w-sm mx-auto text-center">
        {/* Flag Row */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl"></span>
            <span className="font-romantic text-romantic-purple font-medium">Rimmii</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-romantic-pink text-xl animate-bounce-heart">💕</span>
            <span className="text-romantic-coral text-lg animate-bounce-heart" style={{ animationDelay: '0.3s' }}>💖</span>
            <span className="text-romantic-pink text-xl animate-bounce-heart" style={{ animationDelay: '0.6s' }}>💕</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="font-romantic text-romantic-purple font-medium">Yessuur</span>
            <span className="text-2xl"></span>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-12 h-0.5 bg-romantic-pink/50"></div>
          <span className="text-romantic-coral">💝</span>
          <div className="w-12 h-0.5 bg-romantic-pink/50"></div>
        </div>

        {/* Made with Love */}
        <div className="space-y-2">
          <p className="font-handwritten text-lg text-romantic-pink">
            Made with ❤️ for my beautiful girlfriend
          </p>
          <p className="font-romantic text-sm text-romantic-purple/80">
            Two states, one love story
          </p>
        </div>

        {/* Date */}
        <div className="mt-4 pt-4 border-t border-romantic-pink/20">
          <p className="font-romantic text-xs text-romantic-purple/60">
            Celebrating since January 19, 2022
          </p>
        </div>

        {/* Decorative Hearts */}
        <div className="flex items-center justify-center space-x-3 mt-4">
          <span className="text-lg animate-bounce-heart">💕</span>
          <span className="text-sm animate-bounce-heart" style={{ animationDelay: '0.5s' }}>💖</span>
          <span className="text-lg animate-bounce-heart" style={{ animationDelay: '1s' }}>💗</span>
          <span className="text-sm animate-bounce-heart" style={{ animationDelay: '1.5s' }}>💝</span>
          <span className="text-lg animate-bounce-heart" style={{ animationDelay: '2s' }}>💕</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;