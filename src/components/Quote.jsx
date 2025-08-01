import React from 'react';

const Quote = () => {
  return (
    <section className="relative bg-gradient-love py-16 px-6 overflow-hidden">
      {/* Background Hearts */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-12 left-8 text-6xl text-romantic-pink animate-float-hearts">💕</div>
        <div className="absolute top-24 right-12 text-4xl text-romantic-coral animate-float-hearts" style={{ animationDelay: '1s' }}>💖</div>
        <div className="absolute bottom-16 left-16 text-5xl text-romantic-purple animate-float-hearts" style={{ animationDelay: '2s' }}>❤️</div>
        <div className="absolute bottom-32 right-8 text-3xl text-romantic-teal animate-float-hearts" style={{ animationDelay: '3s' }}>💗</div>
      </div>

      <div className="relative max-w-sm mx-auto text-center">
        {/* Quote Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-heart animate-fade-in-up">
          <div className="mb-4">
            <span className="text-4xl text-romantic-pink">❝</span>
          </div>
          
          <blockquote className="font-romantic text-lg text-romantic-purple leading-relaxed mb-6">
            "Love builds bridges when two worlds collide. 
            <br /><br />
            Distance means nothing when someone means everything."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-0.5 bg-romantic-pink"></div>
            <span className="text-romantic-coral text-lg">💕</span>
            <div className="w-8 h-0.5 bg-romantic-pink"></div>
          </div>
          
          <cite className="font-handwritten text-romantic-pink text-xl">
            "My love, my heart, my everything ,my bestfriend "
          </cite>
          
          <div className="mt-6 space-y-3">
            <div className="bg-romantic-cream/80 rounded-xl px-4 py-3">
              <p className="font-romantic text-sm text-romantic-purple font-medium">
                Meri chikkii🥺
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="font-romantic text-romantic-purple">Two different personalities</span>
              <span className="text-romantic-pink">💕</span>
              <span className="font-romantic text-romantic-purple">One beautiful love</span>
            </div>
          </div>
          
          <div className="mt-4">
            <span className="text-4xl text-romantic-pink">❞</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-romantic-pink rounded-full animate-bounce-heart"></div>
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-romantic-coral rounded-full animate-bounce-heart" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-romantic-purple rounded-full animate-bounce-heart" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Quote;