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

  const handleRightClick = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  };

  const handleLeftClick = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const cardAngle = 360 / cards.length; // Calculate angle for each card

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
            transform: `rotateY(${-activeCard * cardAngle}deg)`, // Rotate the entire group of cards
            transformStyle: 'preserve-3d',
            transition: 'transform 1s ease-in-out',
          }}
        >
          {cards.map((card, index) => {
            const rotation = index * cardAngle; // Calculate rotation for each card
            const isActive = index === activeCard;

            return (
              <div
                key={card.id}
                className="absolute w-[20vw] h-[30vh]"
                style={{
                  transform: `rotateY(${rotation}deg) translateZ(400px)`, // Position cards in a circular arrangement
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Scale the inner content based on active card */}
                <div
                  className={`p-4 bg-cyan-950 shadow-lg rounded-md border-gray-700 border-2 text-center transition-transform duration-500 ease-in-out ${isActive ? 'scale-150' : 'scale-100'}`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={300}
                    height={300}
                    className="object-cover rounded-t-lg"
                  />
                  <h2 className="text-slate-200 font-bold text-xl mt-4">{card.title}</h2>
                  <p className="text-slate-200 mt-2">{card.description}</p>
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
