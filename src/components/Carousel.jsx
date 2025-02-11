import { useState } from "react";
import Card from "./Card";
import defaultProjects from "../data/defaultProjects";

export default function Carousel() {
  const projects = defaultProjects;

  const handleClick = (e) => {};

  return (
    <div className="carousel">
      <button
        className="previous absolute bg-zinc-500 px-2 py-2 rounded-full left-5"
        onClick={handleClick}
      >
        &lt;
      </button>
      {projects.map((project, idx) => {
        const rotation = (360 / projects.length) * idx;
        return <Card key={idx} project={project} />;
      })}
      <button
        className="next absolute bg-zinc-500 px-2 py-2 rounded-full right-5"
        onClick={handleClick}
      >
        &gt;
      </button>
    </div>
  );
}
