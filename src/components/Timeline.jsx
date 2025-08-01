// src/components/Timeline.jsx
import React from 'react';

const Timeline = () => {
  const events = [
    {
      date: "Jan 11, 2022",
      title: "First Hey 💕",
      description: "When our worlds first collided through a simple message",
      type: "up",
      icon: "📱"
    },
    {
      date: "Jan 2022",
      title: "First Meeting",
      description: "Finally face to face - bit awkward and cute at the same time!",
      type: "up",
      icon: "🦋"
    },
    {
        date:"19 JAN 2022",
        title:"The Proposal",
        description:"I asked you to be mine a bit accidently a bit luckily and a lot nervously in the garden on my knees in front of everyone, uff",
        type: "up",
        icon: "🤵"

    },
    {
      date: "Feb 14, 2022",
      title: "First Valentine's",
      description: "Even though it was a bit sad because of some unwanted people , but you made me beleive in love again, and made me fall more in love with you",
      type: "down",
      icon: "💝"
    },
    {
      date: "19 Nov 2022",
      title: "The First UmmHmm",
      description: "The only word that can describe that day is PERFECT",
      type: "up",
      icon: "😍"
    },
    
    {
      date: "Jan 2023",
      title: "JEE Separation",
      description: "Missing each other during the longest cold season",
      type: "down",
      icon: "❄"
    },
    
    {
      date: "Jan 2023",
      title: "One Year Strong",
      description: "365 days of love, laughter, trust and memories",
      type: "up",
      icon: "🎉"
    },
    {
      date: "2023",
      title: "The most difficult year",
      description: "Your neet and long distance , a lots and lots of fight but still we made it through with our love together",
      type: "down",
      icon: "🙌"
    },
   
    {
      date: "Jan 2024",
      title: "Two Years of Magic",
      description: "Still growing closer and stronger every day",
      type: "up",
      icon: "✨"
    },
    {
      date: "Today",
      title: "Forever & Always till the end of time",
      description: "Here's to many more beautiful moments together",
      type: "up",
      icon: "🌟"
    }
  ];

  return (
    <section className="bg-romantic-cream py-12 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="font-handwritten text-3xl text-romantic-pink text-center mb-8 font-bold">
          Our Journey Together
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-romantic-purple opacity-30" />

          {events.map((event, index) => (
            <div
              key={index}
              className="relative mb-8 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-4 w-4 h-4 rounded-full border-4 border-white shadow-soft ${
                  event.type === 'up'
                    ? 'bg-romantic-pink'
                    : 'bg-romantic-purple'
                }`}
              />

              {/* Event Card */}
              <div
                className={`ml-12 ${
                  event.type === 'up'
                    ? 'bg-gradient-to-r from-romantic-pink/20 to-romantic-teal/20'
                    : 'bg-gradient-to-r from-romantic-purple/20 to-muted/40'
                } rounded-xl p-4 shadow-soft hover:scale-105 transition-transform duration-300 hover:shadow-romantic`}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{event.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-romantic font-semibold text-romantic-purple">
                        {event.title}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-romantic ${
                          event.type === 'up'
                            ? 'bg-romantic-pink/30 text-romantic-pink'
                            : 'bg-romantic-purple/30 text-romantic-purple'
                        }`}
                      >
                        {event.date}
                      </span>
                    </div>
                    <p className="text-sm text-romantic-purple/80 font-romantic">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
