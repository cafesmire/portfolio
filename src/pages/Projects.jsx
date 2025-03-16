import { act, useState } from 'react';
import {Carousel} from '../components';
import defaultProjects from '../data/defaultProjects';
import ProjectContext from '../context/ProjectContext';

export default function Projects() {
	const [rotation, setRotation] = useState(0);
	const [activeCard, setActiveCard] = useState(0);

	const projects = defaultProjects;
	const rotationAngle = 360 / projects.length;

	const handleClick = (direction) => {
		if (direction === 'previous') {
			setActiveCard((prev) => (prev > 0 ? prev-1 : projects.length - 1));
			setRotation((prev) => prev + rotationAngle);
		} else {
			setActiveCard((prev) => (prev < projects.length - 1 ? prev+1 : 0));
			setRotation((prev) => prev - rotationAngle);
		}
	};

	return (
		<div className="relative flex-1 flex flex-col perspective-distant">
			<button
				className="absolute top-[50%] -translate-y-[50%] left-5 rounded-full size-20 cursor-pointer bg-zinc-600 z-5"
				onClick={() => handleClick('previous')}
			>
				&lt;
			</button>
			<ProjectContext.Provider value={{ rotation, activeCard, setActiveCard }}>
				<Carousel projects={projects} />
			</ProjectContext.Provider>
			<button
				className="absolute top-[50%] -translate-y-[50%] right-5 rounded-full size-20 cursor-pointer bg-zinc-600 z-5"
				onClick={() => handleClick('next')}
			>
				&gt;
			</button>
		</div>
	);
}
