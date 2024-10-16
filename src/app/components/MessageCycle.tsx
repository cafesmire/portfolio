import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function MessageCycle() {
  const messages = [
    'Welcome To My World',
    'Ideas Turned Into Reality',
    'Explore. Learn. Connect',
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);
  const [heroContentVisible, setHeroContentVisible] = useState(false);

  const handleHero = () => {
    setIsVisible(false);
    setTimeout(() => { setHeroVisible(true); }, 1000);

    // Delay showing content to make it fade in after the background
    setTimeout(() => { setHeroContentVisible(true); }, 1500);
  };

  useEffect(() => {
    const cycleMessages = () => {
      setIsVisible(false);

      setTimeout(() => {
        setMessageIndex((prevIndex) => prevIndex + 1);
        setIsVisible(true);
      }, 1000);

      if (messageIndex === messages.length - 1) {
        setTimeout(() => {
          handleHero();
        }, 1000);
      }
    };

    const interval = setInterval(cycleMessages, 4000);
    return () => clearInterval(interval);
  }, [messageIndex, messages.length]);

  return (
    <div className="relative flex justify-center items-center max-w-screen h-[45vh] ml-8 mr-12 rounded-3xl"
        style={{
        backgroundColor: heroVisible ? 'rgba(0, 0, 0, .85)' : 'rgba(0, 0, 0, 0)',
        border: '2px solid',
        borderColor: heroVisible ? 'rgba(55, 65, 81, .50)' : 'rgba(55, 65, 81, 0)',
        transition: 'background-color border-color 1s ease-in-out',
      }}>
        
      {/* Message Section */}
      <div className={`text-slate-200 text-7xl font-extrabold p-6 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {messages[messageIndex]}
      </div>

      {/* Hero Content Section */}
      {heroVisible && (
        <div className="flex justify-between w-full h-full">
          {/* Text Section */}
          <div className={`relative w-5/12 h-full transition-opacity duration-1000 ease-in-out
              ${heroContentVisible ? 'opacity-100' : 'opacity-0'}`}>

            <h1 className="text-slate-200 text-5xl font-bold pt-4 pb-2 border-b-2 border-b-slate-200 mr-10">Welcome</h1>
            <p className="text-slate-200 text-xl mt-2 mr-8">
            Explore the site to discover more about my work and how we can collaborate. Use the dropdown menu above to navigate,
            visit the &apos;Contact&apos; page to connect, and scroll down to see what I offer in more detail.
            </p>

          </div>

          {/* Image Section */}
          <div className={`relative w-full h-full transition-opacity duration-1000 ease-in-out ${heroContentVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={'/images/heroBackground.jpg'}
              alt={'homeOffice'}
              fill
              className="rounded-r-3xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
