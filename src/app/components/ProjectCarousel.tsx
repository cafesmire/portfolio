'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Carousel() {
  const cards = [
    { id: '1', title: 'Flappy Bird', description: 'OOP Game Design', image: '/images/flappybird.png' },
    { id: '2', title: 'Parkinson\'s FOG Detection', description: 'Health Science Deep Learning', image: '/images/brain.png' },
    { id: '3', title: 'Sentiment Analysis', description: 'Emotions from Context', image: '/images/NLP.png' },
  ];

  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null); // Track which card is hovered

  const handleRightClick = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  };

  const handleLeftClick = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const cardAngle = 360 / cards.length;

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Left Arrow */}
      <button
        onClick={handleLeftClick}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-20 hover:bg-gray-500 focus:outline-none"
      >
        &lt;
      </button>

      {/* 3D Carousel */}
      <div className="relative w-full h-[50vh] perspective-1000">
        <div
          className="flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
          style={{
            transform: `rotateY(${-activeCard * cardAngle}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 1s ease-in-out',
          }}
        >
          {cards.map((card, index) => {
            const rotation = index * cardAngle;
            const isActive = index === activeCard;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={card.id}
                className="absolute w-[20vw] h-[30vh] transition-transform duration-500 ease-in-out"
                style={{
                  transform: `rotateY(${rotation}deg) translateZ(350px) scale(${isActive ? '1.5' : '1.0'})`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Card Wrapper */}
                <div
                  className={`relative w-full h-full ${isActive ? 'group cursor-pointer' : ''}`}
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Front of the Card */}
                  <div
                    className={`absolute w-full h-full p-4 bg-cyan-950 shadow-lg rounded-md border-gray-700 border-2 text-center transition-transform duration-500`}
                    style={{
                      transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                    <h2 className="text-slate-200 font-bold text-xl mt-4">{card.title}</h2>
                    <p className="text-slate-200 mt-2">{card.description}</p>
                  </div>

                  {/* Back of the Card */}
                  <div
                    className="absolute inset-0 p-4 bg-gray-800 shadow-lg rounded-md border-gray-700 border-2 text-center transition-transform duration-500"
                    style={{
                      transform: isHovered ? 'rotateY(0deg)' : 'rotateY(180deg)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <h2 className="text-slate-200 font-bold text-xl">More Info</h2>
                    <p className="text-slate-200 mt-2">Here you can add more details or links!</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleRightClick}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 mr-3 rounded-full z-20 hover:bg-gray-500 focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
}
