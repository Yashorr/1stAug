import React, { useState } from 'react';
import Splash from '../components/Splash';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Quote from '../components/Quote';
import Footer from '../components/Footer';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <Splash onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Timeline />
      <Quote />
      <Footer />
    </div>
  );
};

export default Index;
