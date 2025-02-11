import { useState } from 'react';
import Carousel from '../components/Carousel';
import defaultProjects from '../data/defaultProjects';

export default function Projects() {
	const [rotation, setRotation] = useState(0);

	const projects = defaultProjects;
	const rotationAngle = 360 / projects.length;

	const handleClick = (direction) => {
		setRotation(
			(prev) =>
				prev + (direction === 'previous' ? -rotationAngle : rotationAngle)
		);
	};

	return (
		<div className="relative flex-1 flex perspective-distant">
      <div>
        <button className='absolute top-[50%] left-5 rounded-full px-5 cursor-pointer bg-zinc-600 z-10' onClick={() => handleClick('previous')}>&lt;</button>
      </div>
			<Carousel rotation={rotation} projects={projects} />
      <div>
        <button className='absolute top-[50%] right-5 rounded-full px-5 cursor-pointer bg-zinc-600 z-10' onClick={() => handleClick('next')}>&gt;</button>
      </div>
		</div>
	);
}
