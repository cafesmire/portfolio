import { useState } from "react";
import Card from "./Card";

export default function Carousel({ projects, setProjects }) {
  const [isRotating, setIsRotating] = useState({
    rotating: false,
    direction: 'next',
  });

  function handleClick(e) {
    if (isRotating.rotating) return;
    setIsRotating((prev) => ({ ...prev, rotating: true }));
    if (e.target.className.includes("previous")) {
      setTimeout(() => {
        setProjects((prev) => {
          const newProject = [...prev];
          newProject.unshift(newProject.pop());
          return newProject;
        });
        setIsRotating((prev) => ({
          ...prev,
          rotating: false,
          direction: "previous",
        }));
      }, 1500);
    } else {
      setTimeout(() => {
        setProjects((prev) => {
          const newProject = [...prev];
          newProject.push(newProject.shift());
          return newProject;
        });
        setIsRotating((prev) => ({
          ...prev,
          rotating: false,
          direction: "next",
        }));
      }, 1500);
    }
  }

  return (
    <div className="relative flex-1 flex perspective-[3000px] bg-purple-950">
      <button
        className="previous size-8 bg-zinc-400 rounded-full absolute top-[50%] left-5 z-100"
        onClick={handleClick}
      >
        &lt;
      </button>
      <button
        className="previous size-8 bg-zinc-400 rounded-full absolute top-[50%] left-5 z-100"
        onClick={handleClick}
      >
        &lt;
      </button>
      {projects.map((item, idx) => {
        const rotation = Math.floor((360 / projects.length) * idx);
        const zIndex = idx > 0 && idx < projects.length - 1 ? -idx : idx;
        return (
          <Card
            item={item}
            key={idx}
            rotation={rotation}
            zIndex={zIndex}
            isRotating={isRotating.rotating}
            direction={isRotating.direction}
          />
        );
      })}
      <button
        className="next size-8 bg-zinc-400 rounded-full absolute top-[50%] right-5 z-100"
        onClick={handleClick}
      >
        &gt;
      </button>
      <button
        className="next size-8 bg-zinc-400 rounded-full absolute top-[50%] right-5 z-100"
        onClick={handleClick}
      >
        &gt;
      </button>
    </div>
  );
}
