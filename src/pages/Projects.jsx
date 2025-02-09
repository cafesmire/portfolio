import { useEffect, useState } from "react";
import Card from "../components/Card";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";

const images = [image1, image2, image3, image4];
const repoProjects = ["Flappy", "Resume", "Todo", "Menu"];
const rotation = repoProjects.map(
  (_, idx) => Math.floor(360 / repoProjects.length) * idx
);

export default function Projects() {
  const [projects, setProjects] = useState(repoProjects);


  function handleClick(e){
	const previousProject = () => {
		const arr = projects.copyWithin();
		const swap = arr.shift();
		arr.push(swap);
		setProjects(arr);
	}
	const nextProject = () => {
		const arr = projects.copyWithin();
		const swap = arr.pop();
		arr.unshift(swap);
		setProjects(arr);
	}
	e.target.className.includes('previous') ? previousProject() : nextProject();
  }

  return (
    <div className="flex flex-col flex-1">
      {projects && (
        <div className="relative flex-1 perspective-distant">
          <button
            className="previous absolute top-[calc(50%-5px)] left-10 size-8 rounded-full bg-zinc-500 border-1 cursor-pointer"
            onClick={handleClick}
          >
            &lt;
          </button>
          {projects.map((item, idx) => {
            return (
              <Card
                key={idx}
                name={item}
                rotationAmount={rotation[idx]}
                image={images[idx]}
              />
            );
          })}
          <button
            className="next absolute top-[calc(50%-5px)] right-10 size-8 rounded-full bg-zinc-500 border-1 cursor-pointer"
            onClick={handleClick}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
